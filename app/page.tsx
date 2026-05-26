import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import CorePrimitives from "@/components/CorePrimitives";
import ComparisonSection from "@/components/ComparisonSection";
import LiveActivity from "@/components/LiveActivity";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import MouseGlow from "@/components/MouseGlow";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

export default function Home() {
  return (
    <>
      {/* Fixed background effects — render outside main flow */}
      <ParticleCanvas />
      <MouseGlow />

      {/* Sets up IntersectionObserver for .reveal elements after hydration */}
      <ScrollRevealObserver />

      <NavBar />

      <main className="pt-[80px]">
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <CorePrimitives />
        <ComparisonSection />
        <LiveActivity />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
