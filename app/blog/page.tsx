import type { Metadata } from 'next'

import { BlogFilter } from '@/components/blog-filter'
import { FooterLight } from '@/components/footer-light'
import { Header } from '@/components/header'
import { getAllPosts, getCategories } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog de Automacao com n8n, IA e AWS',
  description:
    'Guias praticos sobre automacao de processos, integracao de sistemas, agentes de IA, AWS e operacao com n8n para empresas.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog de Automacao com n8n, IA e AWS',
    description:
      'Guias praticos sobre automacao de processos, integracao de sistemas, agentes de IA, AWS e operacao com n8n para empresas.',
    url: '/blog',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Automacao com n8n, IA e AWS',
    description:
      'Guias praticos sobre automacao de processos, integracao de sistemas, agentes de IA, AWS e operacao com n8n para empresas.',
  },
}

export default async function BlogPage() {
  const articles = await getAllPosts()
  const categories = getCategories()
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog de Automacao com n8n, IA e AWS',
    url: 'https://n8nexus.com.br/blog/',
    description:
      'Guias praticos sobre automacao de processos, integracao de sistemas, agentes de IA, AWS e operacao com n8n para empresas.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nexus.ai',
      url: 'https://n8nexus.com.br',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.slice(0, 12).map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://n8nexus.com.br/blog/${article.slug}/`,
        name: article.title,
      })),
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Header />
      
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Artigos sobre automação, IA e transformação digital
            </p>
          </div>

          {/* Blog Filter Component */}
          <BlogFilter articles={articles} categories={categories} />
        </div>
      </div>
      
      <FooterLight />
    </main>
  )
}
