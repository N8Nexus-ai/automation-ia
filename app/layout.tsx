import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ContactProvider } from "@/contexts/contact-context"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nexus.ai - Arquiteto de Soluções Completas | Plataformas Ponta-a-Ponta",
  description:
    "Mais que automação: arquitetamos e construímos plataformas completas ponta-a-ponta. Do Back-end (APIs e Banco de Dados) ao Painel de Controle visual, criamos soluções que permitem equipes não-técnicas gerenciarem processos complexos com um clique.",
  generator: "v0.app",
  keywords: [
    "arquitetura de soluções",
    "plataformas sob medida",
    "automação ponta-a-ponta",
    "API e Banco de Dados",
    "painel de controle visual",
    "soluções completas",
    "integração de sistemas",
    "orquestração n8n",
    "infraestrutura flexível",
    "automação de processos",
    "inteligência artificial",
    "IA para empresas",
    "consultoria em automação",
    "nexus",
    "n8n",
    "transformação digital",
    "eficência operacional",
    "redução de custos"
  ],
  authors: [{ name: "Nexus.ai" }],
  creator: "Nexus.ai",
  publisher: "Nexus.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://n8nexus.com.br'),
  openGraph: {
    title: "Nexus.ai - Arquiteto de Soluções Completas | Plataformas Ponta-a-Ponta",
    description: "Mais que automação: arquitetamos e construímos plataformas completas ponta-a-ponta. Do Back-end (APIs e Banco de Dados) ao Painel de Controle visual, criamos soluções que permitem equipes não-técnicas gerenciarem processos complexos com um clique.",
    url: 'https://n8nexus.com.br',
    siteName: 'Nexus.ai',
    images: [
      {
        url: 'https://n8nexus.com.br/Logo sem fundo.png',
        width: 1200,
        height: 630,
        alt: 'Nexus.ai - Arquiteto de Soluções Completas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nexus.ai - Arquiteto de Soluções Completas | Plataformas Ponta-a-Ponta",
    description: "Mais que automação: arquitetamos e construímos plataformas completas ponta-a-ponta. Do Back-end (APIs e Banco de Dados) ao Painel de Controle visual, criamos soluções que permitem equipes não-técnicas gerenciarem processos complexos com um clique.",
    images: ['https://n8nexus.com.br/Logo sem fundo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexus.ai",
    "alternateName": "N8Nexus",
    "url": "https://n8nexus.com.br",
    "logo": "https://n8nexus.com.br/Logo sem fundo.png",
    "description": "Arquiteto de Soluções Completas. Projetamos e construímos plataformas ponta-a-ponta: do Back-end (APIs e Banco de Dados) ao Painel de Controle visual, criando soluções que permitem equipes não-técnicas gerenciarem processos complexos com um clique.",
    "email": "contato@n8nexus.com.br",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nexus-ai",
      "https://twitter.com/nexusai"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nexus.ai - Consultoria em Automação e IA",
    "url": "https://n8nexus.com.br",
    "description": "Mais que automação: arquitetamos e construímos plataformas completas ponta-a-ponta. Do Back-end (APIs e PostgreSQL) ao Front-end (Next.js), criamos painéis de controle que permitem equipes não-técnicas gerenciarem processos complexos com um clique.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://n8nexus.com.br/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Consultoria em Automação de Processos e IA",
    "provider": {
      "@type": "Organization",
      "name": "Nexus.ai",
      "url": "https://n8nexus.com.br"
    },
    "description": "Consultoria especializada em automação de processos e inteligência artificial para empresas.",
    "areaServed": "BR",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://n8nexus.com.br/contato",
      "servicePhone": "Seu telefone aqui"
    }
  }

  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Favicon tags removidas - usando apenas os metadados do Next.js */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ContactProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <WhatsAppFloat />
          <Analytics />
        </ContactProvider>
      </body>
    </html>
  )
}
