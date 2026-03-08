import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Servicos de Automacao com n8n, IA e Integracao AWS',
  description:
    'Conheca os servicos da Nexus.ai em automacao de processos, n8n, integracao entre sistemas, agentes de IA e infraestrutura flexivel para empresas.',
  alternates: {
    canonical: '/servicos',
  },
  openGraph: {
    title: 'Servicos de Automacao com n8n, IA e Integracao AWS',
    description:
      'Conheca os servicos da Nexus.ai em automacao de processos, n8n, integracao entre sistemas, agentes de IA e infraestrutura flexivel para empresas.',
    url: '/servicos',
    images: ['/Logo sem fundo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicos de Automacao com n8n, IA e Integracao AWS',
    description:
      'Conheca os servicos da Nexus.ai em automacao de processos, n8n, integracao entre sistemas, agentes de IA e infraestrutura flexivel para empresas.',
    images: ['/Logo sem fundo.png'],
  },
}

export default function ServicosLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}
