import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { getTranslation, type Locale } from "../../lib/translations";

export default async function StoriesPage() {
  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") || "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />

      {/* Section 1 – Hero: warm gradient strip, text left + image right (Stories-only look) */}
      <section className="mx-auto max-w-6xl px-6 pt-10 md:pt-14 pb-16 md:pb-20">
        <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[420px] md:min-h-[480px]" style={{ background: "linear-gradient(120deg, #8B691E 0%, #BF822E 40%, #D99F4F 100%)", boxShadow: "0 24px 48px rgba(139, 105, 30, 0.25)" }}>
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-14 order-2 lg:order-1">
            <p className="text-white/80 font-semibold text-xs uppercase tracking-[0.25em] mb-4">
              {t("stories.heroLabel")}
            </p>
            <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-5 leading-tight">
              {t("stories.heroHeading")}
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-lg">
              {t("stories.loveStoriesSubtitle")}
            </p>
          </div>
          <div className="flex-1 relative min-h-[280px] lg:min-h-0 order-1 lg:order-2">
            <div className="absolute inset-4 md:inset-6 lg:inset-8 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=95"
                alt="Couple together"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-20 md:pb-28 md:px-8">
        {/* Section 2 – Real Couples: quote block + full-width image + text below (editorial style) */}
        <section className="mb-20 md:mb-28">
          <div className="border-l-4 border-[#BF822E] pl-6 md:pl-8 mb-10 md:mb-12">
            <p className="font-clash text-xl md:text-2xl lg:text-3xl text-[#1B1B1B] leading-snug italic max-w-3xl">
              “{t("stories.realCouplesP1")}”
            </p>
          </div>
          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden mb-10 md:mb-12">
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=85"
              alt="Real couple"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="text-white font-semibold text-sm md:text-base drop-shadow-md">{t("stories.realCouplesTitle")}</span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-[#5A5A5A] text-base md:text-lg leading-[1.8] text-center">
              {t("stories.realCouplesP2")}
            </p>
          </div>
        </section>

        {/* Section 3 – More than romance (bento-style) + Share your story (card with photo, no gradient) */}
        <section className="space-y-12 md:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl p-8 md:p-10 bg-[#2F5D50] text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6" aria-hidden>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h2 className="font-clash text-2xl md:text-3xl font-medium mb-4">
                {t("stories.connectionsTitle")}
              </h2>
              <p className="text-white/90 text-base leading-[1.7]">
                {t("stories.connectionsDesc")}
              </p>
            </div>
            <div className="rounded-2xl p-8 md:p-10 bg-[#1B1B1B] text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6" aria-hidden>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h2 className="font-clash text-2xl md:text-3xl font-medium mb-4">
                {t("stories.shareTitle")}
              </h2>
              <p className="text-white/85 text-base leading-[1.7] mb-6">
                {t("stories.shareDesc")}
              </p>
              <Link
                href="/#download"
                className="inline-flex items-center gap-2 bg-white text-[#1B1B1B] font-semibold px-6 py-3 rounded-xl hover:bg-[#E8E5E0] transition-colors"
              >
                {t("stories.shareCta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
}