import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Infraestrutura n8n para operacao estavel e escalavel',
  description:
    'Estruture sua operacao com n8n em infraestrutura propria ou gerenciada. A Nexus.ai implementa ambientes com foco em estabilidade, suporte e escalabilidade.',
  alternates: {
    canonical: '/infraestrutura-n8n',
  },
  openGraph: {
    title: 'Infraestrutura n8n para operacao estavel e escalavel',
    description:
      'Estruture sua operacao com n8n em infraestrutura propria ou gerenciada. A Nexus.ai implementa ambientes com foco em estabilidade, suporte e escalabilidade.',
    url: '/infraestrutura-n8n',
    images: ['/Logo sem fundo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infraestrutura n8n para operacao estavel e escalavel',
    description:
      'Estruture sua operacao com n8n em infraestrutura propria ou gerenciada. A Nexus.ai implementa ambientes com foco em estabilidade, suporte e escalabilidade.',
    images: ['/Logo sem fundo.png'],
  },
}

export default function InfraestruturaN8nLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}
