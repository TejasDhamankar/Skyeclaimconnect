"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  Gamepad2,
  Pill,
  Scale,
  ShieldCheck,
  Syringe,
  Truck,
} from "lucide-react";
import { getAllCaseTypes } from "@/lib/utils";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "depo-provera": Syringe,
  "roblox-addiction": Gamepad2,
  "rideshare": Truck,
  "talcum-powder": BriefcaseBusiness,
  ozempic: Pill,
  "motor-vehicle-accident": CarFront,
  "wtc-exposure": ShieldCheck,
};

const CaseTypesList = () => {
  const caseTypes = getAllCaseTypes().filter((item) =>
    [
      "depo-provera",
      "roblox-addiction",
      "rideshare",
      "talcum-powder",
      "ozempic",
      "motor-vehicle-accident",
      "wtc-exposure",
    ].includes(item.slug)
  );

  const gridItems = caseTypes.slice(0, 6);
  const centerCard = caseTypes[6];

  return (
    <section id="case-types" className="bg-[#fbf7f0] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="law-label text-[10px] text-primary/55">Multidisciplinary Team</div>
          <h2 className="mt-6 font-serif text-5xl leading-none text-primary md:text-6xl">
            Mass Tort &amp;
            <span className="mt-2 block italic text-[var(--color-accent)]">Class Action Cases</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-primary/65">
            We support high-priority injury and exposure claims with structured legal intake.
            <span className="font-medium text-primary"> If your experience matches these criteria, your claim may qualify.</span>
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 overflow-hidden border border-[#e5ddd1] bg-white md:grid-cols-3">
          {gridItems.slice(0, 2).map((caseType, index) => {
            const Icon = iconMap[caseType.slug] ?? Scale;
            return (
              <Link
                key={caseType.id}
                href={`/cases/${caseType.slug}`}
                className="group border-b border-[#e5ddd1] px-8 py-12 text-center transition hover:bg-[#faf4e8] md:border-r"
              >
                <Icon className="mx-auto h-10 w-10 text-primary/70 transition group-hover:text-[var(--color-accent)]" />
                <h3 className="mt-6 font-serif text-[2rem] leading-none text-primary">{caseType.category}</h3>
                <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]/80">
                  {caseType.title}
                </p>
              </Link>
            );
          })}

          <Link
            href={`/cases/${gridItems[2].slug}`}
            className="group border-b border-[#e5ddd1] px-8 py-12 text-center transition hover:bg-[#faf4e8]"
          >
            {(() => {
              const Icon = iconMap[gridItems[2].slug] ?? Scale;
              return <Icon className="mx-auto h-10 w-10 text-primary/70 transition group-hover:text-[var(--color-accent)]" />;
            })()}
            <h3 className="mt-6 font-serif text-[2rem] leading-none text-primary">{gridItems[2].category}</h3>
            <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]/80">{gridItems[2].title}</p>
          </Link>

          <Link
            href={`/cases/${gridItems[3].slug}`}
            className="group border-b border-[#e5ddd1] px-8 py-12 text-center transition hover:bg-[#faf4e8] md:border-r"
          >
            {(() => {
              const Icon = iconMap[gridItems[3].slug] ?? Scale;
              return <Icon className="mx-auto h-10 w-10 text-primary/70 transition group-hover:text-[var(--color-accent)]" />;
            })()}
            <h3 className="mt-6 font-serif text-[2rem] leading-none text-primary">{gridItems[3].category}</h3>
            <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]/80">{gridItems[3].title}</p>
          </Link>

          <Link
            href={`/cases/${centerCard.slug}`}
            className="group relative overflow-hidden border-b border-[#e5ddd1] px-8 py-12 text-center text-white transition md:border-r"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/list-sider-bar.jpg')" }}
            />
            <div className="absolute inset-0 bg-primary/84 transition group-hover:bg-primary/76" />
            <div className="relative z-10">
              <Scale className="mx-auto h-10 w-10 text-white/85" />
              <h3 className="mt-6 font-serif text-[2rem] leading-none">{centerCard.category}</h3>
              <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]">{centerCard.title}</p>
            </div>
          </Link>

          <Link
            href={`/cases/${gridItems[4].slug}`}
            className="group border-b border-[#e5ddd1] px-8 py-12 text-center transition hover:bg-[#faf4e8]"
          >
            {(() => {
              const Icon = iconMap[gridItems[4].slug] ?? Scale;
              return <Icon className="mx-auto h-10 w-10 text-primary/70 transition group-hover:text-[var(--color-accent)]" />;
            })()}
            <h3 className="mt-6 font-serif text-[2rem] leading-none text-primary">{gridItems[4].category}</h3>
            <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]/80">{gridItems[4].title}</p>
          </Link>

          <Link
            href={`/cases/${gridItems[5].slug}`}
            className="group px-8 py-12 text-center transition hover:bg-[#faf4e8] md:border-r"
          >
            {(() => {
              const Icon = iconMap[gridItems[5].slug] ?? Scale;
              return <Icon className="mx-auto h-10 w-10 text-primary/70 transition group-hover:text-[var(--color-accent)]" />;
            })()}
            <h3 className="mt-6 font-serif text-[2rem] leading-none text-primary">{gridItems[5].category}</h3>
            <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]/80">{gridItems[5].title}</p>
          </Link>

          <Link
            href="/cases"
            className="group flex flex-col items-center justify-center px-8 py-12 text-center transition hover:bg-[#faf4e8] md:border-r"
          >
            <ArrowRight className="h-10 w-10 text-primary/70 transition group-hover:translate-x-1 group-hover:text-[var(--color-accent)]" />
            <h3 className="mt-6 font-serif text-[2rem] leading-none text-primary">All Cases</h3>
            <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]/80">Explore Every Practice Area</p>
          </Link>

          <Link
            href="#case-evaluation"
            className="group flex flex-col items-center justify-center px-8 py-12 text-center transition hover:bg-[#faf4e8]"
          >
            <Scale className="h-10 w-10 text-primary/70 transition group-hover:text-[var(--color-accent)]" />
            <h3 className="mt-6 font-serif text-[2rem] leading-none text-primary">Free Review</h3>
            <p className="law-label mt-4 text-[10px] text-[var(--color-accent)]/80">Start Your Consultation</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseTypesList;
