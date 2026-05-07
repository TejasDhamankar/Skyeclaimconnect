"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle, Users, Award, Shield, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "California",
      case: "Camp Lejeune Water Contamination",
      quote: "After years of health problems, I finally got the justice I deserved. The legal team was professional, caring, and fought tirelessly for my case. They made a difficult process much easier to navigate.",
      rating: 5,
      verified: true,
      outcome: "Successful Settlement"
    },
    {
      id: 2,
      name: "Robert K.",
      location: "Texas",
      case: "3M Combat Arms Earplugs",
      quote: "As a veteran dealing with hearing loss, I thought I had no options. This firm proved me wrong. They understood my situation and secured compensation that will help with my ongoing medical needs.",
      rating: 5,
      verified: true,
      outcome: "Maximum Compensation"
    },
    {
      id: 3,
      name: "Maria L.",
      location: "Florida",
      case: "Roundup Weed Killer",
      quote: "When I was diagnosed with cancer, I never imagined it could be linked to products I used regularly. The legal team connected the dots and helped me understand my rights. I'm grateful for their expertise.",
      rating: 5,
      verified: true,
      outcome: "Life-Changing Result"
    },
    {
      id: 4,
      name: "James P.",
      location: "New York",
      case: "CPAP Machine Recall",
      quote: "The attorneys were incredibly knowledgeable about my case type. They explained everything clearly and kept me informed throughout the entire process. I couldn't have asked for better representation.",
      rating: 5,
      verified: true,
      outcome: "Full Compensation"
    },
    {
      id: 5,
      name: "Jennifer W.",
      location: "Illinois",
      case: "NEC Baby Formula",
      quote: "During the most difficult time in our family's life, this legal team provided hope and results. They fought for our child's future and secured the resources needed for ongoing care.",
      rating: 5,
      verified: true,
      outcome: "Substantial Award"
    },
    {
      id: 6,
      name: "Michael D.",
      location: "Georgia",
      case: "Hernia Mesh Complications",
      quote: "I suffered for years with complications from a defective medical device. This firm not only secured compensation but also helped bring attention to the dangers others were facing.",
      rating: 5,
      verified: true,
      outcome: "Significant Recovery"
    }
  ];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />

        {/* Floating Quote Marks */}
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
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            "
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={itemVariants}
          >
            <Badge variant="outline" className="mb-4 sm:mb-6 px-4 py-2 text-primary border-primary/30 bg-primary/5 font-bold backdrop-blur-sm">
              <Lightbulb className="w-4 h-4 mr-2" />
              CLIENT SUCCESS STORIES
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-primary mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Real Clients.
              </span>
              <br />
              <span className="text-gray-800">Real Results.</span>
            </h2>

            <motion.div
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 mx-auto mb-4 sm:mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from real clients who received the justice and
              <span className="font-bold text-primary"> compensation they deserved.</span>
            </p>
          </motion.div>

          {/* Success Statistics */}

          {/* Main Testimonial Carousel */}
          <motion.div variants={itemVariants} className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none shadow-2xl bg-gradient-to-br from-white via-white to-primary/5 overflow-hidden">
                    <CardContent className="p-8 sm:p-12 md:p-16">
                      <div className="text-center">
                        {/* Quote Icon */}
                        <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full p-4 sm:p-6 inline-flex items-center justify-center mb-6 sm:mb-8">
                          <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                        </div>

                        {/* Star Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Quote */}
                        <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto italic">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="mb-6 sm:mb-8">
                          <div className="flex items-center justify-center space-x-3 mb-4">
                            <h4 className="text-xl sm:text-2xl font-black text-primary">
                              {testimonials[currentIndex].name}
                            </h4>
                            {testimonials[currentIndex].verified && (
                              <Badge className="bg-green-500/10 text-green-700 border-green-500/30">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified Client
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{testimonials[currentIndex].location}</p>
                          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
                            {testimonials[currentIndex].case}
                          </Badge>
                        </div>

                        {/* Outcome */}
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-bold text-green-700">
                            {testimonials[currentIndex].outcome}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary/80" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 sm:p-4 transition-all duration-300 hover:scale-110 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary/80" />
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Testimonial Grid - Additional Reviews */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-black text-primary text-center mb-8 sm:mb-12">
              More Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-none shadow-lg bg-white/80 backdrop-blur-sm group-hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      {/* Star Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 mb-6 italic leading-relaxed line-clamp-4">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-primary">{testimonial.name}</h4>
                          {testimonial.verified && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                        <Badge variant="outline" className="text-xs text-primary border-primary/30 bg-primary/5">
                          {testimonial.case}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 sm:mt-16"
          >
            <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
              <CardContent className="p-8 sm:p-12 relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                    Ready to Be Our
                  </span>
                  <br />
                  <span className="text-white">Next Success Story?</span>
                </h3>

                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join thousands of satisfied clients who received the justice they deserved.
                  <span className="font-bold text-accent"> Your free consultation is just one click away.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                      <Link href="#case-evaluation">
                        Start My Free Case Review
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-8 py-6 text-lg backdrop-blur-sm w-full sm:w-auto">
                      <a href="tel:13023070025">Call 13023070025</a>
                    </Button>
                  </motion.div>
                </div>

                <p className="text-white/70 text-sm mt-6">
                  Free consultation • No obligation • Available 24/7
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;


