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
  title: "Nexus.ai - Consultoria em Automação e IA",
  description:
    "Transformamos tarefas repetitivas em automações inteligentes. Economize 99,3% do tempo da sua equipe com nossas soluções de IA.",
  generator: "v0.app",
  keywords: [
    "automação de processos", 
    "inteligência artificial", 
    "IA para empresas",
    "consultoria em automação", 
    "nexus", 
    "n8n",
    "automação inteligente",
    "chatbots",
    "RPA",
    "integração de sistemas",
    "transformação digital",
    "eficência operacional",
    "redução de custos",
    "automação com IA"
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
    title: "Nexus.ai - Consultoria em Automação e IA",
    description: "Transformamos tarefas repetitivas em automações inteligentes. Economize 99,3% do tempo da sua equipe com nossas soluções de IA.",
    url: 'https://n8nexus.com.br',
    siteName: 'Nexus.ai',
    images: [
      {
        url: 'https://n8nexus.com.br/Logo sem fundo.png',
        width: 1200,
        height: 630,
        alt: 'Nexus.ai - Consultoria em Automação e IA',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nexus.ai - Consultoria em Automação e IA",
    description: "Transformamos tarefas repetitivas em automações inteligentes. Economize 99,3% do tempo da sua equipe com nossas soluções de IA.",
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
    "description": "Transformamos tarefas repetitivas em automações inteligentes. Consultoria em automação de processos e inteligência artificial.",
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
    "description": "Transformamos tarefas repetitivas em automações inteligentes. Economize 99,3% do tempo da sua equipe com nossas soluções de IA.",
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
