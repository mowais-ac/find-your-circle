"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "../hooks/useTranslations";

const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function setLocaleCookie(locale: "en" | "ar") {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function HeaderSection() {
  const { t, locale } = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: "en" | "ar") => {
    if (newLocale === locale) return;
    setLocaleCookie(newLocale);
    router.refresh();
  };

  const activeStyle = "linear-gradient(to bottom, #D99F4F, #BF822E)";
  const isActive = (path: string) => pathname === path;
  const navLinkClass = (path: string) =>
    `px-4 py-2 rounded-full transition-all duration-150 hover:text-white hover:shadow-md ${isActive(path) ? "text-white" : "text-black"}`;
  const navLinkStyle = (path: string) =>
    ({ background: isActive(path) ? activeStyle : "transparent" });
  const onNavMouseLeave = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isActive(path)) e.currentTarget.style.background = "transparent";
  };

  return (
    <>
      <header className="flex items-center justify-between gap-4 bg-white px-4 sm:px-6 py-2 md:py-2 md:px-24 border-b border-[#E8E5E0]">
        {/* Logo - Left */}
        <Link href={"/"} className="flex items-center flex-shrink-0 md:ml-4">
          <div
            className="animate-rotate"
            style={{
              animation: "rotate 10s linear infinite",
              display: "inline-block",
              transformOrigin: "center center",
            }}
          >
            <Image
              src={"/LOGO CS-01.png"}
              width={90}
              height={90}
              alt="logo"
              className="md:w-[90px] md:h-[90px]"
            />
          </div>
        </Link>

        {/* Nav Links - Desktop Only, Centered. Arabic: start from right (RTL). */}
        <nav
          className="hidden md:flex flex-1 justify-center items-center gap-2 lg:gap-1 text-[16px] font-semibold uppercase tracking-wide"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <Link
            href="/about"
            className={navLinkClass("/about")}
            style={navLinkStyle("/about")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = activeStyle;
            }}
            onMouseLeave={onNavMouseLeave("/about")}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/stories"
            className={navLinkClass("/stories")}
            style={navLinkStyle("/stories")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = activeStyle;
            }}
            onMouseLeave={onNavMouseLeave("/stories")}
          >
            {t("nav.stories")}
          </Link>
          <Link
            href="/store"
            className={navLinkClass("/store")}
            style={navLinkStyle("/store")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = activeStyle;
            }}
            onMouseLeave={onNavMouseLeave("/store")}
          >
            {t("nav.store")}
          </Link>
          <Link
            href="/contact-us"
            className={navLinkClass("/contact-us")}
            style={navLinkStyle("/contact-us")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = activeStyle;
            }}
            onMouseLeave={onNavMouseLeave("/contact-us")}
          >
            {t("nav.contactUs")}
          </Link>
          <Link
            href="/#download"
            className="text-black px-4 py-2 rounded-full transition-all duration-150 hover:text-white hover:shadow-md"
            style={{ background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = activeStyle;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t("nav.download")}
          </Link>
        </nav>

        {/* Right: Language + Menu icon (dono header mein; mobile par language bhi yahi) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Language selector - sab screens par header mein, menu icon ke saath */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#F5F2ED] px-2 py-1.5 sm:px-3 sm:py-2 border border-[#E8E5E0]"
            role="group"
            aria-label={t("nav.aria.language")}
          >
            <GlobeIcon className="w-3 h-3 sm:w-4 sm:h-4 md:block hidden text-[#5A5A5A] flex-shrink-0" />
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={`text-xs sm:text-sm font-semibold uppercase tracking-wide px-1.5 sm:px-2 py-0.5 rounded transition-colors ${
                locale === "en"
                  ? "text-white"
                  : "text-[#5A5A5A] hover:text-[#2d2d2d]"
              }`}
              style={locale === "en" ? { background: "linear-gradient(to bottom, #D99F4F, #BF822E)" } : undefined}
            >
              Eng
            </button>
            <span className="text-[#C4C0B8] hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => switchLocale("ar")}
              className={`text-xs sm:text-sm font-semibold uppercase tracking-wide px-1.5 sm:px-2 py-0.5 rounded transition-colors ${
                locale === "ar"
                  ? "text-white"
                  : "text-[#5A5A5A] hover:text-[#2d2d2d]"
              }`}
              style={locale === "ar" ? { background: "linear-gradient(to bottom, #D99F4F, #BF822E)" } : undefined}
            >
              عربي
            </button>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50 relative"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? t("nav.aria.menuClose") : t("nav.aria.menuOpen")}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-full h-0.5 bg-black block transition-all duration-200 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-black block transition-all duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-black block transition-all duration-200 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay & Panel */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
            aria-label={t("nav.aria.menuClose")}
          />
          <div
            className={`absolute top-0 right-0 h-full w-full max-w-[280px] bg-white shadow-xl flex flex-col pt-20 px-6 pb-6 transition-transform duration-200 ease-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col gap-6 font-semibold uppercase tracking-wide text-black text-[16px]" dir={locale === "ar" ? "rtl" : "ltr"}>
              <Link
                href="/about"
                className="hover:opacity-80 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/stories"
                className="hover:opacity-80 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.stories")}
              </Link>
              <Link
                href="/store"
                className="hover:opacity-80 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.store")}
              </Link>
              <Link
                href="/contact-us"
                className="hover:opacity-80 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contactUs")}
              </Link>
              <a
                className="hover:opacity-80 transition-opacity py-2"
                href="/#download"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.download")}
              </a>
            </nav>
          </div>
        </div>
    </>
  );
}
