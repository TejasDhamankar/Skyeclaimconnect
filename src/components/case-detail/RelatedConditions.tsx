"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Heart,
  Brain,
  Activity,
  Shield,
  Phone,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  FileText,
  Users,
  Clock,
  Zap
} from "lucide-react";
import { CaseType } from "@/types/case";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RelatedConditionsProps {
  caseData: CaseType;
}

const RelatedConditions = ({ caseData }: RelatedConditionsProps) => {
  // Categorize conditions by severity/type for better organization
  const categorizeConditions = (conditions: string[]) => {
    // This is a simplified categorization - in a real app, this would be more sophisticated
    const severe = conditions.filter(condition =>
      condition.toLowerCase().includes('cancer') ||
      condition.toLowerCase().includes('death') ||
      condition.toLowerCase().includes('failure')
    );

    const moderate = conditions.filter(condition =>
      !severe.includes(condition) && (
        condition.toLowerCase().includes('disease') ||
        condition.toLowerCase().includes('disorder') ||
        condition.toLowerCase().includes('syndrome')
      )
    );

    const mild = conditions.filter(condition =>
      !severe.includes(condition) && !moderate.includes(condition)
    );

    return { severe, moderate, mild };
  };

  const { severe, moderate, mild } = categorizeConditions(caseData.relatedConditions);

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

  const conditionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const getConditionIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('heart') || conditionLower.includes('cardiac')) return Heart;
    if (conditionLower.includes('brain') || conditionLower.includes('neuro')) return Brain;
    if (conditionLower.includes('lung') || conditionLower.includes('respiratory')) return Activity;
    return Stethoscope;
  };

  const getConditionColor = (severity: 'severe' | 'moderate' | 'mild') => {
    switch (severity) {
      case 'severe': return 'from-red-500/10 to-red-600/10 border-red-200 hover:border-red-300';
      case 'moderate': return 'from-orange-500/10 to-yellow-500/10 border-orange-200 hover:border-orange-300';
      case 'mild': return 'from-blue-500/10 to-indigo-500/10 border-blue-200 hover:border-blue-300';
    }
  };

  const getSeverityBadge = (severity: 'severe' | 'moderate' | 'mild') => {
    switch (severity) {
      case 'severe':
        return <Badge className="bg-red-500/20 text-red-700 border-red-500/30 text-xs">HIGH PRIORITY</Badge>;
      case 'moderate':
        return <Badge className="bg-orange-500/20 text-orange-700 border-orange-500/30 text-xs">MODERATE</Badge>;
      case 'mild':
        return <Badge className="bg-blue-500/20 text-blue-700 border-blue-500/30 text-xs">MILD</Badge>;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Medical cross pattern */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/5 text-4xl sm:text-6xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            +
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
            <Badge className="mb-4 sm:mb-6 px-4 py-2 bg-red-500/10 text-red-700 border-red-500/30 font-bold text-sm sm:text-base">
              <Stethoscope className="w-4 h-4 mr-2" />
              HEALTH CONDITIONS
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Related Health
              </span>
              <br />
              <span className="text-gray-800">Conditions & Symptoms</span>
            </h2>

            <motion.div
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mb-4 sm:mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The following health conditions have been linked to {caseData.title.toLowerCase()}.
              <span className="font-bold text-red-600"> If you've been diagnosed with any of these conditions, you may be eligible for significant compensation.</span>
            </p>
          </motion.div>

          {/* Important Health Alert */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/20 rounded-full p-3 flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-red-700 mb-3">
                      Critical Health Information
                    </h3>
                    <p className="text-red-600 mb-4 leading-relaxed text-sm sm:text-base">
                      These medical conditions have been scientifically linked to {caseData.title.toLowerCase()}.
                      Even if your diagnosis came years after exposure, you may still be eligible for compensation.
                      <span className="font-bold"> Don't wait - legal deadlines apply.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                        <Link href="#case-evaluation">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Check My Diagnosis
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="border-2 border-red-300 text-red-700 hover:bg-red-50">
                        <a href="tel:+15550102020">
                          <Phone className="w-4 h-4 mr-2" />
                          Call +1 555-010-2020
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Conditions by Severity */}
          <div className="space-y-12">
            {/* Severe Conditions */}
            {severe.length > 0 && (
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="bg-red-500/20 rounded-full p-3 mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-red-700">
                      Severe Conditions
                    </h3>
                    <p className="text-red-600 text-sm">
                      Life-threatening conditions with highest compensation potential
                    </p>
                    {getSeverityBadge('severe')}

                  </div>
                </div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {severe.map((condition, index) => {
                    const IconComponent = getConditionIcon(condition);
                    return (
                      <motion.div
                        key={index}
                        variants={conditionVariants}
                        className="group"
                        whileHover={{ y: -5 }}
                      >
                        <Card className={`border-2 bg-gradient-to-br ${getConditionColor('severe')} transition-all duration-300 group-hover:shadow-lg`}>
                          <CardContent className="p-4 sm:p-6 text-center">
                            <div className="bg-red-500/20 rounded-full p-3 inline-flex items-center justify-center mb-3 group-hover:bg-red-500/30 transition-colors">
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                            </div>
                            <h4 className="font-bold text-red-700 text-sm sm:text-base leading-tight">
                              {condition}
                            </h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {/* Moderate Conditions */}
            {moderate.length > 0 && (
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500/20 rounded-full p-3 mr-4">
                    <Activity className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-orange-700">
                      Moderate Conditions
                    </h3>
                    <p className="text-orange-600 text-sm">
                      Chronic conditions affecting quality of life
                    </p>
                    {getSeverityBadge('moderate')}

                  </div>
                </div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {moderate.map((condition, index) => {
                    const IconComponent = getConditionIcon(condition);
                    return (
                      <motion.div
                        key={index}
                        variants={conditionVariants}
                        className="group"
                        whileHover={{ y: -3 }}
                      >
                        <Card className={`border-2 bg-gradient-to-br ${getConditionColor('moderate')} transition-all duration-300 group-hover:shadow-lg`}>
                          <CardContent className="p-4 sm:p-6 text-center">
                            <div className="bg-orange-500/20 rounded-full p-3 inline-flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors">
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                            </div>
                            <h4 className="font-bold text-orange-700 text-sm sm:text-base leading-tight">
                              {condition}
                            </h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {/* Mild Conditions */}
            {mild.length > 0 && (
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500/20 rounded-full p-3 mr-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-blue-700">
                      Other Related Conditions
                    </h3>
                    <p className="text-blue-600 text-sm">
                      Additional symptoms and conditions
                    </p>
                    {getSeverityBadge('mild')}

                  </div>
                </div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {mild.map((condition, index) => (
                    <motion.div
                      key={index}
                      variants={conditionVariants}
                      className="group"
                      whileHover={{ y: -2 }}
                    >
                      <Card className={`border bg-gradient-to-br ${getConditionColor('mild')} transition-all duration-300 group-hover:shadow-md`}>
                        <CardContent className="p-3 sm:p-4 text-center">
                          <span className="text-blue-700 font-medium text-xs sm:text-sm leading-tight">
                            {condition}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Action Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
              <CardContent className="p-8 sm:p-12 text-center relative z-10">
                <div className="bg-accent/20 rounded-full p-4 inline-flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black mb-4">
                  <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                    Diagnosed with Any
                  </span>
                  <br />
                  <span className="text-white">of These Conditions?</span>
                </h3>

                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  You may be entitled to significant compensation. Our medical experts will review your diagnosis and determine your eligibility.
                  <span className="font-bold text-accent"> Get your free case evaluation now.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                      <Link href="#case-evaluation">
                        <Zap className="mr-3 h-5 w-5" />
                        Get Medical Review
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
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-400 mr-2" />
                    <span>Medical Experts</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-accent mr-2" />
                    <span>Free Consultation</span>
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

export default RelatedConditions;


