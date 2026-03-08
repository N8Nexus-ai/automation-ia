import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { ProcessSection } from "@/components/process-section"
import { ProofSection } from "@/components/proof-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { DataFlow } from "@/components/data-flow"

export const metadata: Metadata = {
  title: 'Automacao de Processos com n8n, IA e AWS para Empresas',
  description:
    'Projetamos automacoes, integracoes e agentes de IA com n8n e AWS para reduzir tarefas manuais, conectar sistemas e dar mais controle a sua operacao.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Automacao de Processos com n8n, IA e AWS para Empresas',
    description:
      'Projetamos automacoes, integracoes e agentes de IA com n8n e AWS para reduzir tarefas manuais, conectar sistemas e dar mais controle a sua operacao.',
    url: '/',
    images: ['/Logo sem fundo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automacao de Processos com n8n, IA e AWS para Empresas',
    description:
      'Projetamos automacoes, integracoes e agentes de IA com n8n e AWS para reduzir tarefas manuais, conectar sistemas e dar mais controle a sua operacao.',
    images: ['/Logo sem fundo.png'],
  },
}

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
        <InfrastructureSection />
        <ProcessSection />
        <ProofSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
