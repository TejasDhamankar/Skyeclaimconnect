"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Heart, Leaf, Shield, Clock, CheckCircle, Star, TrendingUp, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllCaseTypes } from "@/lib/utils";
import { CaseType } from "@/types/case";

const CaseTypesList = () => {
  const caseTypes = getAllCaseTypes();
  const [activeTab, setActiveTab] = useState("all");

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Enhanced case categories with icons and descriptions
  const caseCategories = {
    priority: {
      cases: caseTypes.filter(c =>
        [
          "depo-provera",
          "roblox-addiction",
          "rideshare",
          "talcum-powder",
          "ozempic",
          "motor-vehicle-accident",
          "wtc-exposure",
        ].includes(c.slug)
      ),
      icon: Star,
      title: "Featured Claims",
      description: "Priority cases for Skye Claim Connect clients",
      color: "from-amber-600 to-orange-700"
    },
    all: {
      cases: caseTypes,
      icon: Scale,
      title: "All Cases",
      description: "Complete range of active litigation",
      color: "from-slate-700 to-cyan-700"
    },
    medical: {
      cases: caseTypes.filter(c => ["cpap", "hernia-mesh", "nec-formula", "talcum-powder", "exactech"].includes(c.slug)),
      icon: Heart,
      title: "Medical & Pharmaceutical",
      description: "Defective medical devices & dangerous drugs",
      color: "from-teal-700 to-cyan-700"
    },
    environmental: {
      cases: caseTypes.filter(c => ["camp-lejeune", "roundup", "paraquat", "pfas"].includes(c.slug)),
      icon: Leaf,
      title: "Environmental",
      description: "Toxic exposure & environmental hazards",
      color: "from-cyan-700 to-teal-700"
    },
    military: {
      cases: caseTypes.filter(c => ["3m-earplugs", "camp-lejeune"].includes(c.slug)),
      icon: Shield,
      title: "Military & Veterans",
      description: "Cases affecting our service members",
      color: "from-slate-700 to-slate-900"
    }
  };

  const CaseCard = ({ caseType, index }: { caseType: CaseType; index: number }) => (
    <motion.div
      key={caseType.id}
      variants={itemVariants}
      className="h-full"
    >
      <Link href={`/cases/${caseType.slug}`} className="block h-full group">
        <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
          {/* Image Section */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={caseType.imageUrl}
              alt={caseType.title}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Static Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Active Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent/90 text-primary font-bold shadow-lg backdrop-blur-sm">
                <TrendingUp className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary/90">
              <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-accent" />
                <p className="font-bold text-lg mb-2">Review Eligibility</p>
                <p className="text-sm opacity-90">Check claim-fit criteria</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <CardHeader className="pt-6 pb-3">
            <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/90 transition-colors leading-tight">
              {caseType.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-0 pb-4">
            <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
              {caseType.shortDescription}
            </CardDescription>

            {/* Key Features */}
            <div className="flex items-center mt-4 space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-accent" />
                <span>Free Consult</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-500" />
                <span>Risk-Free Intake</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-0 pb-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center text-primary text-sm font-bold group-hover:text-accent transition-colors">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>

            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );

  return (
    <section id="case-types" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/10 to-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30 bg-primary/5 font-bold backdrop-blur-sm">
            ACTIVE LITIGATION
          </Badge>

          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-cyan-700 to-teal-700 bg-clip-text text-transparent">
              Mass Tort &
            </span>
            <br />
            <span className="text-gray-800">Class Action Cases</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 mx-auto mb-6 rounded-full" />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We support high-priority injury and exposure claims with structured legal intake.
            <span className="font-bold text-primary"> If your experience matches these criteria, your claim may qualify.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mt-8">

            <div className="flex items-center text-gray-600">
              <Shield className="w-5 h-5 text-cyan-700 mr-2" />
              <span className="font-medium">No Fees</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 text-amber-600 mr-2" />
              <span className="font-medium">Fast Case Screening</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop view - Enhanced Tabbed Interface */}
        <div className="hidden md:block">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            {/* Enhanced Tab Navigation */}
            <div className="flex justify-center mb-12">
              <TabsList className="grid h-full grid-cols-5 gap-2 w-full max-w-5xl bg-white/50 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/20">
                {Object.entries(caseCategories).map(([key, category]) => {
                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex items-center space-x-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-800 data-[state=active]:to-cyan-800 data-[state=active]:text-white data-[state=active]:shadow-lg"
                    >
                      <span className="hidden sm:inline">{category.title}</span>
                      <span className="sm:hidden">{key === 'priority' ? 'Top' : key === 'all' ? 'All' : key === 'medical' ? 'Medical' : key === 'environmental' ? 'Env.' : 'Military'}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tab Content */}
            {Object.entries(caseCategories).map(([category, data]) => (
              <TabsContent key={category} value={category} className="mt-0">
                {activeTab === category && (
                  <div className="mb-8">
                    {/* Category Description */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${data.color} text-white font-bold shadow-lg mb-4`}>
                        <data.icon className="w-5 h-5 mr-2" />
                        {data.description}
                      </div>
                    </div>

                    {/* Cases Grid */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      key={category} // This ensures re-animation when tab changes
                    >
                      {data.cases.map((caseType, index) => (
                        <CaseCard key={`${category}-${caseType.id}`} caseType={caseType} index={index} />
                      ))}
                    </motion.div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile view - Enhanced Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {caseTypes.map((caseType, index) => (
                <CarouselItem key={caseType.id} className="pl-4">
                  <CaseCard caseType={caseType} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white/90 hover:bg-white shadow-lg" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-white/90 hover:bg-white shadow-lg" />
            </div>
          </Carousel>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Filing Windows Can Be Limited
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Many cases have strict deadlines. Get your free consultation today and learn about your legal options.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl border-2 border-accent/30 transition-all duration-300 hover:scale-105">
                <Link href="/cases" className="flex items-center">
                  Explore All Case Types
                  <ExternalLink size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300">
                <a href="tel:+15550102020" className="flex items-center">
                  <Shield className="mr-3 h-5 w-5" />
                  Call +1 555-010-2020
                </a>
              </Button>
            </div>

            {/* Additional Trust Elements */}
            <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="font-bold text-xl text-accent">24/7</div>
                <div className="text-sm opacity-80">Available</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl text-accent">$0</div>
                <div className="text-sm opacity-80">Upfront Fees</div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseTypesList;


