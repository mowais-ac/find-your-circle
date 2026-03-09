import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { getTranslation, type Locale } from "../../lib/translations";
import { BLOG_POSTS } from "../../lib/blogPosts";

export default async function BlogsPage() {
  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") || "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />

      {/* Hero – same style as Contact page: big, centered, gold title */}
      <div className="mx-auto bg-[#73542A] max-w-9xl px-6 pt-[40px] md:pt-[60px] pb-12 md:pb-1 md:px-8">
        <section className="relative mb-16 md:mb-20  overflow-hidden text-center" dir={locale === "ar" ? "rtl" : undefined}>
          <h1 className="font-clash text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-4 relative">
            {t("blog.title")}
          </h1>
          <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </section>
      </div>

      {/* Blog grid */}
      <section className="mx-auto max-w-6xl px-6 py-8 md:py-14 md:px-8 pb-16 md:pb-10">
        <h2 className={`font-clash text-xl md:text-5xl font-medium text-[#1B1B1B] mb-8 md:mb-10 ${locale === "ar" ? "text-right" : "text-center"}`} dir={locale === "ar" ? "rtl" : "ltr"}>
          {t("blog.latestPosts")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E8E5E0]/80 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              <Link href={`/blogs/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
              </Link>
              <div className={`p-6 md:p-7 flex flex-col flex-1 ${locale === "ar" ? "text-right" : ""}`}>
                <p className="text-[#BF822E] text-xs font-medium uppercase tracking-wide mb-2">
                  {post.minRead} {t("blog.minRead")}
                </p>
                <h2 className="font-clash text-xl md:text-2xl font-medium text-[#1B1B1B] mb-3 leading-snug line-clamp-2">
                  {t(post.key)}
                </h2>
                <p className="text-[#5A5A5A] text-sm leading-[1.7] flex-1 line-clamp-3 mb-5">
                  {t(post.excerptKey)}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className={`inline-flex items-center gap-2 text-[#BF822E] font-semibold text-sm hover:text-[#73542A] transition-colors ${locale === "ar" ? "flex-row-reverse" : ""}`}
                >
                  {t("blog.readMore")}
                  <svg className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA – Stay in the loop / Get the app */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-14 md:px-8">
        <div
          className="rounded-3xl overflow-hidden shadow-xl text-center px-8 py-14 md:py-20 md:px-16"
          style={{ background: "linear-gradient(135deg, #73542A 0%, #BF822E 50%, #D99F4F 100%)" }}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <h2 className="font-clash text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
            {t("blog.ctaTitle")}
          </h2>
          <p className="text-white/95 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {t("blog.ctaDesc")}
          </p>
          <Link
            href="/#download"
            className={`inline-flex items-center gap-2 bg-white text-[#73542A] font-semibold px-8 py-4 rounded-xl hover:bg-[#F5F2ED] transition-colors shadow-lg ${locale === "ar" ? "flex-row-reverse" : ""}`}
          >
            {t("blog.ctaButton")}
            <svg className={`w-5 h-5 ${locale === "ar" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
