import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import CaseTypesList from "@/components/sections/CaseTypesList";
import ClaimProcess from "@/components/sections/ClaimProcess";
import CaseEvaluation from "@/components/sections/CaseEvaluation";
import FrequentlyAskedQuestions from "@/components/sections/FrequentlyAskedQuestions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="pt-0">
        <Hero />
        <CaseTypesList />
        <ClaimProcess />
        <CaseEvaluation />
        <FrequentlyAskedQuestions />
      </div>
    </main>
  );
}
