"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useShouldAnimate } from "../hooks/useShouldAnimate";
import { useTranslations } from "../hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

export default function FindYourPeopleSection() {
  const { t, locale } = useTranslations();
  const isAr = locale === "ar";
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const shouldAnimate = useShouldAnimate();

  useEffect(() => {
    if (
      !sectionRef.current ||
      !headingRef.current ||
      !descriptionRef.current ||
      !buttonsRef.current
    )
      return;

    const images = [image1Ref.current, image2Ref.current, image3Ref.current, image4Ref.current];

    if (!shouldAnimate) {
      gsap.set(headingRef.current, { opacity: 1, y: 0 });
      gsap.set(descriptionRef.current, { opacity: 1, y: 0 });
      gsap.set(buttonsRef.current, { opacity: 1, y: 0 });
      gsap.set(images.filter(Boolean), { opacity: 1, scale: 1, rotation: 0 });
      return;
    }

    gsap.set(headingRef.current, { opacity: 0, y: -30 });
    gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
    gsap.set(buttonsRef.current, { opacity: 0, y: 20 });
    if (image1Ref.current) gsap.set(image1Ref.current, { opacity: 0, scale: 0.8, rotation: -10 });
    if (image2Ref.current) gsap.set(image2Ref.current, { opacity: 0, scale: 0.8, rotation: 10 });
    if (image3Ref.current) gsap.set(image3Ref.current, { opacity: 0, scale: 0.8, rotation: 10 });
    if (image4Ref.current) gsap.set(image4Ref.current, { opacity: 0, scale: 0.8, rotation: -10 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    });

    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" })
      .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.25")
      .to(image1Ref.current, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" }, "-=0.08")
      .to(image2Ref.current, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" }, "+=0.05")
      .to(image3Ref.current, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" }, "+=0.05")
      .to(image4Ref.current, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" }, "+=0.05")
      .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.25");

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === sectionRef.current) t.kill();
      });
    };
  }, [shouldAnimate]);

  const mobileImage1Ref = useRef<HTMLDivElement>(null);
  const mobileImage2Ref = useRef<HTMLDivElement>(null);
  const mobileImage3Ref = useRef<HTMLDivElement>(null);
  const mobileImage4Ref = useRef<HTMLDivElement>(null);
  const mobileHeadingRef = useRef<HTMLHeadingElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);
  const mobileButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mobileRefs = [
      mobileHeadingRef.current,
      mobileDescriptionRef.current,
      mobileImage1Ref.current,
      mobileImage2Ref.current,
      mobileImage3Ref.current,
      mobileImage4Ref.current,
      mobileButtonsRef.current,
    ];
    if (mobileRefs.some((ref) => !ref)) return;

    if (!shouldAnimate) {
      gsap.set(mobileHeadingRef.current, { opacity: 1, y: 0 });
      gsap.set(mobileDescriptionRef.current, { opacity: 1, y: 0 });
      gsap.set(mobileButtonsRef.current, { opacity: 1, y: 0 });
      gsap.set(
        [mobileImage1Ref.current, mobileImage2Ref.current, mobileImage3Ref.current, mobileImage4Ref.current],
        { opacity: 1, scale: 1 },
      );
      return;
    }

    gsap.set(mobileHeadingRef.current, { opacity: 0, y: -30 });
    gsap.set(mobileDescriptionRef.current, { opacity: 0, y: 20 });
    gsap.set(
      [mobileImage1Ref.current, mobileImage2Ref.current, mobileImage3Ref.current, mobileImage4Ref.current],
      { opacity: 0, scale: 0.8 },
    );
    gsap.set(mobileButtonsRef.current, { opacity: 0, y: 20 });

    const mobileTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    });

    mobileTl
      .to(mobileHeadingRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" })
      .to(mobileDescriptionRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.25")
      .to(mobileButtonsRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.2")
      .to(
        [mobileImage1Ref.current, mobileImage2Ref.current, mobileImage3Ref.current, mobileImage4Ref.current],
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
        "-=0.2",
      );

    return () => {
      mobileTl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === sectionRef.current) t.kill();
      });
    };
  }, [shouldAnimate]);

  const activities = [
    { id: 1, image: "/Frame 2131326922.svg", labelKey: "findYourPeople.bikeTrips" as const, rotation: -8, position: "top-left" },
    { id: 2, image: "/Frame 2131326924.svg", labelKey: "findYourPeople.hiking" as const, rotation: 8, position: "bottom-left" },
    { id: 3, image: "/Frame 2131326921.svg", labelKey: "findYourPeople.gymCrew" as const, rotation: 8, position: "top-right" },
    { id: 4, image: "/Frame 2131326923.svg", labelKey: "findYourPeople.carEnthusiasts" as const, rotation: -8, position: "bottom-right" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:py-16 bg-[#73542A] sm:px-6 md:py-14 md:px-12 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          {/* Text Content */}
          <div className="w-full">
            <h2
              ref={mobileHeadingRef}
              className="font-clash text-4xl text-white font-medium mb-4"
            >
              {t("findYourPeople.title")}
            </h2>
            <div ref={mobileDescriptionRef}>
              <p className="text-sm min-[400px]:text-base sm:text-lg text-white leading-relaxed mb-3">
                {t("findYourPeople.desc1")}
              </p>
              <p className="text-sm min-[400px]:text-base sm:text-lg text-white leading-relaxed">
                {t("findYourPeople.desc2")}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div ref={mobileButtonsRef} className="w-full flex justify-center">
            <div className="flex flex-row justify-center items-center gap-3">
              <a
                href="https://apps.apple.com/us/app/circle-society/id6761267817"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-2 text-xs text-[10px] min-[400px]:text-sm font-semibold text-white transition hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                }}
                dir={isAr ? "rtl" : "ltr"}
              >
                {t("hero.downloadIos")}
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.circlesociety"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-2 text-xs text-[10px] min-[400px]:text-sm font-semibold text-white transition hover:opacity-90"
                style={{
                  background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                }}
                dir={isAr ? "rtl" : "ltr"}
              >
                {t("hero.downloadAndroid")}
              </a>
            </div>
          </div>

          {/* Images Grid - Single Line Layout with Overlap */}
          <div className="w-full flex mt-8 relative px-2 sm:px-4 justify-center items-center">
            {/* Bike Trips */}
            <div
              ref={mobileImage1Ref}
              className="relative flex-shrink-0"
              style={{
                transform: "rotate(-8deg)",
                zIndex: 10,
                marginRight: "-35px",
              }}
            >
              <Image
                src={activities[0].image}
                alt={t(activities[0].labelKey)}
                width={950}
                height={950}
                className="w-[125px] min-[400px]:w-[140px] sm:w-[200px] h-auto rounded-xl"
                unoptimized
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>

            {/* Gym Crew */}
            <div
              ref={mobileImage3Ref}
              className="relative flex-shrink-0"
              style={{
                transform: "rotate(8deg)",
                zIndex: 20,
                marginRight: "-35px",
              }}
            >
              <Image
                src={activities[2].image}
                alt={t(activities[2].labelKey)}
                width={950}
                height={950}
                className="w-[125px] min-[400px]:w-[140px] sm:w-[200px] h-auto rounded-xl"
                unoptimized
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>

            {/* Car Enthusiasts */}
            <div
              ref={mobileImage4Ref}
              className="relative flex-shrink-0"
              style={{
                transform: "rotate(8deg)",
                zIndex: 30,
                marginRight: "-35px",
              }}
            >
              <Image
                src={activities[3].image}
                alt={t(activities[3].labelKey)}
                width={950}
                height={950}
                className="w-[125px] min-[400px]:w-[140px] sm:w-[200px] h-auto rounded-xl"
                unoptimized
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>

            {/* Hiking & Trekking */}
            <div
              ref={mobileImage2Ref}
              className="relative flex-shrink-0"
              style={{
                transform: "rotate(-8deg)",
                zIndex: 40,
              }}
            >
              <Image
                src={activities[1].image}
                alt={t(activities[1].labelKey)}
                width={950}
                height={950}
                className="w-[125px] min-[400px]:w-[140px] sm:w-[200px] h-auto rounded-xl"
                unoptimized
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>
        </div>

        {/* Desktop View - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Side - 2 Images */}
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start">
            {/* Top Left Image */}
            <div
              ref={image1Ref}
              className="relative transform md:ml-8 -rotate-[0deg] hover:rotate-0 transition-transform duration-300"
              style={{ zIndex: 10 }}
            >
              <div>
                <Image
                  src={activities[0].image}
                  alt={t(activities[0].labelKey)}
                  width={250}
                  height={250}
                  className="w-full h-auto rounded-xl max-w-[200px] md:max-w-[250px]"
                  unoptimized
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
            </div>

            {/* Bottom Left Image */}
            <div
              ref={image2Ref}
              className="relative md:-mt-20 transform rotate-[0deg] hover:rotate-0 transition-transform duration-300 ml-4 md:ml-8 -mt-4"
              style={{ zIndex: 5 }}
            >
              <div>
                <Image
                  src={activities[1].image}
                  alt={t(activities[1].labelKey)}
                  width={250}
                  height={250}
                  className="w-full h-auto rounded-xl max-w-[200px] md:max-w-[250px]"
                  unoptimized
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
            </div>
          </div>

          {/* Center - Content & Buttons */}
          <div className="text-center flex flex-col items-center w-full">
            {/* Main Content */}
            <div className="mb-8 w-full">
              <h2
                ref={headingRef}
                className="font-clash text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
              >
                {t("findYourPeople.title")}
              </h2>
              <p
                ref={descriptionRef}
                className="text-lg sm:text-xl text-white md:text-lg leading-relaxed"
              >
                {t("findYourPeople.desc1")}
              </p>
              <p
                ref={descriptionRef}
                className="text-lg sm:text-xl md:mt-5 text-white md:text-lg leading-relaxed"
              >
                {t("findYourPeople.desc2")}{" "}
              </p>
            </div>

            {/* Download Buttons */}
            <div ref={buttonsRef} className="w-full flex justify-center">
              <div className="flex flex-row justify-center items-center gap-3 sm:gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.circlesociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-[10px] min-[380px]:text-xs sm:text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                  dir={isAr ? "rtl" : "ltr"}
                >
                  {t("hero.downloadAndroid")}
                </a>
                <a
                  href="https://apps.apple.com/us/app/circle-society/id6761267817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm md:text-[16px] font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(to bottom, #D99F4F, #BF822E)",
                  }}
                  dir={isAr ? "rtl" : "ltr"}
                >
                  {t("hero.downloadIos")}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - 2 Images */}
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-end">
            {/* Top Right Image */}
            <div
              ref={image3Ref}
              className="relative  transform rotate-[0deg] hover:rotate-0 transition-transform duration-300 -mr-4 md:-mr-0"
              style={{ zIndex: 10 }}
            >
              <div>
                <Image
                  src={activities[2].image}
                  alt={t(activities[2].labelKey)}
                  width={250}
                  height={250}
                  className="w-full h-auto rounded-xl max-w-[200px] md:max-w-[250px]"
                  unoptimized
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
            </div>

            {/* Bottom Right Image */}
            <div
              ref={image4Ref}
              className="relative md:-mt-20 transform -rotate-[0deg] hover:rotate-0 transition-transform duration-300 -mt-4"
              style={{ zIndex: 5 }}
            >
              <div>
                <Image
                  src={activities[3].image}
                  alt={t(activities[3].labelKey)}
                  width={250}
                  height={250}
                  className="w-full h-auto rounded-xl max-w-[200px] md:max-w-[250px]"
                  unoptimized
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
