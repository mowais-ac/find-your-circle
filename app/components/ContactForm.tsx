"use client";

import { useState } from "react";
import { useTranslations } from "../hooks/useTranslations";

type FormStatus = "idle" | "submitting" | "success" | "error";

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Report a User / Content",
  "Account Issue (Login / Access)",
  "Technical Issue (App Bug)",
  "Feedback / Suggestions",
  "Account Deletion Request",
] as const;

export default function ContactForm() {
  const { t, locale } = useTranslations();
  const isAr = locale === "ar";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showDeletionAlert, setShowDeletionAlert] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!name.trim()) err.name = t("form.errorNameRequired");
    if (!email.trim()) err.email = t("form.errorEmailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = t("form.errorEmailInvalid");
    if (!phone.trim()) err.phone = t("form.errorPhoneRequired");
    if (!inquiryType) err.inquiryType = t("form.errorReasonRequired");
    if (!message.trim()) err.message = t("form.errorMessageRequired");
    return err;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      inquiryType: true,
      message: true,
    });
    if (!isValid) return;
    setStatus("submitting");
    try {
      const res = await fetch(
        "https://circle-society-apis-f9f3458bda44.herokuapp.com/api/contact/save",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            phoneNumber: phone.trim(),
            inquiryType,
            reason: message.trim(),
          }),
        }
      );
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      if (inquiryType === "Account Deletion Request") {
        setShowDeletionAlert(true);
      }
      setName("");
      setEmail("");
      setPhone("");
      setInquiryType("");
      setMessage("");
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#E8E5E0] bg-white px-4 py-3 text-[#1B1B1B] placeholder:text-[#9A9590] focus:border-[#BF822E] focus:outline-none focus:ring-2 focus:ring-[#BF822E]/20 transition-colors";
  const labelClass = "mb-1.5 block text-sm font-medium text-[#1B1B1B]";

  return (
    <>
      {/* Account Deletion Toast */}
      {showDeletionAlert && (
        <div
          className="fixed top-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-[#BF822E]/40 bg-orange-50 px-5 py-4 shadow-xl"
          role="alert"
        >
          <div
            className={`flex items-start gap-3 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <span className="mt-0.5 text-lg text-[#BF822E]">⚠️</span>
            <div className="flex-1">
              <p className="font-semibold text-[#BF822E]">
                Account Deletion Requested
              </p>
              <p className="mt-1 text-sm text-[#5A4A2A]">
                Your account deletion request has been submitted. Your account
                will be permanently deleted within <strong>90 days</strong>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowDeletionAlert(false)}
              aria-label="Dismiss"
              className="text-[#9A9590] transition-colors hover:text-[#1B1B1B]"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`space-y-5 ${isAr ? "text-right" : ""}`}
        dir={isAr ? "rtl" : undefined}
      >
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {t("form.name")} <span className="text-[#BF822E]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            placeholder={t("form.placeholderName")}
            className={`${inputClass} ${isAr ? "text-right" : ""}`}
            dir={isAr ? "rtl" : undefined}
            aria-required
            aria-invalid={touched.name && !!errors.name}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {t("form.email")} <span className="text-[#BF822E]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder={t("form.placeholderEmail")}
            className={`${inputClass} ${isAr ? "text-right" : ""}`}
            dir={isAr ? "rtl" : undefined}
            aria-required
            aria-invalid={touched.email && !!errors.email}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            {t("form.phone")} <span className="text-[#BF822E]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
            placeholder={t("form.placeholderPhone")}
            className={`${inputClass} ${isAr ? "text-right" : ""}`}
            dir={isAr ? "rtl" : undefined}
            aria-required
            aria-invalid={touched.phone && !!errors.phone}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Reason / Inquiry Type */}
        <div>
          <label htmlFor="contact-inquiry" className={labelClass}>
            {t("form.reason")} <span className="text-[#BF822E]">*</span>
          </label>
          <select
            id="contact-inquiry"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            onBlur={() =>
              setTouched((prev) => ({ ...prev, inquiryType: true }))
            }
            className={`${inputClass} ${isAr ? "text-right" : ""} cursor-pointer`}
            dir={isAr ? "rtl" : undefined}
            aria-required
            aria-invalid={touched.inquiryType && !!errors.inquiryType}
          >
            <option value="" disabled>
              {t("form.reasonPlaceholder")}
            </option>
            {INQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {touched.inquiryType && errors.inquiryType && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.inquiryType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            {t("form.message")} <span className="text-[#BF822E]">*</span>
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
            placeholder={t("form.placeholderMessage")}
            rows={5}
            className={`${inputClass} resize-y min-h-[120px] ${isAr ? "text-right" : ""}`}
            dir={isAr ? "rtl" : undefined}
            aria-required
            aria-invalid={touched.message && !!errors.message}
          />
          {touched.message && errors.message && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {status === "success" && (
          <div
            className="rounded-xl bg-[#BF822E]/10 border border-[#BF822E]/30 px-4 py-3 text-[#5A4A2A]"
            role="status"
          >
            {t("form.success")}
          </div>
        )}
        {status === "error" && (
          <div
            className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700"
            role="alert"
          >
            {t("form.error")}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full py-3.5 px-6 font-semibold text-white shadow-md transition-all duration-200 hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ background: "linear-gradient(to bottom, #D99F4F, #BF822E)" }}
        >
          {status === "submitting" ? t("form.sending") : t("form.sendMessage")}
        </button>
      </form>
    </>
  );
}
