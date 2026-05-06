"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ExternalLink,
  Award,
  Shield,
  Clock,
  Star,
  Users,
  CheckCircle,
  DollarSign,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const floatingDots = [
    { left: 4.6367, top: 16.4036, duration: 6.2, delay: 0.4 },
    { left: 48.515, top: 51.048, duration: 5.4, delay: 0.9 },
    { left: 32.7108, top: 52.9395, duration: 6.8, delay: 0.2 },
    { left: 62.4488, top: 38.256, duration: 5.9, delay: 1.1 },
    { left: 51.8368, top: 7.0099, duration: 7.1, delay: 0.6 },
    { left: 19.076, top: 43.471, duration: 6.5, delay: 0.3 },
    { left: 28.2958, top: 67.1152, duration: 5.7, delay: 1.3 },
    { left: 42.9427, top: 42.033, duration: 6.1, delay: 0.8 },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" }
  ];

  const caseLinks = [
    { label: "Camp Lejeune Water Contamination", href: "/cases/camp-lejeune", hot: true },
    { label: "3M Combat Arms Earplugs", href: "/cases/3m-earplugs", hot: false },
    { label: "Roundup Weed Killer", href: "/cases/roundup", hot: true },
    { label: "CPAP Machine Recall", href: "/cases/cpap", hot: false },
    { label: "NEC Baby Formula", href: "/cases/nec-formula", hot: true },
    { label: "Hernia Mesh Complications", href: "/cases/hernia-mesh", hot: false }
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Case Types", href: "#case-types" },
    { label: "Claim Process", href: "#claim-process" },
    { label: "FAQ", href: "#faq" },
    { label: "Free Case Review", href: "#case-evaluation" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "TCPA Consent", href: "/tcpa-consent" },
    { label: "Privacy Disclaimer", href: "/privacy-disclaimer" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Legal Disclaimer", href: "/disclaimer" },
    { label: "Accessibility", href: "/accessibility" }
  ];

  const trustStats = [

    { icon: Users, label: "10,000+", sublabel: "Clients Helped", color: "text-cyan-300" },
    { icon: Award, label: "98%", sublabel: "Success Rate", color: "text-purple-400" },
    { icon: Clock, label: "24/7", sublabel: "Available", color: "text-accent" }
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
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-primary-foreground relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"
          animate={{ x: [-100, 200] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Geometric Patterns */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[40px] border-white/5" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border-[40px] border-white/5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[20px] border-accent/10" />

        {/* Floating Elements */}
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top CTA Section */}
        <motion.div
          className="py-12 sm:py-16 text-center border-b border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-4 sm:mb-6 px-4 py-2 bg-accent/20 text-accent border-accent/30 font-bold text-sm sm:text-base">
            <Zap className="w-4 h-4 mr-2" />
            FREE CASE REVIEW
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
              Move Your Claim
            </span>
            <br />
            <span className="text-white">Forward Today</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Get clear next steps from a responsive intake team.
            <span className="font-bold text-accent"> Start with a free, confidential review.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                <a href="tel:+15550102020" className="flex items-center justify-center">
                  <Phone className="mr-3 h-5 w-5" />
                  Call +1 555-010-2020
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-3"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto">
                <Link href="#case-evaluation" className="flex items-center justify-center">
                  <CheckCircle className="mr-3 h-5 w-5" />
                  Free Case Review
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Trust Stats */}

        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="py-12 sm:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Company Information */}
            <motion.div className="lg:col-span-4" variants={itemVariants}>
              <div className="flex items-center mb-6">
                <img
                  src="/logo.png"
                  alt="Skye Claim Connect Logo"
                  className="w-auto h-20 sm:h-24"
                />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white mb-4 block">Skye Claim Connect</span>
              <p className="mb-6 text-white/80 leading-relaxed text-sm sm:text-base">
                We're dedicated to helping victims of negligence receive the compensation they deserve. Our experienced legal team handles mass tort and class action cases nationwide with a
                <span className="font-bold text-accent"> 98% success rate.</span>
              </p>

              {/* Awards & Certifications */}
              <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-4 flex items-center text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent" />
                  Intake Advantages
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="flex items-center text-white/80">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-400" />
                    <span>No Upfront Charge</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-cyan-300" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-400" />
                    <span>Expert Team</span>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-black mb-6 flex items-center text-white">
                <Badge variant="outline" className="mr-3 bg-accent/20 text-accent border-accent/30 text-xs px-2 py-1">
                  CONTACT
                </Badge>
                Contact Intake
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="tel:+15550102020" className="flex items-start">
                    <div className="bg-accent/20 rounded-full p-3 mr-4 group-hover:bg-accent/30 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1 text-sm sm:text-base">Call Us Now</p>
                      <p className="text-accent font-black text-lg sm:text-xl hover:text-accent/80 transition-colors">
                        +1 555-010-2020
                      </p>
                      <p className="text-white/60 text-xs sm:text-sm">Available 24/7 for emergencies</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="mailto:support@skyeclaimconnect.com" className="flex items-start">
                    <div className="bg-cyan-400/20 rounded-full p-3 mr-4 group-hover:bg-cyan-400/30 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1 text-sm sm:text-base">Email Us</p>
                      <p className="text-cyan-300 font-medium hover:text-cyan-200 transition-colors break-all text-sm sm:text-base">
                        support@skyeclaimconnect.com
                      </p>
                      <p className="text-white/60 text-xs sm:text-sm">We respond within 24 hours</p>
                    </div>
                  </a>
                </motion.div>

                {/* Emergency Contact Card */}
                <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-red-400 mr-2" />
                    <span className="font-bold text-red-400 text-sm">Emergency? Call Now!</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Don't wait - many legal claims have strict deadlines. Call us immediately for urgent cases.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Case Types */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-black mb-6 text-white">Active Cases</h3>
              <ul className="space-y-3">
                {caseLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                    >
                      <div className="mr-3 w-2 h-2 bg-accent rounded-full group-hover:bg-accent/80 transition-colors"></div>
                      <span className="flex-1">{link.label}</span>
                      {link.hot && (
                        <Badge className="ml-2 bg-red-500/20 text-red-400 border-red-400/30 text-xs px-2 py-0.5">
                          HOT
                        </Badge>
                      )}
                    </Link>
                  </motion.li>
                ))}
                <li className="pt-3 border-t border-white/10">
                  <Link
                    href="/cases"
                    className="text-accent hover:text-accent/80 transition-colors flex items-center font-bold group text-sm sm:text-base"
                  >
                    View All Case Types
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-black mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                    >
                      <div className="mr-3 w-2 h-2 bg-accent rounded-full group-hover:bg-accent/80 transition-colors"></div>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}

                <li className="sm:col-span-2 lg:col-span-1 mt-4 pt-4 border-t border-white/10">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="bg-gradient-to-r from-accent to-yellow-400 hover:from-accent/90 hover:to-yellow-400/90 text-primary font-black w-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="#case-evaluation" className="flex items-center justify-center text-sm sm:text-base">
                        <CheckCircle size={16} className="mr-2" />
                        Request Free Review
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="bg-white/10 mb-6 sm:mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="text-center text-sm text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <p className="mb-4 sm:mb-0">© {currentYear} Skye Claim Connect. All Rights Reserved.</p>

          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link href={link.href} className="hover:text-white transition-colors text-xs sm:text-sm">
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-white/30 hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.div
            className="bg-white/5 rounded-xl p-4 sm:p-6 backdrop-blur-sm max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-accent">Legal Disclaimer:</span> This website is attorney advertising. The information on this website is for general information purposes only.
              Nothing on this site should be taken as legal advice for any individual case or situation.
              This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
              Past results do not guarantee future outcomes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



