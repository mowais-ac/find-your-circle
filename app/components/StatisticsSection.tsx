"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useShouldAnimate } from "../hooks/useShouldAnimate";
import { useTranslations } from "../hooks/useTranslations";
import { toArabicDigits } from "../../lib/arabicNumerals";

gsap.registerPlugin(ScrollTrigger);

export default function StatisticsSection() {
  const { t, locale } = useTranslations();
  const isAr = locale === "ar";
  const formatNumber = (num: number) =>
    isAr ? toArabicDigits(num.toLocaleString("en-US")) + "+" : num.toLocaleString("en-US") + "+";
  const formatNumberRef = useRef(formatNumber);
  formatNumberRef.current = formatNumber;

  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const shouldAnimate = useShouldAnimate();

  // When locale changes, update counter display so English always shows Western digits, Arabic shows Arabic digits
  useEffect(() => {
    if (!hasAnimated || !statsRef.current) return;
    const n1 = statsRef.current.querySelector(".number-1") as HTMLElement | null;
    const n2 = statsRef.current.querySelector(".number-2") as HTMLElement | null;
    const n3 = statsRef.current.querySelector(".number-3") as HTMLElement | null;
    const fmt = formatNumberRef.current;
    if (n1) n1.textContent = fmt(10000);
    if (n2) n2.textContent = fmt(100);
    if (n3) n3.textContent = fmt(100000);
  }, [locale, hasAnimated]);

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current || hasAnimated) return;

    const n1 = statsRef.current.querySelector(".number-1") as HTMLElement | null;
    const n2 = statsRef.current.querySelector(".number-2") as HTMLElement | null;
    const n3 = statsRef.current.querySelector(".number-3") as HTMLElement | null;

    if (!shouldAnimate) {
      const fmt = formatNumberRef.current;
      if (n1) n1.textContent = fmt(10000);
      if (n2) n2.textContent = fmt(100);
      if (n3) n3.textContent = fmt(100000);
      setHasAnimated(true);
      return;
    }

    const animateCounter = (el: HTMLElement, target: number, duration = 1.5) => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = formatNumberRef.current(Math.floor(obj.value));
        },
      });
    };

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);
          if (n1) animateCounter(n1, 10000);
          if (n2) animateCounter(n2, 100);
          if (n3) animateCounter(n3, 100000);
        }
      },
    });

    return () => { st.kill(); };
  }, [hasAnimated, shouldAnimate]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#73542A] py-14 md:py-18 px-4 sm:px-6 md:px-0"
    >
      <div className="mx-auto max-w-full">
        <div
          ref={statsRef}
          className="grid gap-20 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {/* Stat 1: Active Members - Arabic: number upar, نشط عضو neeche ek line; English: original (0+ Active / Members two lines) */}
          <div className="text-center stat-item">
            {isAr ? (
              <>
                <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
                  <span className="number-1">٠+</span>
                </div>
                <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl whitespace-nowrap">
                  {t("stats.members")} {t("stats.active")}
                </div>
              </>
            ) : (
              <>
                <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
                  <span className="number-1">0+</span> {t("stats.active")}
                </div>
                <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
                  {t("stats.members")}
                </div>
              </>
            )}
            <div className="flex justify-center">
              <p className="text-lg font-normal w-[80%] md:w-[60%] leading-relaxed text-white opacity-90 md:text-[15px] px-2">
                {t("stats.membersDesc")}{" "}
              </p>
            </div>
          </div>

          {/* Stat 2: Active Communities */}
          <div className="text-center stat-item">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              <span className="number-2">{isAr ? "٠+" : "0+"}</span>
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              {t("stats.communities")}
            </div>
            <div className="flex justify-center">
              <p className="text-lg font-normal w-[80%] md:w-[65%] leading-relaxed text-white opacity-90 md:text-[15px] px-2">
                {t("stats.communitiesDesc")}{" "}
              </p>
            </div>
          </div>

          {/* Stat 3: Events Hosted - number, label, then description in one line below (screenshot style) */}
          <div className="text-center stat-item">
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              <span className="number-3">{isAr ? "٠+" : "0+"}</span>
            </div>
            <div className="mb-2 text-3xl font-clash font-medium text-white md:text-4xl lg:text-4xl">
              {t("stats.eventsHosted")}{" "}
            </div>
            <div className="flex justify-center">
              <p className="text-lg font-normal w-[80%] md:w-full leading-relaxed text-white opacity-90 md:text-[15px] px-2 whitespace-nowrap">
                {t("stats.eventsHostedDesc")}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
