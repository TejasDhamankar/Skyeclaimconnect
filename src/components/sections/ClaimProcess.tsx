"use client";

import { motion } from "framer-motion";
import { CalendarDays, FileCheck2, HandCoins, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "1.",
    title: "Schedule A Time",
    description:
      "Complete our secure form or call us for a no-obligation evaluation of your potential claim by our legal experts.",
    icon: CalendarDays,
  },
  {
    number: "2.",
    title: "Plan With Success",
    description:
      "Our specialized team analyzes your information to determine qualification and potential compensation value.",
    icon: ShieldCheck,
  },
  {
    number: "3.",
    title: "Detailed Cost Estimate",
    description:
      "We assist in collecting relevant medical records, exposure documentation, and evidence to strengthen your case.",
    icon: FileCheck2,
  },
  {
    number: "4.",
    title: "We Care About The Rest",
    description:
      "Receive the settlement you deserve for medical expenses, lost income, suffering, and other damages.",
    icon: HandCoins,
  },
];

const ClaimProcess = () => {
  return (
    <section
      id="claim-process"
      className="relative overflow-hidden bg-[#fbf7f0] px-4 py-20 md:px-8 md:py-28"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[28%] bg-cover bg-center opacity-10 lg:block" style={{ backgroundImage: "url('/list-sider-bar.jpg')" }} />

      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="law-label text-[10px] text-primary/55">How It Works</div>
          <h2 className="mt-6 font-serif text-5xl leading-none text-primary md:text-6xl">
            Simple. Fast.
            <span className="mt-2 block italic text-[var(--color-accent)]">Results-Driven.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-px bg-[#e6ddcf] md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="grid min-h-[240px] grid-cols-[1fr_150px] items-stretch bg-[#f9f4ea]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="flex flex-col justify-center px-8 py-10 md:px-10">
                  <div className="font-serif text-2xl italic text-primary">{step.number}</div>
                  <h3 className="mt-3 max-w-[240px] font-serif text-[2rem] leading-none text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-[320px] text-[14px] leading-7 text-primary/65">
                    {step.description}
                  </p>
                </div>
                <div className="flex items-center justify-center border-l border-[#e6ddcf] bg-primary">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[rgba(194,148,90,0.45)] text-[var(--color-accent)]">
                    <Icon className="h-9 w-9" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClaimProcess;
