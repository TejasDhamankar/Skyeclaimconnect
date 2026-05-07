"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Phone,
  ArrowRight,
  Share2,
  Clock,
  Shield,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  Zap,
  AlertCircle,
  TrendingUp,
  Star,
  Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CaseType } from "@/types/case";

interface CaseHeroProps {
  caseData: CaseType;
}

const CaseHero = ({ caseData }: CaseHeroProps) => {
  // Function to handle smooth scrolling to case evaluation
  const scrollToCaseEvaluation = (e: React.MouseEvent) => {
    e.preventDefault();
    const caseEvaluationElement = document.getElementById('case-evaluation');
    if (caseEvaluationElement) {
      caseEvaluationElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Mock data for case-specific stats - in real app, this would come from the caseData
  const caseStats = {
    potentialCompensation: "$10,000 - $500,000+",
    casesWon: "2,500+",
    avgSettlement: "$125,000",
    timeLimit: caseData.featured ? "LIMITED TIME" : "ACTIVE"
  };

  return (
    <section className="pt-36  pb-16 sm:pb-20 relative overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={caseData.imageUrl}
          alt={caseData.title}
          fill
          priority
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,34,52,0.95)_0%,rgba(23,34,52,0.9)_42%,rgba(23,34,52,0.72)_68%,rgba(23,34,52,0.52)_100%)]" />

        {/* Animated Overlay Pattern */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
          animate={{ x: [-100, 200] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
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
        <div className="max-w-6xl mx-auto text-white">
          {/* Enhanced Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb className="mb-6 text-white/70">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="hover:text-accent transition-colors">
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="hover:text-accent transition-colors">
                    <Link href="/cases">Legal Cases</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-accent font-medium">
                    {caseData.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Enhanced Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <Button
              asChild
              variant="ghost"
              className="text-accent hover:text-accent/80 hover:bg-white/10 -ml-3 group backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300"
            >
              <Link href="/cases" className="flex items-center">
                <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">Back to All Cases</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Status Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2 sm:gap-3 mb-6"
              >
                <Badge className="border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm font-bold text-white backdrop-blur-sm">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  ACTIVE LITIGATION
                </Badge>

                {caseData.featured && (
                  <Badge className="border border-[rgba(194,148,90,0.4)] bg-[rgba(194,148,90,0.14)] px-3 py-1 text-xs sm:text-sm font-bold text-[var(--color-accent)] backdrop-blur-sm animate-pulse">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                    URGENT DEADLINES
                  </Badge>
                )}

                <Badge className="bg-accent/20 text-accent border-accent/30 px-3 py-1 text-xs sm:text-sm font-bold backdrop-blur-sm">
                  NO WIN, NO FEE
                </Badge>
              </motion.div>

              {/* Case Title */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                  {caseData.title}
                </span>
                <br />
                <span className="text-white text-2xl sm:text-3xl md:text-4xl">Claims & Compensation</span>
              </motion.h1>

              {/* Enhanced Separator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-6"
              >
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 rounded-full" />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
                  {caseData.shortDescription}
                  <span className="font-bold text-accent"> Get the compensation you deserve.</span>
                </p>

                {/* Urgency Notice */}


                {/* Main CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-accent to-yellow-400 hover:from-accent/90 hover:to-yellow-400/90 text-primary font-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl group transition-all duration-300"
                      onClick={scrollToCaseEvaluation}
                    >
                      <CheckCircle className="mr-2 sm:mr-3 h-5 w-5" />
                      <span className="hidden sm:inline">Check Your Eligibility</span>
                      <span className="sm:hidden">Check Eligibility</span>
                      <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-white/30 px-6 sm:px-8 py-4 sm:py-6 font-bold text-base sm:text-lg text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                    >
                      <a href="tel:13023070025" className="flex items-center justify-center">
                        <Phone size={20} className="mr-2 sm:mr-3" />
                        <span className="sm:inline">Call 13023070025</span>
                        <span className="sm:hidden">Call Now</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Trust Indicators */}

              </motion.div>
            </div>

            {/* Stats Sidebar */}

          </div>

          {/* Share Button - Mobile Friendly */}
          <motion.div
            className="fixed bottom-6 right-6 sm:hidden z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
            >
              <Share2 size={16} />
              <span className="sr-only">Share case</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseHero;


