"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
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
import { cn, getAllCaseTypes } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const caseTypes = getAllCaseTypes();
  const featuredCases = caseTypes.filter((item) =>
    [
      "depo-provera",
      "roblox-addiction",
      "rideshare",
      "talcum-powder",
      "ozempic",
      "motor-vehicle-accident",
      "wtc-exposure",
    ].includes(item.slug)
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollToHashTarget = () => {
      if (typeof window === "undefined") return;
      const { hash } = window.location;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (!target) return;

      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 160);
    };

    scrollToHashTarget();
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => window.removeEventListener("hashchange", scrollToHashTarget);
  }, [pathname]);

  const navItems = [
    { href: "/cases", label: "All Cases" },
    { href: "#case-types", label: "Case Types" },
    { href: "#claim-process", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleNav = (href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${href}`);
        return;
      }

      window.history.pushState(null, "", href);
      const target = document.querySelector(href);
      if (target) {
        window.setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
      return;
    }

    router.push(href);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <motion.header
        className={cn(
          "border-b border-white/10 transition-all duration-300",
          scrolled
            ? "bg-primary/96 backdrop-blur-xl"
            : "bg-primary/78 backdrop-blur-md"
        )}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 md:h-24 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3 text-white md:gap-4">
            <Image src="/logo_.png" alt="Skye Claim Connect" width={80} height={80} className="h-14 w-14 object-contain md:h-18 md:w-18" />
            <div>
              <div className="font-serif text-[1.2rem] font-semibold leading-none tracking-[0.02em] sm:text-[1.35rem] md:text-[1.55rem]">
                Skye Claim Connect
              </div>
              <div className="law-label mt-1 text-[8px] text-white/55 md:text-[9px]">Mass Tort Intake</div>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent px-4 text-[12px] font-medium uppercase tracking-[0.24em] text-white hover:bg-white/5 hover:text-white"
                    )}
                  >
                    Case Types
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-4 border border-[rgba(194,148,90,0.25)] bg-[#172234] p-0 text-white shadow-2xl">
                    <div className="grid w-[760px] grid-cols-2 gap-0">
                      {featuredCases.map((caseType, index) => (
                        <NavigationMenuLink key={caseType.id} asChild>
                          <Link
                            href={`/cases/${caseType.slug}`}
                            className={cn(
                              "block border-white/10 bg-[#172234] px-6 py-5 transition hover:bg-[#22314a]",
                              index % 2 === 0 ? "border-r" : "",
                              index < featuredCases.length - 2 ? "border-b" : ""
                            )}
                          >
                            <div className="font-serif text-2xl leading-none text-white">{caseType.category}</div>
                            <div className="mt-2 text-sm leading-6 text-white/75">{caseType.shortDescription}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.href.startsWith("#") ? (
                      <button
                        type="button"
                        onClick={() => handleNav(item.href)}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent px-4 text-[12px] font-medium uppercase tracking-[0.24em] text-white hover:bg-white/5 hover:text-[var(--color-accent)]"
                        )}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent px-4 text-[12px] font-medium uppercase tracking-[0.24em] text-white hover:bg-white/5 hover:text-[var(--color-accent)]"
                        )}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+15550102020"
              className="flex items-center gap-3 border-l border-white/10 pl-5 text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(194,148,90,0.4)] text-[var(--color-accent)]">
                <Phone size={16} />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-white/55">Call</span>
                <span className="font-serif text-xl">+1 555-010-2020</span>
              </span>
            </a>
            <Button
              asChild
              className="border border-[rgba(194,148,90,0.65)] bg-transparent px-6 text-[11px] font-medium uppercase tracking-[0.28em] text-white hover:bg-[var(--color-accent)] hover:text-primary"
            >
              <button type="button" onClick={() => handleNav("#case-evaluation")}>
                Free Consultation
              </button>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-none text-white hover:bg-white/10 hover:text-white">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full border-l border-white/10 bg-primary p-0 text-white sm:w-[420px]">
                <div className="border-b border-white/10 px-6 py-6">
                  <div className="font-serif text-3xl">Skye Claim Connect</div>
                  <div className="law-label mt-2 text-[10px] text-white/60">Mass Tort Intake</div>
                </div>
                <div className="flex flex-col px-6 py-6">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNav(item.href)}
                      className="border-b border-white/10 py-4 text-[13px] uppercase tracking-[0.24em] text-white/80 transition hover:text-[var(--color-accent)]"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNav("#case-evaluation")}
                    className="mt-8 inline-flex items-center justify-center border border-[rgba(194,148,90,0.65)] px-5 py-4 text-[12px] uppercase tracking-[0.28em] text-white transition hover:bg-[var(--color-accent)] hover:text-primary"
                  >
                    Free Consultation
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
