"use client";

import { motion } from "framer-motion";
import { CaseType } from "@/types/case";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  FileText,
  Users,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Scale,
  Building2,
  Clock,
  Shield,
  ArrowRight,
  BookOpen,
  Target,
  Gavel
} from "lucide-react";

interface CaseDescriptionProps {
  caseData: CaseType;
}

const CaseDescription = ({ caseData }: CaseDescriptionProps) => {
  // Mock data for case timeline and key facts - in real app, this would come from caseData
  const caseTimeline = [
    { date: "2020-2023", event: "Discovery of widespread issues", status: "completed" },
    { date: "2023-2024", event: "Class action lawsuits filed", status: "completed" },
    { date: "Current", event: "Active litigation & settlements", status: "current" },
    { date: "Ongoing", event: "New claims being accepted", status: "future" }
  ];

  const keyFacts = [
    { icon: Users, label: "Affected Individuals", value: "Thousands nationwide" },
    { icon: Building2, label: "Responsible Parties", value: "Major corporations" },
    { icon: Calendar, label: "Case Status", value: "Active litigation" },
    { icon: TrendingUp, label: "Settlement Range", value: "$10K - $500K+" }
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

  return (
    <section className="relative overflow-hidden bg-[#fbf7f0] py-16 sm:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
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
              <BookOpen className="w-4 h-4 mr-2" />
              CASE OVERVIEW
            </Badge>

            <h2 className="mb-4 font-serif text-3xl leading-tight text-primary sm:text-4xl md:text-5xl sm:mb-6">
              <span className="text-primary">
                Understanding Your
              </span>
              <br />
              <span className="text-gray-800">{caseData.title} Case</span>
            </h2>

            <motion.div
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 mx-auto mb-4 sm:mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get the facts about your case, understand your rights, and learn how we can help you
              <span className="font-bold text-primary"> secure the compensation you deserve.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              {/* Case Description Card */}
              <Card className="mb-8 border-none shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl text-primary">Case Overview</h3>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="text-base sm:text-lg mb-6">
                      {caseData.fullDescription}
                    </p>

                    {/* Key Points */}
                    <div className="mb-6 border border-[#dfd3c4] bg-[#f8f1e6] p-6">
                      <h4 className="font-bold text-primary mb-4 flex items-center text-lg">
                        <Target className="w-5 h-5 mr-2" />
                        Key Points to Know
                      </h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Multiple parties may be held responsible for damages</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Compensation available for medical expenses, lost wages, and pain & suffering</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>No upfront costs - we only get paid if you win your case</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Time limits apply - don't wait to file your claim</span>
                        </li>
                      </ul>
                    </div>

                    {/* Legal Process Overview */}
                    <div className="border border-[#dfd3c4] bg-white p-6">
                      <h4 className="font-bold text-primary mb-4 flex items-center text-lg">
                        <Gavel className="w-5 h-5 mr-2" />
                        How We Handle Your Case
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                            <span className="text-primary font-bold text-sm">1</span>
                          </div>
                          <div>
                            <div className="font-semibold text-primary text-sm">Free Consultation</div>
                            <div className="text-gray-600 text-sm">Review your case details</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                            <span className="text-primary font-bold text-sm">2</span>
                          </div>
                          <div>
                            <div className="font-semibold text-primary text-sm">Investigation</div>
                            <div className="text-gray-600 text-sm">Gather evidence & documentation</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                            <span className="text-primary font-bold text-sm">3</span>
                          </div>
                          <div>
                            <div className="font-semibold text-primary text-sm">Legal Action</div>
                            <div className="text-gray-600 text-sm">File claims & negotiate</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                            <span className="text-primary font-bold text-sm">4</span>
                          </div>
                          <div>
                            <div className="font-semibold text-primary text-sm">Resolution</div>
                            <div className="text-gray-600 text-sm">Secure your compensation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Key Facts Card */}
              <Card className="relative overflow-hidden border-none bg-primary text-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl font-black">Claim Snapshot</h3>
                  </div>

                  <div className="space-y-4">
                    {keyFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <fact.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm text-white/90">{fact.label}</div>
                          <div className="text-accent font-bold">{fact.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Card */}
              <Card className="border border-[#dfd3c4] bg-[#f8f1e6] shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/20 rounded-full p-4 inline-flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-3">
                    Free Case Review
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Get a professional evaluation of your case with no obligation. Our experienced legal team will assess your situation and explain your options.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild className="w-full bg-gradient-to-r from-accent to-yellow-400 hover:from-accent/90 hover:to-yellow-400/90 text-primary font-black shadow-lg hover:shadow-xl">
                      <Link href="#case-evaluation">
                        Start Free Review
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>

                  <p className="text-gray-500 text-xs mt-3">
                    Takes less than 2 minutes • 100% confidential
                  </p>
                </CardContent>
              </Card>

              {/* Urgency Card */}
              <Card className="border border-[#dfd3c4] bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-red-700">Time is Critical</h4>
                  </div>
                  <p className="text-red-600 text-sm mb-4 leading-relaxed">
                    Legal deadlines apply to {caseData.title} cases. Don't risk losing your right to compensation.
                  </p>
                  <div className="bg-red-100 rounded-lg p-3 text-center">
                    <p className="text-red-800 font-bold text-sm">Act now to protect your rights</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-primary mb-4">Questions About Your Case?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Speak directly with our legal team for personalized guidance.
                  </p>
                  <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary/10">
                    <a href="tel:13023070025" className="flex items-center justify-center">
                      Call 13023070025
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseDescription;


