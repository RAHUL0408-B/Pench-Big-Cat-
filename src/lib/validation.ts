import { z } from "zod";

export const inquirySchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Please enter your full name (minimum 2 characters)")
      .max(80, "Name is too long"),
    email: z
      .string()
      .email("Please provide a valid email address for our reservations team")
      .max(100, "Email is too long"),
    phone: z
      .string()
      .min(7, "Please provide a valid phone or mobile number")
      .max(25, "Phone number is too long"),
    checkInDate: z.string().min(1, "Please choose your arrival check-in date"),
    checkOutDate: z.string().min(1, "Please choose your departure check-out date"),
    adults: z
      .number()
      .min(1, "At least 1 adult is required")
      .max(20, "For parties larger than 20, please contact us directly"),
    children: z
      .number()
      .min(0)
      .max(15)
      .default(0),
    roomsCount: z
      .number()
      .min(1, "At least 1 room is required")
      .max(10)
      .default(1),
    preferredCategory: z
      .string()
      .min(1, "Please select your preferred stay category"),
    preferredRoom: z.string().optional(),
    specialRequests: z
      .string()
      .max(1000, "Special requests cannot exceed 1,000 characters")
      .optional(),
    agreePrivacy: z
      .boolean()
      .refine((val) => val === true, "You must acknowledge the privacy policy to proceed"),
    honeypot: z.string().max(0, "Spam detected").optional(),
  })
  .refine(
    (data) => {
      if (!data.checkInDate || !data.checkOutDate) return true;
      const inDate = new Date(data.checkInDate);
      const outDate = new Date(data.checkOutDate);
      return outDate > inDate;
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOutDate"],
    }
  );

export type InquirySchemaType = z.infer<typeof inquirySchema>;
