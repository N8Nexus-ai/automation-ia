import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  const allPosts = await getAllPosts()
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = post ? allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3) : []

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexus.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://n8nexus.com.br/Logo sem fundo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://n8nexus.com.br/blog/${post.slug}`
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      
      <article className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-10 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar ao Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-16">
            <div className="flex items-center justify-start gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 text-sm font-semibold shadow-md">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1] text-gray-900 tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-base text-gray-600 mb-10">
              <div className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Calendar size={18} className="text-primary" />
                <span className="font-medium">{new Date(post.date).toLocaleDateString('pt-BR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Clock size={18} className="text-primary" />
                <span className="font-medium">{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Featured Image */}
          <div className="relative aspect-video rounded-3xl mb-16 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Author & Share Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 md:p-10 mb-16 border border-gray-100">
            {/* Author Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 mb-8 border-b border-gray-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary to-accent rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-2xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{post.author}</h4>
                <p className="text-gray-600 text-base">Especialista em Automação e IA</p>
              </div>
            </div>

            {/* Share Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">Gostou do artigo?</h5>
                <p className="text-gray-600">Compartilhe com sua rede!</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://n8nexus.com.br/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-blue-500 hover:text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200"
                  aria-label="Compartilhar no Twitter"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://n8nexus.com.br/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-blue-600 hover:text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200"
                  aria-label="Compartilhar no LinkedIn"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${`https://n8nexus.com.br/blog/${post.slug}`}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-green-600 hover:text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200"
                  aria-label="Compartilhar no WhatsApp"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-16 border-t-2 border-gray-200 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                  Artigos Relacionados
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Continue explorando conteúdos sobre automação e transformação digital
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group">
                    <Card className="h-full overflow-hidden border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-300 bg-white">
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Badge className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 shadow-xl font-bold text-sm px-3 py-1.5 border border-gray-200">
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <CardContent className="p-7">
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 text-gray-900 leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-700 text-base line-clamp-3 mb-6 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-5 text-sm text-gray-600 pt-5 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-primary" />
                            <span className="font-semibold">{new Date(relatedPost.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-primary" />
                            <span className="font-semibold">{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
      
      <FooterLight />
    </main>
  )
}