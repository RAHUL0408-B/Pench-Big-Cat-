import { NextRequest, NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";
import { InquiryApiResponse } from "@/types/inquiry";

// Simple in-memory rate limiting map for basic abuse prevention
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 60000 }); // 1 minute window
    return false;
  }

  if (record.count >= 5) {
    return true; // Limit exceeded
  }

  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "local-client";

    if (isRateLimited(ip)) {
      return NextResponse.json<InquiryApiResponse>(
        {
          success: false,
          message:
            "Too many inquiry submissions from this network. Please wait a minute or contact reservations directly.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 1. Validate submission payload with Zod
    const validationResult = inquirySchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json<InquiryApiResponse>(
        {
          success: false,
          message: "Please correct the highlighted errors in your inquiry submission.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Anti-spam honeypot detection
    if (data.honeypot && data.honeypot.trim() !== "") {
      return NextResponse.json<InquiryApiResponse>(
        {
          success: false,
          message: "Spam submission flagged.",
        },
        { status: 400 }
      );
    }

    // 3. Email integration handling
    const apiKey = process.env.EMAIL_API_KEY;
    const adminEmail = process.env.ADMIN_INQUIRY_EMAIL || "reservations@penchbigcat.com";
    const fromEmail = process.env.EMAIL_FROM || "inquiries@penchbigcat.com";
    const inquiryId = `PBC-${Date.now().toString().slice(-6)}`;

    const emailSubject = `[Inquiry #${inquiryId}] New Guest Stay Request — ${data.fullName} (${data.preferredCategory})`;
    const emailHtmlBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #192421; padding: 24px; border: 1px solid #D9D8D1; background-color: #F7F5F0;">
        <h2 style="color: #324D3C; border-bottom: 2px solid #C8A97E; padding-bottom: 8px;">Pench Big Cat Nature Resort — New Booking Inquiry</h2>
        <p><strong>Inquiry Reference:</strong> #${inquiryId}</p>
        <p><strong>Guest Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <hr style="border: 0; border-top: 1px solid #D9D8D1; margin: 16px 0;" />
        <h3 style="color: #192421;">Stay Requirements:</h3>
        <p><strong>Check-In Date:</strong> ${data.checkInDate}</p>
        <p><strong>Check-Out Date:</strong> ${data.checkOutDate}</p>
        <p><strong>Party Composition:</strong> ${data.adults} Adults, ${data.children} Children</p>
        <p><strong>Rooms Requested:</strong> ${data.roomsCount}</p>
        <p><strong>Preferred Category:</strong> ${data.preferredCategory}</p>
        ${data.preferredRoom ? `<p><strong>Preferred Villa / Stay:</strong> ${data.preferredRoom}</p>` : ""}
        ${data.specialRequests ? `<p><strong>Special Requests:</strong><br/>${data.specialRequests}</p>` : ""}
        <hr style="border: 0; border-top: 1px solid #D9D8D1; margin: 16px 0;" />
        <p style="font-size: 12px; color: #5E3A29;"><em>Note: Submitting this inquiry does not confirm a booking or guarantee room availability until confirmed by resort management.</em></p>
      </div>
    `;

    // Check if transactional email provider API is configured
    if (!apiKey) {
      // In development mode or until owner inputs EMAIL_API_KEY, document explicit instructions
      return NextResponse.json<InquiryApiResponse>({
        success: true,
        inquiryId,
        message:
          "Thank you for your inquiry. Your request details have been validated by the server. (Dev Notice: Configure EMAIL_API_KEY in .env.local to route live email dispatches to reservations@penchbigcat.com). Your inquiry is not a confirmed reservation.",
      });
    }

    // Provider call (e.g. Resend standard fetch API)
    const providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [adminEmail],
        reply_to: data.email,
        subject: emailSubject,
        html: emailHtmlBody,
      }),
    });

    if (!providerResponse.ok) {
      const errorText = await providerResponse.text();
      console.error("Transactional email provider error:", errorText);
      return NextResponse.json<InquiryApiResponse>(
        {
          success: false,
          message:
            "Our email delivery system experienced a temporary issue. Please reach out to our team directly at reservations@penchbigcat.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json<InquiryApiResponse>({
      success: true,
      inquiryId,
      message:
        "Thank you for your inquiry. The resort team will review your request and contact you directly. Your inquiry is not a confirmed reservation.",
    });
  } catch (err) {
    console.error("Inquiry API Error:", err);
    return NextResponse.json<InquiryApiResponse>(
      {
        success: false,
        message: "An unexpected error occurred while processing your inquiry.",
      },
      { status: 500 }
    );
  }
}
