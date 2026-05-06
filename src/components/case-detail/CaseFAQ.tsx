"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CaseType } from "@/types/case";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HelpCircle,
  Plus,
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Users,
  CheckCircle,
  Lightbulb,
  FileText,
  DollarSign,
  ArrowRight,
  Star,
  Award,
  Zap,
  BookOpen,
  Target,
  AlertCircle
} from "lucide-react";

interface CaseFAQProps {
  caseData: CaseType;
}

const CaseFAQ = ({ caseData }: CaseFAQProps) => {
  // Categorize FAQs for better organization
  const categorizeFAQs = (faqs: Array<{ question: string, answer: string }>) => {
    // This is a simplified categorization - in real app, this would be more sophisticated
    const general = faqs.filter((_, index) => index < Math.ceil(faqs.length / 3));
    const legal = faqs.filter((_, index) => index >= Math.ceil(faqs.length / 3) && index < (2 * Math.ceil(faqs.length / 3)));
    const process = faqs.filter((_, index) => index >= (2 * Math.ceil(faqs.length / 3)));

    return { general, legal, process };
  };

  const { general, legal, process } = categorizeFAQs(caseData.faqs);

  // Additional common FAQs that could be universal
  const commonFAQs = [
    {
      question: "How much does it cost to hire your firm?",
      answer: "Nothing upfront! We work on a contingency fee basis, which means you pay no attorney fees. Our fee comes as a percentage of your settlement or award, so we're motivated to get you the maximum compensation possible.",
      category: "general",
      icon: DollarSign
    },
    {
      question: "How long will my case take?",
      answer: "Case timelines vary depending on complexity, but most cases resolve within 6 months to 2 years. We work diligently to expedite your case while ensuring we build the strongest possible claim for maximum compensation. We'll keep you informed throughout the entire process.",
      category: "process",
      icon: Clock
    },
    {
      question: "What if I'm not sure if I qualify?",
      answer: "That's exactly why we offer free case evaluations! Our experienced legal team will review your specific situation, medical records, and exposure history to determine if you have a valid claim. There's no obligation and the consultation is completely confidential.",
      category: "general",
      icon: CheckCircle
    }
  ];

  const allFAQs = [...caseData.faqs.map((faq, index) => ({ ...faq, category: 'case-specific', icon: HelpCircle })), ...commonFAQs];

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general': return 'text-blue-600 bg-blue-500/10';
      case 'legal': return 'text-purple-600 bg-purple-500/10';
      case 'process': return 'text-green-600 bg-green-500/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'general': return HelpCircle;
      case 'legal': return Shield;
      case 'process': return FileText;
      default: return BookOpen;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl"
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 sm:mb-6 px-4 py-2 text-primary border-primary/30 bg-primary/5 font-bold backdrop-blur-sm text-sm sm:text-base">
              <Lightbulb className="w-4 h-4 mr-2" />
              FREQUENTLY ASKED QUESTIONS
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Get Answers About
              </span>
              <br />
              <span className="text-gray-800">Your {caseData.title} Case</span>
            </h2>

            <motion.div
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 mx-auto mb-4 sm:mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get clear answers to common questions about {caseData.title.toLowerCase()} claims and
              <span className="font-bold text-primary"> the legal process.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            {/* Main FAQ Section */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              {/* Featured Questions */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-accent to-yellow-400 rounded-full p-2 mr-3">
                    <Target className="w-5 h-5 text-primary" />
                  </span>
                  Most Important Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {allFAQs.slice(0, 4).map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 group-hover:from-white group-hover:to-primary/5">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start space-x-3 mb-3">
                            <div className="bg-primary/10 rounded-full p-2 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <Badge className={`${getCategoryColor(faq.category)} text-xs font-bold`}>
                              {faq.category.replace('-', ' ').toUpperCase()}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-primary text-sm sm:text-base mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {faq.answer.substring(0, 120)}...
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
                  Complete FAQ Guide
                </h3>

                <Accordion type="multiple" className="w-full space-y-4">
                  {allFAQs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <AccordionItem
                        value={`faq-${index}`}
                        className="border border-gray-200 rounded-xl px-4 sm:px-6 bg-white/60 hover:bg-white/80 transition-all duration-300 group-hover:shadow-md"
                      >
                        <AccordionTrigger className="text-left font-bold text-sm sm:text-base lg:text-lg text-primary hover:text-primary/80 py-4 sm:py-6 [&[data-state=open]>svg]:rotate-45">
                          <div className="flex items-center space-x-3 flex-1">
                            <div className="bg-primary/10 rounded-full p-2 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                              <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <Badge className={`${getCategoryColor(faq.category)} text-xs font-bold`}>
                                  {faq.category.replace('-', ' ').toUpperCase()}
                                </Badge>
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
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Contact Card */}
              <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-full bg-accent/20">
                      <MessageCircle className="h-5 h-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black">Still Need Help?</h3>
                  </div>

                  <p className="text-white/90 mb-6 text-sm sm:text-base leading-relaxed">
                    Can't find what you're looking for? Our {caseData.title} legal experts are standing by to provide personalized answers.
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
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-4 flex items-center text-base sm:text-lg">
                    <Users className="w-5 h-5 mr-2" />
                    {caseData.title} Case Stats
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Cases Filed</span>
                      <span className="font-bold text-primary">2,500+</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Avg Settlement</span>
                      <span className="font-bold text-primary">$125,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Response Time</span>
                      <span className="font-bold text-primary">24 Hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Urgency Card */}
              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-red-700 text-base sm:text-lg">Time is Critical</h4>
                  </div>
                  <p className="text-red-600 text-sm mb-4 leading-relaxed">
                    {caseData.title} cases have strict deadlines. Don't wait - protect your rights today.
                  </p>
                  <div className="bg-red-100 rounded-lg p-3 text-center">
                    <p className="text-red-800 font-bold text-sm">FREE consultation expires soon</p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Resources */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-accent/5 to-yellow-400/5">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-4 flex items-center text-base sm:text-lg">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Additional Resources
                  </h4>
                  <div className="space-y-3">
                    <Link href="/cases" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View All Active Cases
                    </Link>
                    <Link href="#case-evaluation" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Link>
                    <Link href="/#claim-process" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Legal Process Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseFAQ;


