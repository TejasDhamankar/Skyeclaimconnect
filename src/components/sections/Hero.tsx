"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const slides = [
    {
      id: 1,
      background: "/dy-slider-1.jpg",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      eyebrow: "Private Claim Screening",
      titleStart: "Build A",
      titleEnd: "Strong Claim With Confidence",
      description:
        "Skye Claim Connect connects qualified claimants with legal teams through a fast, secure, and client-first intake experience.",
      caseLine: "Depo Provera | Roblox | Rideshare | Talc | Ozempic | MVA | WTC",
      cta: "Check My Claim Eligibility",
    },
    {
      id: 2,
      background: "/list-sider-bar.jpg",
      backgroundPosition: "right center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      eyebrow: "Trusted Legal Intake",
      titleStart: "Start Your",
      titleEnd: "Case Review With Clarity",
      description:
        "Our intake flow helps organize your details, surface likely claim fit, and move you toward the right legal next step with less friction.",
      caseLine: "Secure Review | Fast Contact | Client-First Support",
      cta: "Start Free Consultation",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  return (
    <section className="law-frame relative min-h-screen overflow-hidden bg-primary pt-28 text-white md:pt-32 lg:pt-36">
      <motion.div
        key={currentSlide.background}
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url('${currentSlide.background}')`,
          backgroundPosition: currentSlide.backgroundPosition,
          backgroundSize: currentSlide.backgroundSize,
          backgroundRepeat: currentSlide.backgroundRepeat,
        }}
        initial={{ opacity: 0.35, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,34,52,0.94)_0%,rgba(23,34,52,0.88)_42%,rgba(23,34,52,0.55)_68%,rgba(23,34,52,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent_18%,transparent_82%,rgba(255,255,255,0.06))]" />
      <div className="absolute inset-y-0 left-[13%] hidden w-px bg-white/10 xl:block" />
      <div className="absolute inset-y-0 right-[14%] hidden w-px bg-white/10 xl:block" />
      <div className="absolute left-0 right-0 top-[36%] hidden h-px bg-white/10 xl:block" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1400px] grid-cols-1 gap-8 px-4 pb-16 sm:pb-20 md:px-8 xl:grid-cols-[120px_minmax(0,620px)_1fr] xl:items-center xl:gap-10 xl:pb-24">
        <motion.div
          className="hidden xl:flex xl:h-full xl:flex-col xl:items-start xl:justify-center xl:gap-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="law-label rotate-180 text-[10px] text-white/60 [writing-mode:vertical-rl]">
            
          </div>
          <div className="h-20 w-px bg-[var(--color-accent)]/60" />
          <div className="law-label rotate-180 text-[10px] text-white/60 [writing-mode:vertical-rl]">
            Scroll
          </div>
        </motion.div>

        <motion.div
          key={currentSlide.id}
          className="relative z-10 self-center pt-10 xl:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="law-label mb-5 text-[10px] text-[var(--color-accent)] sm:mb-6">{currentSlide.eyebrow}</div>
          <h1 className="max-w-[720px] font-serif text-[3.35rem] leading-[0.92] text-white sm:text-[4.5rem] lg:text-[6.2rem]">
            {currentSlide.titleStart}
            {" "}
            {currentSlide.titleEnd}
          </h1>

          <p className="mt-6 max-w-[540px] text-[15px] leading-7 text-white/72 sm:mt-8 sm:leading-8">
            {currentSlide.description}
            <span className="mt-3 block text-white/62">
              {currentSlide.caseLine}
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-14 w-full rounded-none border border-[rgba(194,148,90,0.72)] bg-transparent px-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white hover:bg-[var(--color-accent)] hover:text-primary sm:w-auto sm:px-8 sm:text-[12px] sm:tracking-[0.3em]"
            >
              <Link href="#case-evaluation">
                {currentSlide.cta}
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="h-14 w-full rounded-none border border-white/15 bg-white/5 px-6 text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:text-white sm:w-auto sm:px-8 sm:text-[12px] sm:tracking-[0.28em]"
            >
              <a href="tel:+15550102020">
                <Phone className="mr-3 h-4 w-4 text-[var(--color-accent)]" />
                Call +1 555-010-2020
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-white/65 sm:mt-16 sm:gap-6">
            <div className="law-label text-[10px]">Case Types</div>
            <div className="h-px w-10 bg-white/25" />
            <div className="text-sm uppercase tracking-[0.2em]">Depo Provera</div>
            <div className="text-sm uppercase tracking-[0.2em]">Roblox</div>
            <div className="text-sm uppercase tracking-[0.2em]">Rideshare</div>
            <div className="text-sm uppercase tracking-[0.2em]">Talc</div>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden h-full min-h-[520px] xl:block"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="absolute right-16 top-24 flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[var(--color-accent)]/55">
              <div className="law-label absolute inset-0 flex items-center justify-center text-center text-[8px] text-white/65">
                Consultation With A Legal Team
              </div>
              <div className="h-3 w-3 rounded-full bg-[var(--color-accent)]" />
            </div>
          </div>

          <div className="absolute bottom-12 right-10 flex items-center gap-4 text-white/70">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={
                  index === activeSlide
                    ? "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-accent)]/45 bg-[var(--color-accent)]/10 text-sm text-[var(--color-accent)]"
                    : "flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }
                aria-label={`Show hero slide ${slide.id}`}
                aria-pressed={index === activeSlide}
              >
                {slide.id}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto flex max-w-[1400px] justify-center px-4 pb-8 xl:hidden">
        <div className="flex items-center gap-3 text-white/70">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={
                index === activeSlide
                  ? "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)]/45 bg-[var(--color-accent)]/10 text-sm text-[var(--color-accent)]"
                  : "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }
              aria-label={`Show hero slide ${slide.id}`}
              aria-pressed={index === activeSlide}
            >
              {slide.id}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
