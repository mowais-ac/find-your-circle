import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderSection from "../../components/HeaderSection";
import FooterSection from "../../components/FooterSection";
import { getTranslation, type Locale } from "../../../lib/translations";
import { getPostBySlug } from "../../../lib/blogPosts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headersList = await headers();
  const locale = (headersList.get("x-next-locale") || "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <HeaderSection />

      <article dir={locale === "ar" ? "rtl" : "ltr"}>
        {/* Hero image */}
        <section className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-[#1B1B1B]">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover opacity-90"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" aria-hidden />
          <div className="absolute bottom-20  left-0 right-0 px-6 md:px-12 pb-8 md:pb-10">
            <div className="mx-auto max-w-3xl">
              <p className="text-[#D99F4F] text-xs font-semibold uppercase tracking-wide mb-2">
                {post.minRead} {t("blog.minRead")}
              </p>
              <h1 className={`font-clash text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight ${locale === "ar" ? "text-right" : ""}`}>
                {t(post.key)}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-6 py-12 md:py-16 md:px-8 pb-20 md:pb-28">
          <div className={`prose prose-lg max-w-none text-[#5A5A5A] leading-[1.8] space-y-6 ${locale === "ar" ? "text-right" : ""}`}>
            <p className="text-[#1B1B1B] text-lg md:text-xl">
              {t(post.bodyKey)}
            </p>
            <p>
              {t(post.body2Key)}
            </p>
            <p>
              {t(post.body3Key)}
            </p>
          </div>
          <div className={`mt-12 pt-8 border-t border-[#E8E5E0] ${locale === "ar" ? "text-right" : ""}`}>
            <Link
              href="/blogs"
              className={`inline-flex items-center gap-2 text-[#BF822E] font-semibold hover:text-[#73542A] transition-colors ${locale === "ar" ? "flex-row-reverse" : ""}`}
            >
              <svg className={`w-4 h-4 ${locale === "ar" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {t("blog.backToBlog")}
            </Link>
          </div>
        </section>
      </article>

      <FooterSection />
    </div>
  );
}
