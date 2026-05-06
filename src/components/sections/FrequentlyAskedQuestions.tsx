"use client";

import { motion } from "framer-motion";
import { Clock, FileText, Phone, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    id: "qualification",
    question: "How do I know if I qualify for compensation?",
    answer:
      "Qualification criteria vary depending on the specific case. Generally, you may qualify if you were exposed to a harmful substance, used a defective product, or suffered injuries as a result of corporate negligence. Our free case evaluation can help determine if you're eligible for compensation based on your unique situation.",
  },
  {
    id: "compensation",
    question: "How much compensation could I receive?",
    answer:
      "Compensation amounts vary widely based on several factors, including the type and severity of your injuries, duration of exposure, medical expenses, lost wages, and pain and suffering. Some cases result in settlements ranging from tens of thousands to millions of dollars. Our legal team will work to secure the maximum compensation possible for your specific circumstances.",
  },
  {
    id: "deadline",
    question: "Is there a deadline to file a claim?",
    answer:
      "Yes, there are time limits known as statutes of limitations that vary by case type and state. These deadlines can range from one to several years from the date of injury or from when you discovered (or should have discovered) that your injury was caused by a product or exposure. It's crucial to consult with an attorney as soon as possible to ensure your claim is filed within the appropriate timeframe.",
  },
  {
    id: "fees",
    question: "Do I need to pay anything upfront to hire your firm?",
    answer:
      "No. We work on a contingency fee basis, which means you pay nothing upfront for our legal services. We only get paid if we win your case or secure a settlement. Our fee will be a percentage of your final compensation amount, which will be clearly outlined in our agreement before we begin working together.",
  },
  {
    id: "documentation",
    question: "What information will I need to provide for my case?",
    answer:
      "The specific information needed depends on your case type, but generally you'll need to provide medical records, evidence of exposure or product use, employment history (if relevant), and documentation of expenses related to your injury. During your initial consultation, we'll guide you through exactly what documentation will be helpful for your specific situation.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <section id="faq" className="bg-primary px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="law-label text-[10px] text-white/55">Frequently Asked Questions</div>
          <h2 className="mt-6 max-w-[520px] font-serif text-5xl leading-none md:text-6xl">
            Get Answers.
            <span className="mt-2 block italic text-[var(--color-accent)]">Move Forward.</span>
          </h2>
          <p className="mt-8 max-w-[520px] text-[15px] leading-8 text-white/70">
            Review straightforward guidance on case fit, timelines, and documentation.
            <span className="font-medium text-white"> Built to help you decide your next legal step with confidence.</span>
          </p>

          <div className="mt-10 space-y-5 border-t border-white/10 pt-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(194,148,90,0.4)] text-[var(--color-accent)]">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="law-label text-[10px] text-white/45">Private Review</div>
                <div className="font-serif text-2xl">Confidential claim screening</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(194,148,90,0.4)] text-[var(--color-accent)]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="law-label text-[10px] text-white/45">Fast Contact</div>
                <div className="font-serif text-2xl">Intake team available quickly</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-none border border-[rgba(194,148,90,0.72)] bg-transparent px-8 text-[12px] uppercase tracking-[0.28em] text-white hover:bg-[var(--color-accent)] hover:text-primary"
            >
              <Link href="#case-evaluation">Free Case Review</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-14 rounded-none border border-white/12 bg-white/5 px-8 text-[12px] uppercase tracking-[0.28em] text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:+15550102020">
                <Phone className="mr-2 h-4 w-4 text-[var(--color-accent)]" />
                Call +1 555-010-2020
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10"
        >
          <div className="law-label mb-5 text-[10px] text-[var(--color-accent)]">Frequently Asked Questions</div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-white/10 bg-primary/50 px-5"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-[1.8rem] leading-none text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-7 text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-white/70">
              <FileText className="h-5 w-5 text-[var(--color-accent)]" />
              <span className="text-sm uppercase tracking-[0.22em]">
                Questions about records, deadlines, or case fit can all start with one form.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
