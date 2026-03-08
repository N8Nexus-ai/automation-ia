import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ContactProvider } from "@/contexts/contact-context"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: 'Nexus.ai | Automacao com n8n, IA e AWS para Empresas',
    template: '%s | Nexus.ai',
  },
  description:
    'Consultoria em automacao de processos, integracao de sistemas, n8n, IA e AWS para empresas que precisam reduzir trabalho manual e operar com mais controle.',
  generator: "v0.app",
  keywords: [
    'automacao de processos',
    'integracao de sistemas',
    'n8n',
    'infraestrutura n8n',
    'integracao aws',
    'agentes de ia',
    'consultoria em automacao',
    'automacao para empresas',
    'painel de controle',
    'api sob medida',
    'nexus ai',
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
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Nexus.ai | Automacao com n8n, IA e AWS para Empresas',
    description: 'Consultoria em automacao de processos, integracao de sistemas, n8n, IA e AWS para empresas que precisam reduzir trabalho manual e operar com mais controle.',
    url: '/',
    siteName: 'Nexus.ai',
    images: [
      {
        url: '/Logo sem fundo.png',
        width: 1200,
        height: 630,
        alt: 'Nexus.ai - Automacao com n8n, IA e AWS para Empresas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus.ai | Automacao com n8n, IA e AWS para Empresas',
    description: 'Consultoria em automacao de processos, integracao de sistemas, n8n, IA e AWS para empresas que precisam reduzir trabalho manual e operar com mais controle.',
    images: ['/Logo sem fundo.png'],
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
    "description": "Consultoria em automação de processos, integração de sistemas, n8n, IA e AWS para empresas que precisam reduzir trabalho manual e operar com mais controle.",
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
    "name": "Nexus.ai",
    "url": "https://n8nexus.com.br",
    "description": "Consultoria em automação de processos, integração de sistemas, n8n, IA e AWS para empresas.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://n8nexus.com.br/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automação de processos com n8n, IA e AWS",
    "provider": {
      "@type": "Organization",
      "name": "Nexus.ai",
      "url": "https://n8nexus.com.br"
    },
    "description": "Consultoria especializada em automação de processos, integração de sistemas, infraestrutura n8n e agentes de IA para empresas.",
    "areaServed": "BR",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://n8nexus.com.br/contato"
    }
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Favicon tags removidas - usando apenas os metadados do Next.js */}
        {/* Google tag (gtag.js) */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DEB0G534EV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DEB0G534EV');
            `,
          }}
        />
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
