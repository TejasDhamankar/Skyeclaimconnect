import "@/app/globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/sections/Footer";

const bodyFont = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skye Claim Connect | Trusted Claims & Legal Intake",
  description:
    "Professional claim intake for Depo Provera, Roblox, Rideshare, Talc, Ozempic, MVA, and WTC cases. Free consultation available.",
  icons: {
    icon: "/logo_.png",
    shortcut: "/logo_.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

