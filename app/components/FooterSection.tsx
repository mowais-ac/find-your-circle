"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "../hooks/useTranslations";
import { toArabicDigits } from "../../lib/arabicNumerals";

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function PaperPlaneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function FooterSection() {
  const { t, locale } = useTranslations();
  const isAr = locale === "ar";
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#F5F2ED]">
      {/* Main footer - 3 column layout */}
      <div className="px-6 -mt-3 md:mt-0 py-10 md:py-12 lg:px-24" dir={isAr ? "rtl" : undefined}>
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 place-items-center lg:place-items-start">
            {/* Column 1 - Logo + description + CTA. Mobile: centered (en & ar). LG: en left, ar right */}
            <div className={`flex flex-col w-full ${isAr ? "max-lg:items-center max-lg:text-center lg:items-start lg:text-right" : "items-center text-center lg:items-start lg:text-left"}`}>
              <Link href="/" className="inline-block mb-3">
                <div
                  className="animate-rotate"
                  style={{
                    animation: "rotate 10s linear infinite",
                    display: "inline-block",
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src="/LOGO CS-01.png"
                    width={120}
                    height={120}
                    alt="Find Your Circle"
                    className="w-24 h-24 md:w-24 md:h-24"
                  />
                </div>
              </Link>
              <p className="text-black/80 text-sm leading-relaxed mb-4 max-w-sm">
                {t("footer.tagline")}
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.98] mb-4"
                style={{ background: "linear-gradient(to bottom, #D99F4F, #BF822E)" }}
              >
                {t("footer.contactUs")}
              </Link>
              {/* <div className="flex flex-row gap-2">
                <a href="https://www.tiktok.com/@thecirclesociety.ae" target="blank" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="TikTok">
                  <Image src="/Vector (17).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://www.instagram.com/thecirclesociety.ae/" target="blank" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="Instagram">
                  <Image src="/Vector (18).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://www.facebook.com/thecirclesociety.ae/" target="blank" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="Facebook">
                  <Image src="/Vector (19).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div> */}
            </div>

            {/* Column 2 - Quick Link. Mobile: centered (en & ar). LG: en start, ar centered */}
            <div className={`flex flex-col w-full ${isAr ? "max-lg:items-center max-lg:text-center lg:items-center lg:text-center" : "items-center lg:items-start"}`}>
              <h3 className="text-black font-semibold uppercase tracking-wide text-sm mb-3">{t("footer.quickLink")}</h3>
              <nav className={`flex flex-col gap-2 text-sm ${isAr ? "items-center text-center" : ""}`}>
                <Link href="/" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">{t("footer.home")}</Link>
                <Link href="/about" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">{t("footer.about")}</Link>
                <Link href="/stories" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">{t("footer.stories")}</Link>
                <Link href="/store" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">{t("footer.store")}</Link>
                <Link href="/contact-us" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">{t("footer.contactUs")}</Link>
                <a href="/#download" className="text-black/80 hover:text-[#BF822E] transition-colors font-medium">{t("nav.download")}</a>
              </nav>
            </div>

            {/* Column 3 - Subscribe + Follow us. Mobile: centered (en & ar). LG: en left, ar right */}
            <div className={`flex flex-col w-full ${isAr ? "max-lg:items-center max-lg:text-center lg:items-start lg:text-right" : "items-center lg:items-start text-center lg:text-left"}`}>
              <h4 className="text-black font-semibold uppercase tracking-wide text-sm mb-2">{t("footer.subscribe")}</h4>
              <p className="text-black/70 text-xs leading-relaxed mb-3 max-w-[280px]">
                {t("footer.subscribeDesc")}
              </p>
              <form onSubmit={handleSubscribe} className={`flex gap-2 w-full max-w-[280px] mb-5 ${isAr ? "flex-row-reverse max-lg:mx-auto lg:mx-0" : "mx-auto lg:mx-0"}`} dir={isAr ? "ltr" : undefined}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder")}
                  className="flex-1 min-w-0 rounded-full bg-white border border-[#E8E5E0] px-3 py-2.5 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-[#BF822E]/40 focus:border-[#BF822E]"
                  aria-label={t("footer.emailPlaceholder")}
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 transition hover:opacity-95 active:scale-95"
                  style={{ background: "linear-gradient(to bottom, #D99F4F, #BF822E)" }}
                  aria-label={t("footer.aria.subscribe")}
                >
                  <PaperPlaneIcon className="w-4 h-4" />
                </button>
              </form>

              <h4 className="text-black font-semibold uppercase tracking-wide text-sm mb-3">{t("footer.followUs")}</h4>
              <div className={`flex gap-2 ${isAr ? "max-lg:justify-center lg:justify-start" : ""}`}>
                <a href="https://www.facebook.com/thecirclesociety.ae/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="Facebook">
                  <Image src="/Vector (19).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://www.instagram.com/thecirclesociety.ae/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="Instagram">
                  <Image src="/Vector (18).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://www.tiktok.com/@thecirclesociety.ae" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="TikTok">
                  <Image src="/Vector (17).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://www.linkedin.com/company/thecirclesocietyae/about/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition" aria-label="TikTok">
                  <Image src="/Vector (21).svg" alt="" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip - Arabic: copyright right, policy links left */}
      <div className="border-t border-[#E8E5E0] px-6 py-4 lg:pl-24" dir={isAr ? "rtl" : undefined}>
        <div className={`mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-black/70 ${isAr ? "sm:flex-row-reverse sm:justify-between" : "sm:justify-between"}`}>
          <p>© {t("footer.rights")} {isAr ? toArabicDigits(new Date().getFullYear()) : new Date().getFullYear()} {t("footer.circleSociety")}</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link
              href="/terms-and-conditions"
              className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium text-sm"
            >
              <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
              {t("footer.terms")}
            </Link>
            <span className="text-black/50" aria-hidden>|</span>
            <Link
              href="/privacy-policy"
              className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium text-sm"
            >
              <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
              {t("footer.privacy")}
            </Link>
            <span className="text-black/50" aria-hidden>|</span>
            <Link
              href="/refund-cancellation-policy"
              className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium text-sm"
            >
              <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
              {t("footer.refundPolicy")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
