"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Phone, CheckCircle, Shield, Clock, Users, DollarSign, TrendingUp, Star, Award } from "lucide-react";

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const controls = useAnimation();



  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen pb-32 flex items-center justify-center overflow- ">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/legal-background.jpg"
          alt="Legal background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Multiple overlay layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-cyan-950/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-amber-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-300/10 rounded-full blur-2xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="border-accent/50 bg-accent/10 text-accent px-6 py-2 mb-8 font-bold text-sm backdrop-blur-sm hover:bg-accent/20 transition-all duration-300"
            >
              <Shield className="w-4 h-4 mr-2" />
              PRIVATE CLAIM SCREENING
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Build A
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
                Strong Claim
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>
          </motion.div>

          {/* Animated Separator */}
          <motion.div
            className="mx-auto w-32 mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Skye Claim Connect connects qualified claimants with legal teams through a fast, secure, and client-first intake experience.
            <span className="block mt-3 text-base md:text-lg text-gray-200">
              Depo Provera | Roblox | Rideshare | Talc | Ozempic | MVA | WTC
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-accent via-yellow-400 to-accent hover:from-accent/90 hover:via-yellow-400/90 hover:to-accent/90 text-primary font-black px-8 py-6 text-lg shadow-2xl hover:shadow-accent/25 border-2 border-accent/30 group relative overflow-hidden"
              >
                <Link href="#case-evaluation" className="flex items-center relative z-10">
                  <CheckCircle className="mr-3 h-5 w-5" />
                  Check My Claim Eligibility
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: [-100, 300],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-8 py-6 text-lg backdrop-blur-sm shadow-xl group"
              >
                <a href="tel:+15550102020" className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                  Call +1 555-010-2020
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          {/* <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12"
            variants={itemVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-3 ${stat.color} group-hover:bg-white/20 transition-all duration-300`}
                    animate={currentStat === index ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0],
                    } : {}}
                    transition={{ duration: 1 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <motion.p
                    className="text-2xl md:text-3xl font-black text-white mb-1"
                    animate={currentStat === index ? {
                      color: ['#ffffff', '#ffd700', '#ffffff'],
                    } : {}}
                    transition={{ duration: 1 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {stat.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div> */}

          {/* Social Proof */}
          <motion.div
            className="flex items-center justify-center space-x-8 text-gray-300"
            variants={itemVariants}
          >



            <motion.div
              className="hidden md:flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Private & Encrypted Intake</span>
            </motion.div>
          </motion.div>

          {/* Floating Call-to-Action */}
          <motion.div
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div
              className="bg-gradient-to-r from-accent to-yellow-400 text-primary px-6 py-3 rounded-full font-bold text-sm shadow-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="#case-evaluation" className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Talk With Intake Team
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

