import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nexus.ai - Consultoria em Automação e IA",
  description:
    "Transformamos tarefas repetitivas em automações inteligentes. Economize 99,3% do tempo da sua equipe com nossas soluções de IA.",
  generator: "v0.app",
  keywords: ["automação", "inteligência artificial", "IA", "consultoria", "nexus", "processos", "eficiência"],
  authors: [{ name: "Nexus.ai" }],
  creator: "Nexus.ai",
  publisher: "Nexus.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nexus.ai'),
  openGraph: {
    title: "Nexus.ai - Consultoria em Automação e IA",
    description: "Transformamos tarefas repetitivas em automações inteligentes. Economize 99,3% do tempo da sua equipe com nossas soluções de IA.",
    url: 'https://nexus.ai',
    siteName: 'Nexus.ai',
    images: [
      {
        url: '/Logo sem fundo.png',
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
    images: ['/Logo sem fundo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '16x16' }
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Favicon tags removidas - usando apenas os metadados do Next.js */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
