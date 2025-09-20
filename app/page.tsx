import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { DataFlow } from "@/components/data-flow"

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <DataFlow />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
