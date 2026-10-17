"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ROOMS_DATA } from "@/content/rooms";
import { inquirySchema } from "@/lib/validation";
import { InquiryApiResponse } from "@/types/inquiry";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Info,
} from "lucide-react";

export function InquiryForm() {
  const searchParams = useSearchParams();
  const preselectedRoom = searchParams.get("room") || "";
  const preselectedCategory = searchParams.get("category") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 2,
    children: 0,
    roomsCount: 1,
    preferredCategory: preselectedCategory || "Signature Villa",
    preferredRoom: preselectedRoom || "",
    specialRequests: "",
    agreePrivacy: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<InquiryApiResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Auto-sync prefilled room params
  useEffect(() => {
    if (preselectedRoom) {
      const match = ROOMS_DATA.find((r) => r.slug === preselectedRoom);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          preferredRoom: match.name,
          preferredCategory: match.category,
        }));
      }
    }
  }, [preselectedRoom]);

  const validateClient = () => {
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const errorMap: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (!errorMap[path]) {
          errorMap[path] = issue.message;
        }
      });
      setErrors(errorMap);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for field upon edit
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: InquiryApiResponse = await response.json();

      if (!response.ok || !data.success) {
        setServerError(
          data.message || "Failed to process inquiry. Please check the fields and try again."
        );
        if (data.errors) {
          const formatted: Record<string, string> = {};
          Object.entries(data.errors).forEach(([key, msgs]) => {
            formatted[key] = msgs[0];
          });
          setErrors(formatted);
        }
      } else {
        setSubmissionSuccess(data);
      }
    } catch {
      setServerError(
        "A network connection error occurred. Please verify your connection or email reservations directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // If already successfully submitted, show clear receipt
  if (submissionSuccess) {
    return (
      <div className="bg-stone-sand border border-forest-canopy/30 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 animate-fade-in shadow-sm">
        <div className="w-16 h-16 bg-forest-canopy/15 text-forest-canopy mx-auto rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs tracking-luxury text-brass uppercase">
            Inquiry Reference: {submissionSuccess.inquiryId}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-forest-night font-light">
            Inquiry Received
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-forest-night/80 font-sans max-w-lg mx-auto">
          Thank you for your inquiry, <strong>{formData.fullName}</strong>. The resort reservations team will review your requested dates (
          {formData.checkInDate} to {formData.checkOutDate}) for{" "}
          <strong>{formData.preferredCategory}</strong> and contact you with seasonal availability and rate proposals.
        </p>

        <div className="bg-stone-cream p-4 border border-forest-night/10 text-xs text-earth-bark font-mono text-left space-y-1">
          <p className="font-semibold text-forest-night uppercase tracking-wider">
            Important Reservation Notice:
          </p>
          <p>
            Your inquiry is not a confirmed reservation. Room availability and tariff locking require an official confirmation voucher from Pench Big Cat Nature Resort.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setSubmissionSuccess(null);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                checkInDate: "",
                checkOutDate: "",
                adults: 2,
                children: 0,
                roomsCount: 1,
                preferredCategory: "Signature Villa",
                preferredRoom: "",
                specialRequests: "",
                agreePrivacy: false,
                honeypot: "",
              });
            }}
            className="luxury-button-secondary text-xs"
          >
            Submit Another Inquiry
          </button>
          <Link href="/" className="luxury-button-primary text-xs">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-stone-sand border border-forest-night/10 p-6 sm:p-10 md:p-12 shadow-sm space-y-8"
    >
      {/* Honeypot Anti-Spam (Hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Do not fill this</label>
        <input
          id="website_hp"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Guest Personal Information */}
      <div className="space-y-4">
        <h4 className="font-mono text-xs text-forest-canopy tracking-luxury uppercase font-semibold flex items-center gap-2">
          <span>01 · Guest Contact Details</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Dr. Alistair Sterling"
              className={`w-full bg-stone-cream border px-3.5 py-2.5 text-sm font-sans text-forest-night focus:outline-none transition-colors ${
                errors.fullName
                  ? "border-red-500 focus:border-red-600"
                  : "border-forest-night/20 focus:border-brass"
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-600 font-mono">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alistair@sterling.co.uk"
              className={`w-full bg-stone-cream border px-3.5 py-2.5 text-sm font-sans text-forest-night focus:outline-none transition-colors ${
                errors.email
                  ? "border-red-500 focus:border-red-600"
                  : "border-forest-night/20 focus:border-brass"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 font-mono">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Phone / Mobile *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +44 7911 123456"
              className={`w-full bg-stone-cream border px-3.5 py-2.5 text-sm font-sans text-forest-night focus:outline-none transition-colors ${
                errors.phone
                  ? "border-red-500 focus:border-red-600"
                  : "border-forest-night/20 focus:border-brass"
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-600 font-mono">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Stay Dates & Party Composition */}
      <div className="space-y-4 pt-4 border-t border-forest-night/10">
        <h4 className="font-mono text-xs text-forest-canopy tracking-luxury uppercase font-semibold flex items-center gap-2">
          <span>02 · Stay Dates & Party Details</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {/* Check-In */}
          <div className="space-y-1.5">
            <label
              htmlFor="checkInDate"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Check-In Date *
            </label>
            <input
              id="checkInDate"
              name="checkInDate"
              type="date"
              required
              value={formData.checkInDate}
              onChange={handleChange}
              className={`w-full bg-stone-cream border px-3.5 py-2 text-sm font-sans text-forest-night focus:outline-none transition-colors ${
                errors.checkInDate
                  ? "border-red-500 focus:border-red-600"
                  : "border-forest-night/20 focus:border-brass"
              }`}
            />
            {errors.checkInDate && (
              <p className="text-[11px] text-red-600 font-mono">{errors.checkInDate}</p>
            )}
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label
              htmlFor="checkOutDate"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Check-Out Date *
            </label>
            <input
              id="checkOutDate"
              name="checkOutDate"
              type="date"
              required
              value={formData.checkOutDate}
              onChange={handleChange}
              className={`w-full bg-stone-cream border px-3.5 py-2 text-sm font-sans text-forest-night focus:outline-none transition-colors ${
                errors.checkOutDate
                  ? "border-red-500 focus:border-red-600"
                  : "border-forest-night/20 focus:border-brass"
              }`}
            />
            {errors.checkOutDate && (
              <p className="text-[11px] text-red-600 font-mono">{errors.checkOutDate}</p>
            )}
          </div>

          {/* Adults */}
          <div className="space-y-1.5">
            <label
              htmlFor="adults"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Adults *
            </label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full bg-stone-cream border border-forest-night/20 px-3 py-2.5 text-sm font-sans text-forest-night focus:outline-none focus:border-brass"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                <option key={num} value={num}>
                  {num} Adult{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Children */}
          <div className="space-y-1.5">
            <label
              htmlFor="children"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Children
            </label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full bg-stone-cream border border-forest-night/20 px-3 py-2.5 text-sm font-sans text-forest-night focus:outline-none focus:border-brass"
            >
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Child" : "Children"}
                </option>
              ))}
            </select>
          </div>

          {/* Rooms */}
          <div className="space-y-1.5">
            <label
              htmlFor="roomsCount"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Rooms *
            </label>
            <select
              id="roomsCount"
              name="roomsCount"
              value={formData.roomsCount}
              onChange={handleChange}
              className="w-full bg-stone-cream border border-forest-night/20 px-3 py-2.5 text-sm font-sans text-forest-night focus:outline-none focus:border-brass"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Room{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Accommodation Choice & Special Preferences */}
      <div className="space-y-4 pt-4 border-t border-forest-night/10">
        <h4 className="font-mono text-xs text-forest-canopy tracking-luxury uppercase font-semibold flex items-center gap-2">
          <span>03 · Accommodation Preference & Field Notes</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Preferred Category */}
          <div className="space-y-1.5">
            <label
              htmlFor="preferredCategory"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Preferred Category *
            </label>
            <select
              id="preferredCategory"
              name="preferredCategory"
              value={formData.preferredCategory}
              onChange={handleChange}
              className="w-full bg-stone-cream border border-forest-night/20 px-3.5 py-2.5 text-sm font-sans text-forest-night focus:outline-none focus:border-brass"
            >
              <option value="Signature Villa">Signature Villa (Jugni Two-Storey)</option>
              <option value="Family Cottages">Family Cottages (Patdev Arched)</option>
              <option value="Verandah Suites">Verandah Suites (Trishul Red-Roof)</option>
              <option value="Eco-Luxury Cottage">Eco-Luxury Cottage (Four Mark Bamboo)</option>
              <option value="Couples' Hideaway">Couples&apos; Sanctuary (Swastik Private Pool)</option>
            </select>
          </div>

          {/* Specific Villa / Stay Name (Optional) */}
          <div className="space-y-1.5">
            <label
              htmlFor="preferredRoom"
              className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
            >
              Preferred Villa / Room (Optional)
            </label>
            <input
              id="preferredRoom"
              name="preferredRoom"
              type="text"
              value={formData.preferredRoom}
              onChange={handleChange}
              placeholder="e.g. Jugni Villa or Trishul · Saawan"
              className="w-full bg-stone-cream border border-forest-night/20 px-3.5 py-2.5 text-sm font-sans text-forest-night focus:outline-none focus:border-brass"
            />
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-1.5">
          <label
            htmlFor="specialRequests"
            className="block font-mono text-[11px] tracking-wide uppercase text-forest-night font-medium"
          >
            Special Requests & Safari Inquiries (Dietary, Safari Assistance, Occasion)
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={3}
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Tell us about your safari preferences (e.g. assistance with Turia gate permits, vegetarian cuisine, anniversary setup)..."
            className="w-full bg-stone-cream border border-forest-night/20 px-3.5 py-2.5 text-sm font-sans text-forest-night focus:outline-none focus:border-brass"
          />
        </div>
      </div>

      {/* Privacy Agreement & Disclaimers */}
      <div className="space-y-4 pt-4 border-t border-forest-night/10">
        <div className="flex items-start gap-3">
          <input
            id="agreePrivacy"
            name="agreePrivacy"
            type="checkbox"
            checked={formData.agreePrivacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-forest-canopy border-forest-night/30 focus:ring-brass"
          />
          <label htmlFor="agreePrivacy" className="text-xs text-forest-night/80 font-sans leading-relaxed">
            I acknowledge that submitting this inquiry does not constitute a confirmed reservation. I consent to Pench Big Cat Nature Resort contacting me regarding rates, availability, and safari planning in accordance with the{" "}
            <Link href="/privacy-policy" className="underline text-forest-canopy hover:text-forest-night">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline text-forest-canopy hover:text-forest-night">
              Terms & Conditions
            </Link>
            . *
          </label>
        </div>
        {errors.agreePrivacy && (
          <p className="text-[11px] text-red-600 font-mono pl-7">{errors.agreePrivacy}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[11px] font-mono text-forest-night/60 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-brass" />
          <span>Rates: Contact for price · Direct management response</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="luxury-button-brass w-full sm:w-auto px-10 py-3.5"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Transmit Booking Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
