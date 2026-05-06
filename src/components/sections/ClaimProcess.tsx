"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  UserCheck,
  FileText,
  Scale,
  Coins,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Users
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ClaimProcess = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Free Case Review",
      shortTitle: "Review",
      description: "Complete our secure form or call us for a no-obligation evaluation of your potential claim by our legal experts.",
      duration: "5 Minutes",
      features: ["No obligations", "100% confidential", "Expert evaluation"]
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Eligibility Verification",
      shortTitle: "Verify",
      description: "Our specialized team analyzes your information to determine qualification and potential compensation value.",
      duration: "24-48 Hours",
      features: ["Detailed analysis", "Compensation estimate", "Risk assessment"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Documentation & Evidence",
      shortTitle: "Document",
      description: "We assist in collecting relevant medical records, exposure documentation, and evidence to strengthen your case.",
      duration: "1-2 Weeks",
      features: ["Medical records", "Expert testimony", "Evidence gathering"]
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Legal Representation",
      shortTitle: "Represent",
      description: "Our experienced attorneys file your claim and strategically advocate for maximum compensation on your behalf.",
      duration: "Ongoing",
      features: ["Expert attorneys", "Strategic advocacy", "Maximum compensation"]
    },
    {
      icon: <Coins className="h-8 w-8" />,
      title: "Compensation",
      shortTitle: "Receive",
      description: "Receive the settlement you deserve for medical expenses, lost income, suffering, and other damages.",
      duration: "Upon Settlement",
      features: ["Medical expenses", "Lost income", "Pain & suffering"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="claim-process" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/10 to-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30 bg-primary/5 font-bold backdrop-blur-sm">
            HOW IT WORKS
          </Badge>

          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-cyan-700 to-teal-700 bg-clip-text text-transparent">
              Simple. Fast.
            </span>
            <br />
            <span className="text-gray-800">Results-Driven.</span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <p className="text-xl text-gray-600 leading-relaxed">
            We've streamlined our legal process to minimize stress while
            <span className="font-bold text-primary"> maximizing your compensation.</span>
            <br />
            <span className="text-lg opacity-90">No upfront fees. No hidden costs. Just results.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="flex items-center text-gray-600">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span className="font-medium">Zero Upfront Cost</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 text-cyan-700 mr-2" />
              <span className="font-medium">Rapid Eligibility Check</span>
            </div>

          </div>
        </motion.div>

        {/* Enhanced Process Steps */}
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20" />

            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-800 to-cyan-800 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Card */}
                  <Card className="mt-48 border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:bg-white group-hover:scale-105">
                    <CardHeader className="text-center pb-4">
                      <Badge className="mx-auto mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                        {step.duration}
                      </Badge>
                      <CardTitle className="text-lg font-bold text-primary group-hover:text-cyan-700 transition-colors">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </CardDescription>

                      {/* Features List */}
                      <div className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-32 right-0 transform translate-x-8 -translate-y-1/2 text-primary/40"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 to-cyan-800" />

                  <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-slate-800 to-cyan-800 rounded-full p-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xs shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2 bg-primary/10 text-primary">
                        {step.duration}
                      </Badge>
                      <CardTitle className="text-xl font-bold text-primary group-hover:text-cyan-700 transition-colors">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </CardDescription>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center bg-accent/20 rounded-full px-6 py-2 mb-6"
              >
                <Star className="w-5 h-5 text-accent mr-2" />
                <span className="font-bold text-accent">Ready For A Case Review?</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Your Case Review is 100% Free
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Don't wait - many cases have strict deadlines. Get your free consultation today and learn about your legal options.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl border-2 border-accent/30">
                    <Link href="#case-evaluation" className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5" />
                      Start Your Free Case Review
                      <motion.div
                        className="ml-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>

                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-8 py-6 text-lg backdrop-blur-sm">
                  <a href="tel:+15550102020" className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                    Call +1 555-010-2020
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="font-black text-2xl text-accent">$0</div>
                  <div className="text-sm opacity-80">Upfront Costs</div>
                </div>
                <div className="text-center">
                  <div className="font-black text-2xl text-accent">24/7</div>
                  <div className="text-sm opacity-80">Available</div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClaimProcess;


