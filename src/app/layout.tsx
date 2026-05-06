import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skye Claim Connect | Trusted Claims & Legal Intake",
  description:
    "Professional claim intake for Depo Provera, Roblox, Rideshare, Talc, Ozempic, MVA, and WTC cases. Free consultation available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

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

