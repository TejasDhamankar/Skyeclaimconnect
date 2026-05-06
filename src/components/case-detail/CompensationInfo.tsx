"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  ShieldAlert,
  TrendingUp,
  Calculator,
  CreditCard,
  Heart,
  Briefcase,
  Home,
  Phone,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Users,
  Award,
  Shield,
  Zap,
  PiggyBank,
  Target,
  Banknote
} from "lucide-react";
import { CaseType } from "@/types/case";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

interface CompensationInfoProps {
  caseData: CaseType;
}

const CompensationInfo = ({ caseData }: CompensationInfoProps) => {
  // Mock compensation data - in real app, this would come from caseData
  const compensationRanges = [
    { type: "Economic Damages", range: "$25,000 - $150,000", description: "Medical expenses, lost wages, future earnings", icon: Calculator, color: "blue" },
    { type: "Non-Economic Damages", range: "$50,000 - $300,000", description: "Pain & suffering, emotional distress", icon: Heart, color: "purple" },
    { type: "Punitive Damages", range: "$10,000 - $100,000", description: "Punishment for corporate negligence", icon: Shield, color: "red" },
  ];

  const compensationFactors = [
    { factor: "Severity of Condition", impact: "High", percentage: 85 },
    { factor: "Duration of Exposure", impact: "High", percentage: 75 },
    { factor: "Age at Time of Exposure", impact: "Medium", percentage: 60 },
    { factor: "Medical Documentation", impact: "Critical", percentage: 95 },
    { factor: "Lost Income Potential", impact: "High", percentage: 80 },
  ];

  const settlementExamples = [
    { amount: "$485,000", description: "62-year-old with severe health complications", verified: true },
    { amount: "$275,000", description: "Family affected by contaminated products", verified: true },
    { amount: "$125,000", description: "Individual with documented medical issues", verified: true },
    { amount: "$350,000", description: "Multiple family members affected", verified: true },
  ];

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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-[rgba(23,34,52,0.05)] to-[rgba(23,34,52,0.08)] border-[#d9cfbf] hover:border-[#cab89b] text-primary';
      case 'purple': return 'from-[rgba(194,148,90,0.08)] to-[rgba(194,148,90,0.12)] border-[#d9cfbf] hover:border-[#cab89b] text-primary';
      case 'red': return 'from-[rgba(23,34,52,0.05)] to-[rgba(194,148,90,0.1)] border-[#d9cfbf] hover:border-[#cab89b] text-primary';
      default: return 'from-[rgba(23,34,52,0.05)] to-[rgba(23,34,52,0.08)] border-[#d9cfbf] hover:border-[#cab89b] text-primary';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'text-red-600 bg-red-500/10';
      case 'High': return 'text-orange-600 bg-orange-500/10';
      case 'Medium': return 'text-yellow-600 bg-yellow-500/10';
      default: return 'text-gray-600 bg-gray-500/10';
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fbf7f0] py-16 sm:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[rgba(194,148,90,0.08)] blur-2xl sm:h-96 sm:w-96 sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Floating dollar signs */}
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
            $
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
              <Banknote className="w-4 h-4 mr-2" />
              COMPENSATION DETAILS
            </Badge>

            <h2 className="mb-4 font-serif text-3xl leading-tight text-primary sm:text-4xl md:text-5xl sm:mb-6">
              <span className="text-primary">
                What's Your Case
              </span>
              <br />
              <span className="text-gray-800">Really Worth?</span>
            </h2>

            <motion.div
              className="mx-auto mb-4 h-1 w-16 rounded-full bg-[var(--color-accent)] sm:mb-6 sm:w-24"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {caseData.compensationInfo}
              <span className="font-bold text-[var(--color-accent)]"> Our experienced team fights to maximize your compensation.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Compensation Types */}
              <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500/20 rounded-full p-3 mr-4">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-black text-primary">Types of Compensation Available</h3>
                  </div>

                  <div className="space-y-6">
                    {compensationRanges.map((comp, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <Card className={`border-2 bg-gradient-to-r ${getColorClasses(comp.color)} transition-all duration-300 group-hover:shadow-lg`}>
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-start space-x-4">
                              <div className={`bg-${comp.color}-500/20 rounded-full p-3 flex-shrink-0 group-hover:bg-${comp.color}-500/30 transition-colors`}>
                                <comp.icon className={`w-6 h-6 text-${comp.color}-600`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className={`font-black text-lg text-${comp.color}-700`}>{comp.type}</h4>
                                  <Badge className={`bg-${comp.color}-500/20 text-${comp.color}-700 border-${comp.color}-500/30 font-bold`}>
                                    {comp.range}
                                  </Badge>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                  {comp.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Factors Affecting Compensation */}
              <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-500/20 rounded-full p-3 mr-4">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-black text-primary">Factors That Determine Your Compensation</h3>
                  </div>

                  <div className="space-y-6">
                    {compensationFactors.map((factor, index) => (
                      <motion.div
                        key={index}
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="font-semibold text-gray-700">{factor.factor}</span>
                          </div>
                          <Badge className={`${getImpactColor(factor.impact)} font-bold text-xs px-3 py-1`}>
                            {factor.impact} IMPACT
                          </Badge>
                        </div>
                        <div className="ml-8">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Impact on Settlement</span>
                            <span className="text-sm font-bold text-gray-700">{factor.percentage}%</span>
                          </div>
                          <Progress value={factor.percentage} className="h-2" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Real Settlement Examples */}
              <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500/20 rounded-full p-3 mr-4">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-black text-primary">Recent Settlement Examples</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {settlementExamples.map((settlement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="border border-blue-200 bg-white/80 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4 sm:p-6 text-center">
                            <div className="flex items-center justify-center mb-3">
                              <div className="text-2xl sm:text-3xl font-black text-green-600">
                                {settlement.amount}
                              </div>
                              {settlement.verified && (
                                <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                              )}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {settlement.description}
                            </p>
                            {settlement.verified && (
                              <Badge className="mt-3 bg-green-500/10 text-green-700 border-green-500/30 text-xs">
                                VERIFIED SETTLEMENT
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                    <p className="text-blue-800 text-sm text-center">
                      <AlertCircle className="w-4 h-4 inline mr-2" />
                      Past results do not guarantee future outcomes. Each case is unique and settlements vary based on individual circumstances.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Calculator Card */}
              <Card className="relative overflow-hidden border-none bg-primary text-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
                <CardContent className="p-6 sm:p-8 text-center relative z-10">
                  <div className="bg-primary/20 rounded-full p-4 inline-flex items-center justify-center mb-4">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-3">
                    Free Case Valuation
                  </h3>
                  <p className="text-primary/80 mb-6 text-sm leading-relaxed">
                    Get a professional estimate of what your case could be worth. Our experts will analyze your situation at no cost.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-accent font-black shadow-lg hover:shadow-xl">
                      <Link href="#case-evaluation">
                        <PiggyBank className="mr-2 h-4 w-4" />
                        Get Case Value
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>

                  <p className="text-primary/70 text-xs mt-3">
                    Free estimate • No obligation • Confidential
                  </p>
                </CardContent>
              </Card>

              {/* No Fee Guarantee */}
              <Card className="border border-[#dfd3c4] bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="bg-green-500/20 rounded-full p-4 inline-flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-black text-green-700 text-lg mb-3">
                      No Win, No Fee Guarantee
                    </h4>
                    <p className="text-green-600 text-sm mb-4 leading-relaxed">
                      You pay absolutely nothing unless we successfully recover compensation for you. No upfront costs, no hidden fees.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-green-700 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>$0 upfront costs</span>
                      </div>
                      <div className="flex items-center text-green-700 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>No hidden fees</span>
                      </div>
                      <div className="flex items-center text-green-700 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>Only pay if we win</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Urgency Card */}
              <Card className="border border-[#dfd3c4] bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-red-700">Time = Money</h4>
                  </div>
                  <p className="text-red-600 text-sm mb-4 leading-relaxed">
                    Compensation amounts may decrease over time as settlement funds are distributed. Act now to maximize your payout.
                  </p>
                  <div className="bg-red-100 rounded-lg p-3 text-center">
                    <p className="text-red-800 font-bold text-sm">Early filing = Higher compensation</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-primary mb-4 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Speak with Our Team
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Get personalized compensation estimates from our experienced legal team.
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                    <a href="tel:+15550102020">
                      Call +1 555-010-2020
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="relative overflow-hidden border-none bg-primary text-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
              <CardContent className="p-8 sm:p-12 text-center relative z-10">
                <div className="bg-accent/20 rounded-full p-4 inline-flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black mb-4">
                  <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                    Ready to Discover
                  </span>
                  <br />
                  <span className="text-white">Your Case Value?</span>
                </h3>

                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Don't settle for less than you deserve. Our compensation experts will fight to maximize your settlement.
                  <span className="font-bold text-accent"> Get your free case valuation today.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                      <Link href="#case-evaluation">
                        <Calculator className="mr-3 h-5 w-5" />
                        Calculate My Case Value
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

              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompensationInfo;


