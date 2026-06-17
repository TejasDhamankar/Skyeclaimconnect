import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import CaseHero from "@/components/case-detail/CaseHero";
import CaseDescription from "@/components/case-detail/CaseDescription";
import EligibilityCriteria from "@/components/case-detail/EligibilityCriteria";
import CompensationInfo from "@/components/case-detail/CompensationInfo";
import RelatedConditions from "@/components/case-detail/RelatedConditions";
import CaseFAQ from "@/components/case-detail/CaseFAQ";
import CaseEvaluation from "@/components/sections/CaseEvaluation";
import Link from "next/link";
import { getCaseBySlug } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Phone,
  Shield,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Zap,
  TrendingUp,
  Scale,
  FileText
} from "lucide-react";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const caseData = await getCaseBySlug(slug);

  if (!caseData) {
    return {
      title: "Case Not Found | Skye Claim Connect",
      description: "The requested case information could not be found."
    };
  }

  return {
    title: `${caseData.title} Claims & Compensation | Skye Claim Connect - Free Review`,
    description: `${caseData.shortDescription} Get your free case evaluation. No fees.`,
    keywords: `${caseData.title.toLowerCase()}, legal claims, compensation, lawsuit, free case review, no win no fee, ${caseData.category?.toLowerCase()}`,
    openGraph: {
      title: `${caseData.title} Claims | Free Legal Review`,
      description: caseData.shortDescription,
      images: [caseData.imageUrl],
    },
  };
}

export default async function CaseDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const caseData = await getCaseBySlug(slug);

  if (!caseData) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Enhanced Case Hero */}
      <CaseHero caseData={caseData} />
      <section id='#casereview'>
        <CaseEvaluation />
      </section>


      {/* Trust Banner */}
      <section className="bg-[#f8f1e6] py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-4">
              Why Choose Skye Claim Connect for Your {caseData.title} Case?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've successfully represented thousands of clients in cases similar to yours.
            </p>
          </div>


        </div>
      </section>

      {/* Main Content Sections */}
      <CaseDescription caseData={caseData} />
      <RelatedConditions caseData={caseData} />
      <EligibilityCriteria caseData={caseData} />
      <CompensationInfo caseData={caseData} />

      {/* Urgency Section */}
      <section className="relative overflow-hidden bg-[#fbf7f0] py-12 sm:py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[rgba(194,148,90,0.08)] blur-2xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Card className="mx-auto max-w-4xl border border-[#dfd3c4] bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                  <div className="mr-4 rounded-full bg-[rgba(194,148,90,0.16)] p-3">
                    <AlertCircle className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-primary">
                  Time is Running Out!
                </h3>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {caseData.title} cases have strict filing deadlines. Don't wait until it's too late to seek the compensation you deserve.
                <span className="font-bold text-[var(--color-accent)]"> Act now to protect your rights.</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#f8f1e6] p-4">
                  <div className="text-lg font-black text-primary">Statute of Limitations</div>
                  <div className="text-sm text-primary/70">Filing deadlines apply</div>
                </div>
                <div className="bg-[#f8f1e6] p-4">
                  <div className="text-lg font-black text-primary">Evidence Preservation</div>
                  <div className="text-sm text-primary/70">Documents may be lost</div>
                </div>
                <div className="bg-[#f8f1e6] p-4">
                  <div className="text-lg font-black text-primary">Maximum Compensation</div>
                  <div className="text-sm text-primary/70">Early filing advantages</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary px-8 py-6 text-lg font-black text-white shadow-xl hover:bg-primary/90 hover:shadow-2xl">
                  <Link href="#case-evaluation">
                    <Zap className="mr-3 h-5 w-5" />
                    Get Urgent Case Review
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-[rgba(194,148,90,0.45)] px-8 py-6 text-lg font-bold text-primary hover:bg-[#f8f1e6]">
                  <a href="tel:13023070025">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Emergency Line
                  </a>
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Free consultation • No obligation • Confidential discussion
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CaseFAQ caseData={caseData} />

      {/* Enhanced Case Evaluation Section */}
      <div id="case-evaluation" className="bg-[#fbf7f0]">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 px-4 py-2 bg-accent/20 text-accent border-accent/30 font-bold">
              <CheckCircle className="w-4 h-4 mr-2" />
              CASE-SPECIFIC EVALUATION
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
              Get Your Free {caseData.title} Case Review
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized legal team will evaluate your specific situation and determine your eligibility for compensation.
            </p>
          </div>
        </div>
        <CaseEvaluation />
      </div>

      {/* Related Cases Section */}
      <section className="bg-[#fbf7f0] py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/5 text-primary border-primary/30 font-bold">
              OTHER ACTIVE CASES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-4">
              You May Also Qualify For These Cases
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Many clients qualify for multiple cases. Explore other opportunities for compensation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* This would typically fetch related cases - for now showing placeholder */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  <Badge className="bg-green-500/10 text-green-700 text-xs">Active</Badge>
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-[var(--color-accent)]">
                  Depo Provera Brain Tumor
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Women diagnosed with meningioma after Depo Provera use may qualify for compensation.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/cases/depo-provera">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  <Badge className="bg-green-500/10 text-green-700 text-xs">Active</Badge>
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-[var(--color-accent)]">
                  Roblox Gaming Addiction
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Families reporting harmful compulsive Roblox use may be eligible for claim screening.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/cases/roblox-addiction">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  <Badge className="bg-green-500/10 text-green-700 text-xs">Active</Badge>
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-[var(--color-accent)]">
                  Ozempic & GLP-1 Injury Claims
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Severe GI injuries after Ozempic or similar GLP-1 use may qualify for legal intake.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/cases/ozempic">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4">
              <Link href="/cases">
                View All Active Cases
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 px-4 py-2 bg-accent/20 text-accent border-accent/30 font-bold">
              <Shield className="w-4 h-4 mr-2" />
              NO WIN, NO FEE GUARANTEE
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                Ready to Fight
              </span>
              <br />
              <span className="text-white">For Your Rights?</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Don't let corporations get away with harming you. Our experienced legal team is ready to fight for the compensation you deserve.
              <span className="font-bold text-accent"> You pay nothing unless we win.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                <Link href="#case-evaluation">
                  Start My Free Case Review
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-8 py-6 text-lg backdrop-blur-sm w-full sm:w-auto">
                <a href="tel:13023070025">
                  <Phone className="mr-3 h-5 w-5" />
                  Call 13023070025
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/80 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                <span>No Upfront Costs</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-accent mr-2" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}


