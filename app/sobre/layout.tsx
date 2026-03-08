import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Sobre a Nexus.ai e nossa consultoria em automacao',
  description:
    'Saiba quem e a Nexus.ai, como estruturamos projetos de automacao com n8n, IA e AWS, e por que nossa abordagem prioriza impacto operacional e controle.',
  alternates: {
    canonical: '/sobre',
  },
  openGraph: {
    title: 'Sobre a Nexus.ai e nossa consultoria em automacao',
    description:
      'Saiba quem e a Nexus.ai, como estruturamos projetos de automacao com n8n, IA e AWS, e por que nossa abordagem prioriza impacto operacional e controle.',
    url: '/sobre',
    images: ['/Logo sem fundo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre a Nexus.ai e nossa consultoria em automacao',
    description:
      'Saiba quem e a Nexus.ai, como estruturamos projetos de automacao com n8n, IA e AWS, e por que nossa abordagem prioriza impacto operacional e controle.',
    images: ['/Logo sem fundo.png'],
  },
}

export default function SobreLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}
