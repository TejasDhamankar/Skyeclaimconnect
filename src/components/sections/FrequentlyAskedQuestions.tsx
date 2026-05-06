"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ArrowUpRight,
  Plus,
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Users,
  CheckCircle,
  Lightbulb,
  FileText,
  DollarSign
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      id: "qualification",
      category: "Eligibility",
      icon: CheckCircle,
      question: "How do I know if I qualify for compensation?",
      answer: "Qualification criteria vary depending on the specific case. Generally, you may qualify if you were exposed to a harmful substance, used a defective product, or suffered injuries as a result of corporate negligence. Our free case evaluation can help determine if you're eligible for compensation based on your unique situation.",
      featured: true
    },
    {
      id: "compensation",
      category: "Settlements",
      icon: DollarSign,
      question: "How much compensation could I receive?",
      answer: "Compensation amounts vary widely based on several factors, including the type and severity of your injuries, duration of exposure, medical expenses, lost wages, and pain and suffering. Some cases result in settlements ranging from tens of thousands to millions of dollars. Our legal team will work to secure the maximum compensation possible for your specific circumstances.",
      featured: true
    },
    {
      id: "deadline",
      category: "Timeline",
      icon: Clock,
      question: "Is there a deadline to file a claim?",
      answer: "Yes, there are time limits known as statutes of limitations that vary by case type and state. These deadlines can range from one to several years from the date of injury or from when you discovered (or should have discovered) that your injury was caused by a product or exposure. It's crucial to consult with an attorney as soon as possible to ensure your claim is filed within the appropriate timeframe.",
      featured: true
    },
    {
      id: "fees",
      category: "Costs",
      icon: Shield,
      question: "Do I need to pay anything upfront to hire your firm?",
      answer: "No. We work on a contingency fee basis, which means you pay nothing upfront for our legal services. We only get paid if we win your case or secure a settlement. Our fee will be a percentage of your final compensation amount, which will be clearly outlined in our agreement before we begin working together.",
      featured: true
    },
    {
      id: "timeline",
      category: "Process",
      icon: Clock,
      question: "How long does the legal process take?",
      answer: "The timeline varies depending on the complexity of your case, but most claims take several months to a few years to resolve. Mass tort and class action cases often involve multiple phases, including discovery, potential settlement negotiations, and possibly trial. Our legal team works diligently to expedite the process while ensuring we build the strongest possible case for maximum compensation.",
      featured: false
    },
    {
      id: "court",
      category: "Process",
      icon: Users,
      question: "Will I need to appear in court?",
      answer: "Most mass tort and class action cases are resolved through settlements without clients needing to appear in court. However, in some instances, you might need to provide testimony or attend certain hearings. If your case does require court appearances, our legal team will thoroughly prepare you and provide support throughout the process.",
      featured: false
    },
    {
      id: "documentation",
      category: "Requirements",
      icon: FileText,
      question: "What information will I need to provide for my case?",
      answer: "The specific information needed depends on your case type, but generally you'll need to provide medical records, evidence of exposure or product use, employment history (if relevant), and documentation of expenses related to your injury. During your initial consultation, we'll guide you through exactly what documentation will be helpful for your specific situation.",
      featured: false
    },
    {
      id: "confidential",
      category: "Privacy",
      icon: Shield,
      question: "Is my consultation completely confidential?",
      answer: "Absolutely. All communications with our legal team are protected by attorney-client privilege. Your personal information, medical records, and case details are kept strictly confidential. We never share your information with third parties without your explicit consent.",
      featured: false
    },
    {
      id: "multiple-cases",
      category: "Eligibility",
      icon: Users,
      question: "Can I file multiple claims if I have multiple injuries?",
      answer: "Yes, if you have multiple injuries or exposures that may be related to different products or incidents, you may be eligible to file multiple claims. Each case will be evaluated on its own merits. Our legal team will review all potential claims during your consultation to ensure you receive maximum compensation for all qualifying injuries.",
      featured: false
    }
  ];

  const featuredFaqs = faqs.filter(faq => faq.featured);
  const allFaqs = faqs;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />

        {/* Floating Question Marks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/5 text-4xl sm:text-6xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-4 sm:mb-6 px-4 py-2 text-primary border-primary/30 bg-primary/5 font-bold backdrop-blur-sm">
            <Lightbulb className="w-4 h-4 mr-2" />
            FREQUENTLY ASKED QUESTIONS
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-primary mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-cyan-700 to-teal-700 bg-clip-text text-transparent">
              Get Answers.
            </span>
            <br />
            <span className="text-gray-800">Move Forward.</span>
          </h2>

          <motion.div
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 mx-auto mb-4 sm:mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Review straightforward guidance on case fit, timelines, and documentation.
            <span className="font-bold text-primary"> Built to help you decide your next legal step with confidence.</span>
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Main FAQ Section */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Featured Questions */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="bg-gradient-to-r from-accent to-yellow-400 rounded-full p-2 mr-3">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </span>
                Most Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {featuredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    className="group"
                  >
                    <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-cyan-50/50 group-hover:from-white group-hover:to-primary/5">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                            <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-primary text-sm sm:text-base mb-3 leading-tight group-hover:text-cyan-700 transition-colors">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Questions Accordion */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary" />
                All Questions & Answers
              </h3>

              <Accordion type="multiple" className="w-full space-y-4">
                {allFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={faq.id}
                      className="border border-gray-200 rounded-xl px-4 sm:px-6 bg-white/60 hover:bg-white/80 transition-all duration-300 group-hover:shadow-md"
                    >
                      <AccordionTrigger className="text-left font-bold text-sm sm:text-base lg:text-lg text-primary hover:text-primary/80 py-4 sm:py-6 [&[data-state=open]>svg]:rotate-45">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="bg-primary/10 rounded-full p-2 group-hover:bg-primary/20 transition-colors">
                            <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                {faq.category}
                              </Badge>
                              {faq.featured && (
                                <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <span className="block text-left">{faq.question}</span>
                          </div>
                        </div>
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary transition-transform duration-300" />
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-4 sm:pb-6 pt-2 text-sm sm:text-base">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-12 sm:pl-14"
                        >
                          {faq.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* Enhanced Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Contact Card */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-slate-900 to-cyan-900 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-full bg-accent/20">
                    <MessageCircle className="h-5 h-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black">Still Need Help?</h3>
                </div>

                <p className="text-white/90 mb-6 text-sm sm:text-base leading-relaxed">
                  Can't find what you're looking for? Our legal experts are standing by to provide personalized answers.
                </p>

                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary font-bold shadow-lg">
                      <Link href="#case-evaluation" className="flex items-center justify-center text-sm sm:text-base">
                        <FileText className="mr-2 h-4 w-4" />
                        Free Case Review
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 font-bold">
                      <a href="tel:+15550102020" className="flex items-center justify-center text-sm sm:text-base">
                        <Phone className="mr-2 h-4 w-4" />
                        Call +1 555-010-2020
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Trust Elements */}
                <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="font-black text-lg text-accent">24/7</div>
                    <div className="text-xs opacity-80">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-lg text-accent">Free</div>
                    <div className="text-xs opacity-80">Consultation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}

            {/* Urgency Card */}
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-red-500" />
                  <h4 className="font-bold text-red-700 text-base sm:text-lg">Time is Critical</h4>
                </div>
                <p className="text-red-600 text-sm mb-4 leading-relaxed">
                  Many cases have strict deadlines. Don't wait - protect your rights today.
                </p>
                <div className="bg-red-100 rounded-lg p-3 text-center">
                  <p className="text-red-800 font-bold text-sm">FREE consultation expires soon</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;


