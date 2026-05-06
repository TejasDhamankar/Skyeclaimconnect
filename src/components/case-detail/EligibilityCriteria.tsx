"use client";

import { motion } from "framer-motion";
import {
  Check,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  MapPin,
  FileText,
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Target,
  Scale,
  Award
} from "lucide-react";
import { CaseType } from "@/types/case";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface EligibilityCriteriaProps {
  caseData: CaseType;
}

const EligibilityCriteria = ({ caseData }: EligibilityCriteriaProps) => {
  // Categorize criteria for better organization
  const categorizeCriteria = (criteria: string[]) => {
    const essential = criteria.filter((_, index) => index < Math.ceil(criteria.length / 2));
    const additional = criteria.filter((_, index) => index >= Math.ceil(criteria.length / 2));
    return { essential, additional };
  };

  const { essential, additional } = categorizeCriteria(caseData.eligibilityCriteria);

  // Mock qualification percentage - in real app, this would be calculated
  const qualificationRate = "92%";

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

  const criteriaVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fbf7f0] py-16 sm:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-[rgba(194,148,90,0.08)] blur-2xl sm:h-96 sm:w-96 sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Floating checkmarks */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/5 text-4xl sm:text-6xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✓
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
            <Badge className="mb-4 rounded-none border-[rgba(194,148,90,0.35)] bg-white px-4 py-2 text-sm sm:text-base font-medium uppercase tracking-[0.24em] text-primary">
              <Target className="w-4 h-4 mr-2" />
              ELIGIBILITY REQUIREMENTS
            </Badge>

            <h2 className="mb-4 font-serif text-3xl leading-tight text-primary sm:text-4xl md:text-5xl sm:mb-6">
              <span className="text-primary">
                Do You Qualify
              </span>
              <br />
              <span className="text-gray-800">For Compensation?</span>
            </h2>

            <motion.div
              className="mx-auto mb-4 h-1 w-16 rounded-full bg-[var(--color-accent)] sm:mb-6 sm:w-24"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You may qualify for a {caseData.title} claim if you meet the following criteria.
              <span className="font-bold text-[var(--color-accent)]"> Most of our clients qualify for significant compensation.</span>
            </p>

            {/* Qualification Rate */}
            <div className="mt-8">
              <Card className="inline-block border border-[#dfd3c4] bg-white">
                <CardContent className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500/20 rounded-full p-2">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-green-700">{qualificationRate}</div>
                      <div className="text-sm text-green-600">of our clients qualify</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Criteria */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Essential Criteria */}
              <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500/20 rounded-full p-3 mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-primary">Essential Requirements</h3>
                      <p className="text-gray-600 text-sm">You must meet all of these criteria</p>
                    </div>
                  </div>

                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {essential.map((criterion, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        variants={criteriaVariants}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="border border-[#dfd3c4] bg-white transition-all duration-300 group-hover:shadow-md hover:bg-[#f8f1e6]">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-start space-x-4">
                              <div className="bg-green-500/20 rounded-full p-2 flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                                <Check className="w-5 h-5 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                                  {criterion}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>

              {/* Additional Criteria */}
              {additional.length > 0 && (
                <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-500/20 rounded-full p-3 mr-4">
                        <AlertCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-primary">Additional Factors</h3>
                        <p className="text-gray-600 text-sm">These may strengthen your case</p>
                      </div>
                    </div>

                    <motion.div
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {additional.map((criterion, index) => (
                        <motion.div
                          key={index}
                          className="group"
                          variants={criteriaVariants}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Card className="border border-blue-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 hover:from-blue-100/50 hover:to-indigo-100/50 transition-all duration-300 group-hover:shadow-md">
                            <CardContent className="p-4 sm:p-6">
                              <div className="flex items-start space-x-4">
                                <div className="bg-blue-500/20 rounded-full p-2 flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                                  <Check className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                                    {criterion}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Quick Check Card */}
              <Card className="relative overflow-hidden border-none bg-primary text-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
                <CardContent className="p-6 sm:p-8 text-center relative z-10">
                  <div className="bg-primary/20 rounded-full p-4 inline-flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-3">
                    Quick Eligibility Check
                  </h3>
                  <p className="text-primary/80 mb-6 text-sm leading-relaxed">
                    Get an instant assessment of your case eligibility. Takes less than 2 minutes.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-accent font-black shadow-lg hover:shadow-xl">
                      <Link href="#case-evaluation">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Check Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>

                  <p className="text-primary/70 text-xs mt-3">
                    Free • No obligation • Instant results
                  </p>
                </CardContent>
              </Card>

              {/* Success Stats */}


              {/* Contact Card */}
              <Card className="border border-[#dfd3c4] bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-3 inline-flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary mb-3 text-lg">
                    Speak with an Expert
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Not sure if you qualify? Our legal experts can help determine your eligibility over the phone.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                      <a href="tel:+15550102020">
                        <Phone className="mr-2 h-4 w-4" />
                        Call +1 555-010-2020
                      </a>
                    </Button>
                  </motion.div>

                  <p className="text-gray-500 text-xs mt-3">
                    Free consultation • Available 24/7
                  </p>
                </CardContent>
              </Card>

              {/* Urgency Card */}
              <Card className="border border-[#dfd3c4] bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-red-700">Don't Wait</h4>
                  </div>
                  <p className="text-red-600 text-sm mb-4 leading-relaxed">
                    Filing deadlines apply to all legal claims. The sooner you act, the stronger your case.
                  </p>
                  <div className="bg-red-100 rounded-lg p-3 text-center">
                    <p className="text-red-800 font-bold text-sm">Free review expires soon</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="relative overflow-hidden border-none bg-primary text-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
              <CardContent className="p-8 sm:p-12 text-center relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black mb-4">
                  <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                    Think You Qualify?
                  </span>
                  <br />
                  <span className="text-white">Let's Find Out Together</span>
                </h3>

                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our experienced legal team will review your specific situation and determine your eligibility for compensation.
                  <span className="font-bold text-accent"> Get your free case evaluation now.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                      <Link href="#case-evaluation">
                        <CheckCircle className="mr-3 h-5 w-5" />
                        Check My Eligibility
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-8 py-6 text-lg backdrop-blur-sm w-full sm:w-auto">
                      <a href="tel:+15550102020">
                        <Phone className="mr-3 h-5 w-5" />
                        Call +1 555-010-2020
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/80 text-sm">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-green-400 mr-2" />
                    <span>No Win, No Fee</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-400 mr-2" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-accent mr-2" />
                    <span>Expert Legal Team</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;


