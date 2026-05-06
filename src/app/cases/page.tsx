import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, Award, Clock, DollarSign, Users, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllCaseTypes } from "@/lib/utils";

export const metadata = {
  title: "Active Mass Tort & Class Action Cases | Skye Claim Connect - Free Review",
  description: "View all active mass tort and class action cases. Get your free case evaluation today. ",
  keywords: "mass tort cases, class action lawsuits, legal claims, compensation, free case review, no win no fee"
};

export default function CasesPage() {
  const caseTypes = getAllCaseTypes();

  // Separate hot and regular cases
  const hotCases = caseTypes.filter(caseType => caseType.featured);
  const regularCases = caseTypes.filter(caseType => !caseType.featured);

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-primary pb-16 pt-24 sm:pb-20 sm:pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          {/* Floating Elements */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 sm:mb-6 px-4 py-2 bg-accent/20 text-accent border-accent/30 font-bold text-sm sm:text-base">
              <Scale className="w-4 h-4 mr-2" />
              ACTIVE LEGAL CASES
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                Seeking Justice.
              </span>
              <br />
              <span className="text-white">Getting Results.</span>
            </h1>

            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-yellow-400 mx-auto mb-4 sm:mb-6 rounded-full" />

            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              We specialize in representing individuals harmed by corporate negligence, dangerous products, and toxic exposure.
              <span className="font-bold text-accent"> Review our current cases to see if you qualify for compensation.</span>
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                <Link href="#hot-cases" className="flex items-center justify-center">
                  <TrendingUp className="mr-3 h-5 w-5" />
                  View Hot Cases
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto">
                <Link href="#case-evaluation" className="flex items-center justify-center">
                  <CheckCircle className="mr-3 h-5 w-5" />
                  Free Case Review
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Cases Section */}
      {hotCases.length > 0 && (
        <section id="hot-cases" className="relative overflow-hidden bg-[#fbf7f0] py-16 sm:py-20">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[rgba(194,148,90,0.08)] blur-2xl sm:h-96 sm:w-96 sm:blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4 sm:mb-6 px-4 py-2 bg-red-500/20 text-red-600 border-red-500/30 font-bold text-sm sm:text-base">
                <Zap className="w-4 h-4 mr-2" />
                HOT CASES - URGENT DEADLINES
              </Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Time-Sensitive
                </span>
                <br />
                <span className="text-gray-800">Legal Cases</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These cases have
                <span className="font-bold text-red-600"> strict filing deadlines.</span>
                Don&apos;t wait - act now to protect your rights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {hotCases.map((caseType, index) => (
                <Card key={caseType.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white border-2 border-red-200 hover:border-red-300 relative">
                  {/* Hot Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-red-500 text-white font-black px-3 py-1 text-xs animate-pulse">
                      HOT
                    </Badge>
                  </div>

                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <Image
                      src={caseType.imageUrl}
                      alt={caseType.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {caseType.category}
                      </Badge>
                      <div className="flex items-center text-red-500 text-xs font-bold">
                        <Clock className="w-3 h-3 mr-1" />
                        URGENT
                      </div>
                    </div>

                    <h3 className="mb-3 text-lg sm:text-xl font-black leading-tight text-primary transition-colors group-hover:text-[var(--color-accent)]">
                      {caseType.title}
                    </h3>

                    <p className="text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                      {caseType.shortDescription}
                    </p>

                    {/* Key Benefits */}
                    <div className="bg-green-50 rounded-lg p-3 mb-4 sm:mb-6">
                      <div className="flex items-center text-green-700 text-xs sm:text-sm font-bold mb-2">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Potential Compensation
                      </div>
                      <p className="text-green-600 text-xs sm:text-sm">
                        Settlements ranging from $10,000 to $500,000+
                      </p>
                    </div>

                    <div className="mt-auto space-y-3">
                      <Button asChild className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black shadow-lg hover:shadow-xl">
                        <Link href={`/cases/${caseType.slug}`}>
                          Check My Eligibility
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>

                      <Button asChild variant="outline" className="w-full border-2 border-primary/20 text-primary hover:bg-primary/10">
                        <Link href={`/cases/${caseType.slug}`}>
                          View Case Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Urgency CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 sm:p-8 text-white text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mr-3" />
                <h3 className="text-xl sm:text-2xl font-black">Don't Miss Your Deadline!</h3>
              </div>
              <p className="text-lg sm:text-xl mb-6 text-white/90">
                Many of these cases have filing deadlines approaching. Get your free evaluation now.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-6 sm:px-8 py-4 text-base sm:text-lg">
                <Link href="#case-evaluation">
                  Get Urgent Case Review
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* All Cases Section */}
      <section className="relative overflow-hidden bg-[#fbf7f0] py-16 sm:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 sm:mb-6 px-4 py-2 bg-primary/5 text-primary border-primary/30 font-bold text-sm sm:text-base">
              <Scale className="w-4 h-4 mr-2" />
              ALL ACTIVE CASES
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 leading-tight">
              <span className="text-primary">
                Complete Case
              </span>
              <br />
              <span className="text-gray-800">Portfolio</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our full range of active legal cases.
              <span className="font-bold text-primary"> Each case represents an opportunity for justice and compensation.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseTypes.map((caseType, index) => (
              <Card key={caseType.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={caseType.imageUrl}
                    alt={caseType.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary font-bold text-xs backdrop-blur-sm">
                      {caseType.category}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {caseType.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent/90 text-primary font-black text-xs backdrop-blur-sm">
                        FEATURED
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="mb-3 text-lg sm:text-xl font-black leading-tight text-primary transition-colors group-hover:text-[var(--color-accent)]">
                    {caseType.title}
                  </h3>

                  <p className="text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                    {caseType.shortDescription}
                  </p>

                  {/* Case Stats */}
                  <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-lg p-3 mb-4 sm:mb-6">
                    <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="text-center">
                        <div className="font-bold text-primary">Active</div>
                        <div className="text-gray-600">Status</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">$$$</div>
                        <div className="text-gray-600">Compensation</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <Button asChild className="w-full bg-primary text-white font-bold shadow-lg hover:bg-primary/90 hover:shadow-xl">
                      <Link href={`/cases/${caseType.slug}`}>
                        <span className="flex items-center justify-center">
                          Check Eligibility
                          <ArrowRight size={16} className="ml-2" />
                        </span>
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">
                      <Link href={`/cases/${caseType.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 px-4 py-2 bg-accent/20 text-accent border-accent/30 font-bold text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 mr-2" />
              FREE CASE EVALUATION
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                Not Sure Which Case
              </span>
              <br />
              <span className="text-white">Applies to You?</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Our expert legal team can help determine if you qualify for compensation based on your specific situation.
              <span className="font-bold text-accent"> No fees</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black px-8 py-6 text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                <Link href="/#case-evaluation">
                  Get Free Case Evaluation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold px-8 py-6 text-lg backdrop-blur-sm w-full sm:w-auto">
                <a href="tel:+15550102020">
                  Call +1 555-010-2020
                </a>
              </Button>
            </div>

            {/* Final Trust Indicators */}

          </div>
        </div>
      </section>
    </main>
  );
}



