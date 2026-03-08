import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Integracao AWS para automacao e sistemas empresariais',
  description:
    'Integre AWS, n8n e seus sistemas com uma arquitetura segura e escalavel. A Nexus.ai projeta automacoes com Lambda, S3, RDS, filas e monitoramento.',
  alternates: {
    canonical: '/integracao-aws',
  },
  openGraph: {
    title: 'Integracao AWS para automacao e sistemas empresariais',
    description:
      'Integre AWS, n8n e seus sistemas com uma arquitetura segura e escalavel. A Nexus.ai projeta automacoes com Lambda, S3, RDS, filas e monitoramento.',
    url: '/integracao-aws',
    images: ['/Logo sem fundo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integracao AWS para automacao e sistemas empresariais',
    description:
      'Integre AWS, n8n e seus sistemas com uma arquitetura segura e escalavel. A Nexus.ai projeta automacoes com Lambda, S3, RDS, filas e monitoramento.',
    images: ['/Logo sem fundo.png'],
  },
}

export default function IntegracaoAwsLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}
