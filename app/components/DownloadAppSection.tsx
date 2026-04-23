"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useShouldAnimate } from "../hooks/useShouldAnimate"; 

gsap.registerPlugin(ScrollTrigger);

export default function DownloadAppSection() {
  const desktopSectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const phone1Ref = useRef<HTMLDivElement>(null);
  const phone2Ref = useRef<HTMLDivElement>(null);
  const phone3Ref = useRef<HTMLDivElement>(null);
  const shouldAnimate = useShouldAnimate();

  useEffect(() => {
    if (!desktopSectionRef.current || !headingRef.current) return;

    if (!shouldAnimate) {
      gsap.set(headingRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(headingRef.current, { opacity: 0, y: -30 });

    const st = ScrollTrigger.create({
      trigger: desktopSectionRef.current,
      start: "center center",
      toggleActions: "play none none none",
      onEnter: () => {
        gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === desktopSectionRef.current) t.kill();
      });
    };
  }, [shouldAnimate]);

  useEffect(() => {
    if (!desktopSectionRef.current) return;

    const section = desktopSectionRef.current;
    const phone1 = phone1Ref.current;
    const phone2 = phone2Ref.current;
    const phone3 = phone3Ref.current;
    if (!phone1 || !phone2 || !phone3) return;

    if (!shouldAnimate) {
      gsap.set([phone1, phone2, phone3], { opacity: 1, scale: 1 });
      return;
    }

    gsap.set([phone1, phone2, phone3], { opacity: 0, scale: 0.8 });

    const phoneTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: "+=550",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onLeave: () => {
          requestAnimationFrame(() => {
            const next = section.nextElementSibling as HTMLElement | null;
            if (next) {
              const top = next.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top: Math.max(0, top - 1), behavior: "smooth" });
            }
          });
        },
      },
    });

    phoneTimeline
      .to(phone1, { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" })
      .to(phone2, { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }, "-=0.2")
      .to(phone3, { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }, "-=0.2");

    return () => {
      phoneTimeline.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === section) t.kill();
      });
    };
  }, [shouldAnimate]);

  return (
    <div >
      <section
        ref={desktopSectionRef}
        className="hidden md:block bg-[#f5f5f0] py-12 sm:py-16 px-4 sm:px-6 md:pt-38 md:px-0 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div  className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circular Lines - Thin abstract circles */}
          <Image
            src="/Group 35887.svg"
            alt="Community Groups"
            width={210}
            height={210}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30"
          />
          <Image
            src="/Ellipse 2.svg"
            alt="Community Groups"
            width={210}
            height={210}
            className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-100"
          />
          <Image
            src="/Ellipse 2.svg"
            alt="Community Groups"
            width={210}
            height={210}
            className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-100"
          />
        </div>

        <div id="download" className="mx-auto max-w-7xl relative z-10">
          <div className="relative mb-12 sm:mb-16 md:mb-20">
            {/* Text and Phones Container */}
            <div className="relative min-h-[450px] lg:min-h-[550px] px-8">
              {/* Text: "Download the App Now" - Centered, phones will overlap */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
                <div
                  ref={headingRef}
                  className="flex items-center justify-center"
                >
                  <Image
                    src="/Download The App Now.svg"
                    alt="Download The App Now"
                    width={210}
                    height={210}
                    className="w-full max-w-full h-auto"
                  />
                </div>
              </div>

              {/* Phones - Diagonal arrangement from top-left to bottom-right, overlapping text */}
              <div className="absolute left-[40%] top-1/2 md:mt-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                {/* Left Phone - Appears on first scroll */}
                <div
                  ref={phone1Ref}
                  className="relative z-10 w-40 lg:w-48 xl:w-56 transform -rotate-[6deg] -ml-18 -mt-12"
                >
                  <div className="relative p-2">
                    <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                      <Image
                        width={900}
                        height={900}
                        src="/iPhone-13-Pro-Front.svg"
                        alt="App Screen 1"
                        className="w-full h-full -mt-12"
                      />
                    </div>
                  </div>
                </div>
                {/* Middle Phone - Appears on second scroll */}
                <div
                  ref={phone2Ref}
                  className="relative z-10 w-40 lg:w-48 xl:w-56 transform -rotate-[6deg] -ml-18 -mt-12"
                >
                  <div className="relative p-2">
                    <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                      <Image
                        width={900}
                        height={900}
                        src="/iPhone-13-Pro-Front (1).svg"
                        alt="App Screen 2"
                        className="w-full h-full -ml-5"
                      />
                    </div>
                  </div>
                </div>
                {/* Right Phone - Appears on third scroll */}
                <div
                  ref={phone3Ref}
                  className="relative z-10 w-40 lg:w-48 xl:w-56 transform -rotate-[6deg] -ml-18 -mt-12"
                >
                  <div className="relative p-2">
                    <div className="aspect-[9/19] w-[650px] h-[650px] overflow-hidden">
                      <Image
                        width={900}
                        height={900}
                        src="/iPhone-13-Pro-Front (2).svg"
                        alt="App Screen 3"
                        className="w-full h-full mt-20 -ml-15"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons - Positioned below text */}
            <div className="relative flex flex-row justify-between items-start gap-4 -mt-[180px] px-0">
              {/* Left Button */}
              <div className="flex-1 min-w-[200px] max-w-[280px]">
                <Image
                  src="/Store download button.svg"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className="w-full h-full flex-shrink-0"
                />
              </div>

              {/* Right Button */}
              <div className="flex-1 min-w-[200px] max-w-[280px] ml-auto">
                <Image
                  src="/Store download button (1).svg"
                  alt="App Store"
                  width={24}
                  height={24}
                  className="w-full h-full flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section - NO animations, static images only, hidden on desktop */}
      <section className="block md:hidden bg-[#f5f5f0] py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circular Lines - Thin abstract circles */}
          <Image
            src="/Group 35887.svg"
            alt="Community Groups"
            width={210}
            height={210}
            className="absolute top-130 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1900px] h-[1900px] opacity-30"
          />
          <Image
            src="/Ellipse 2.svg"
            alt="Community Groups"
            width={210}
            height={210}
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1900px] h-[1900px] opacity-100"
          />
          <Image
            src="/Ellipse 2.svg"
            alt="Community Groups"
            width={210}
            height={210}
            className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1900px] h-[1900px] opacity-100"
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Text: "Download the App Now" - Centered */}
          <div className="relative z-10 w-full px-4 mb-8">
            <div className="flex items-center justify-center">
              <Image
                src="/Download The App Now.svg"
                alt="Download The App Now"
                width={210}
                height={210}
                className="w-full max-w-full h-auto"
              />
            </div>
          </div>

          {/* Download Buttons - Stacked vertically on mobile */}
          <div className="relative flex justify-center items-center gap-4 px-4">
            {/* Google Play Button */}
            <div className="w-full max-w-[280px]">
              <Image
                src="/Store download button.svg"
                alt="Google Play"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0"
              />
            </div>

            {/* App Store Button */}
            <div className="w-full max-w-[280px]">
              <Image
                src="/Store download button (1).svg"
                alt="App Store"
                width={24}
                height={24}
                className="w-full h-full flex-shrink-0"
              />
            </div>
          </div>

          {/* Phones - Diagonal arrangement for mobile - STATIC, NO ANIMATIONS */}
          <div className="relative -ml-60 min-[400px]:-ml-70 mt-40 flex items-center justify-center mb-8 h-[200px] min-[400px]:h-[300px]">
            {/* Left Phone */}
            <div className="relative z-10 w-24 transform -rotate-[5deg] -ml-4 -mt-8">
              <div className="relative p-1.5">
                <div className="aspect-[9/19] w-[400px] h-[400px] min-[400px]:w-[450px] min-[400px]:h-[450px] overflow-hidden">
                  <Image
                    width={1900}
                    height={1900}
                    src="/iPhone-13-Pro-Front.svg"
                    alt="App Screen 1"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            {/* Middle Phone */}
            <div className="relative z-10 w-24 transform -rotate-[5deg] -ml-4 -mt-8">
              <div className="relative p-1.5">
                <div className="aspect-[9/19] w-[400px] h-[400px] min-[400px]:w-[450px] min-[400px]:h-[450px] overflow-hidden">
                  <Image
                    width={1900}
                    height={1900}
                    src="/iPhone-13-Pro-Front (1).svg"
                    alt="App Screen 2"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            {/* Right Phone */}
            <div className="relative z-10 w-24 transform -rotate-[5deg] -ml-4 -mt-8">
              <div className="relative p-1.5">
                <div className="aspect-[9/19] w-[400px] h-[400px] min-[400px]:w-[450px] min-[400px]:h-[450px] overflow-hidden">
                  <Image
                    width={1900}
                    height={1900}
                    src="/iPhone-13-Pro-Front (2).svg"
                    alt="App Screen 3"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
