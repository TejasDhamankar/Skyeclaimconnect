"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight, Clock, Award, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { getAllCaseTypes } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const caseTypes = getAllCaseTypes();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Group case types for better organization
  const groupedCaseTypes = () => {
    const popularCases = caseTypes.slice(0, 4);
    const medicalCases = caseTypes.filter(c =>
      c.title.includes("CPAP") ||
      c.title.includes("Hernia") ||
      c.title.includes("Exactech") ||
      c.title.includes("NEC")
    );
    const environmentalCases = caseTypes.filter(c =>
      c.title.includes("Camp Lejeune") ||
      c.title.includes("Roundup") ||
      c.title.includes("PFAS") ||
      c.title.includes("Paraquat")
    );

    return { popularCases, medicalCases, environmentalCases };
  };

  const { popularCases, medicalCases, environmentalCases } = groupedCaseTypes();

  return (
    <div className="fixed w-full z-50">
      {/* Trust Bar */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            className="bg-gradient-to-r from-cyan-700 to-teal-600 text-white py-2.5 relative overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center space-x-6 text-sm font-medium">
                {/* <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>No Fees Unless We Win</span>
                </div> */}
                {/* <div className="hidden sm:flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>$500M+ Recovered</span>
                </div> */}
                <div className="hidden md:flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Confidential Intake Available 24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        className={cn(
          "w-full transition-all duration-300 ease-out border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-gray-200/50"
            : "bg-transparent border-transparent",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-22">
            {/* Logo */}
            <motion.div
              className="flex items-center flex-shrink-0 min-w-[250px] lg:min-w-[290px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-2 lg:space-x-2.5 group">
                <motion.img
                  alt="Skye Claim Connect Logo"
                  src='/logo.png'
                  className="w-auto h-12 lg:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="hidden sm:block">
                  <div className={cn(
                    "font-bold text-lg lg:text-xl leading-none transition-colors duration-300",
                    scrolled ? "text-primary" : "text-white"
                  )}>
                    Skye Claim Connect
                  </div>

                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "font-semibold transition-all duration-300",
                        scrolled ? "text-primary hover:text-primary/80" : "text-white hover:text-white/90"
                      )}
                    >
                      Case Types
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-3 gap-0 w-[900px] p-0 overflow-hidden rounded-lg">
                        {/* Popular Cases */}
                        <div className="px-6 py-6 bg-gradient-to-br from-cyan-50 to-teal-50 border-r border-gray-200">
                          <h4 className="font-bold text-primary mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-yellow-500" />
                            Most Popular
                          </h4>
                          <ul className="space-y-3">
                            {popularCases.map((caseType) => (
                              <li key={caseType.id}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/cases/${caseType.slug}`}
                                    className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/80 hover:shadow-sm group"
                                  >
                                    <div className="text-sm font-semibold text-primary group-hover:text-cyan-700 transition-colors">
                                      {caseType.title}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                                      {caseType.shortDescription}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Medical Cases */}
                        <div className="px-6 py-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-r border-gray-200">
                          <h4 className="font-bold text-primary mb-4 flex items-center">
                            Medical & Pharma
                          </h4>
                          <ul className="space-y-3">
                            {medicalCases.map((caseType) => (
                              <li key={caseType.id}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/cases/${caseType.slug}`}
                                    className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/80 hover:shadow-sm group"
                                  >
                                    <div className="text-sm font-semibold text-primary group-hover:text-green-600 transition-colors">
                                      {caseType.title}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Environmental Cases */}
                        <div className="px-6 py-6 bg-gradient-to-br from-slate-50 to-cyan-50">
                          <h4 className="font-bold text-primary mb-4 flex items-center">
                            Environmental
                          </h4>
                          <ul className="space-y-3">
                            {environmentalCases.map((caseType) => (
                              <li key={caseType.id}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/cases/${caseType.slug}`}
                                    className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/80 hover:shadow-sm group"
                                  >
                                    <div className="text-sm font-semibold text-primary group-hover:text-purple-600 transition-colors">
                                      {caseType.title}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Footer */}
                        <div className="col-span-3 bg-gradient-to-r from-slate-800 to-cyan-800 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="text-white font-bold text-lg">Start With A Secure Review</h5>
                              <p className="text-white/90 text-sm">Fast response | Client-first support</p>
                            </div>
                            <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                              <Link href="#case-evaluation">
                                Begin Secure Intake
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Other Navigation Items */}
                  {[
                    { href: "/cases", label: "All Cases" },
                    { href: "#claim-process", label: "How It Works" },
                    { href: "#faq", label: "FAQ" }
                  ].map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-semibold transition-all duration-300",
                          scrolled ? "text-primary hover:text-primary/80" : "text-white hover:text-white/90"
                        )}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Phone number */}
              <div className={cn(
                "hidden md:flex items-center space-x-3 p-3 rounded-xl transition-all duration-300",
                scrolled
                  ? "bg-gradient-to-r from-primary/5 to-cyan-500/5 text-primary"
                  : "bg-white/10 backdrop-blur-sm text-white"
              )}>
                <div className="bg-white /20 rounded-full p-2">
                  <Phone className=" text-black" size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs opacity-90 font-medium">Free Call</span>
                  <a
                    href="tel:+15550102020"
                    className="font-bold"
                  >
                    +1 555-010-2020
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="hidden lg:flex bg-gradient-to-r from-accent to-yellow-400 hover:from-accent/90 hover:to-yellow-400/90 text-primary font-bold shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="#case-evaluation">
                  Free Case Review
                </Link>
              </Button>

              {/* Mobile Menu */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "rounded-full",
                        scrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/20"
                      )}
                    >
                      <Menu size={24} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="p-6 border-b bg-gradient-to-r from-slate-800 to-cyan-800">
                        <div className="flex items-center text-white">
                          <Image
                            src="/logo.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 mr-3"
                          />
                          <div>
                            <div className="font-bold text-lg">Skye Claim Connect</div>
                            <div className="text-sm opacity-90">Your Legal Advocate</div>
                          </div>
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex-1 overflow-auto py-4">
                        <div className="px-6 py-2 text-sm font-bold text-primary/70 uppercase tracking-wider">
                          Popular Case Types
                        </div>
                        <div className="space-y-1">
                          {popularCases.map((caseType) => (
                            <Link
                              key={caseType.id}
                              href={`/cases/${caseType.slug}`}
                              className="block px-6 py-3 text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-cyan-500/5 transition-all duration-200"
                            >
                              <div className="font-medium">{caseType.title}</div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-6 px-6 py-2 text-sm font-bold text-primary/70 uppercase tracking-wider">
                          Navigation
                        </div>
                        <div className="space-y-1">
                          {[
                            { href: "/cases", label: "All Cases" },
                            { href: "#claim-process", label: "How It Works" },
                            { href: "#faq", label: "FAQ" }
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-6 py-3 text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-cyan-500/5 transition-all duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Footer CTA */}
                      <div className="p-6 border-t bg-gradient-to-r from-slate-50 to-cyan-50">
                        <Button asChild className="w-full bg-gradient-to-r from-accent to-yellow-400 text-primary hover:from-accent/90 hover:to-yellow-400/90 font-bold shadow-lg" size="lg">
                          <Link href="#case-evaluation">
                            Start Free Case Review
                          </Link>
                        </Button>
                        <div className="flex justify-center mt-4">
                          <a href="tel:+15550102020" className="flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
                            <Phone className="mr-2" size={16} />
                            Call +1 555-010-2020
                          </a>
                        </div>
                        <div className="text-center mt-2 text-xs text-gray-500">
                          Confidential review | No upfront fee
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;



