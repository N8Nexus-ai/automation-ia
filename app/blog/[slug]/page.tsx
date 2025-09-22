import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
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

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Voltar ao Blog
          </Link>

          {/* Article Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                {post.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-muted-foreground mb-8">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Calendar size={18} className="text-primary" />
                <span className="font-medium">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Clock size={18} className="text-primary" />
                <span className="font-medium">{post.readTime} de leitura</span>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {post.excerpt}
              </p>
            </div>
          </div>

          {/* Article Image */}
          <div className="aspect-video rounded-3xl mb-12 overflow-hidden relative shadow-2xl group">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-300`}></div>
            
            {/* Floating Elements */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute top-6 left-6">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                <span className="text-white font-semibold text-sm">Artigo Premium</span>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">O que você vai aprender</h2>
                    <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-border/50">
            {/* Article Highlight */}
            <div className="mb-12 p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl border border-primary/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Destaque do Artigo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Este artigo contém informações valiosas sobre <span className="font-semibold text-primary">{post.category.toLowerCase()}</span> que podem transformar sua abordagem de negócio. 
                    Continue lendo para descobrir insights práticos e implementações reais.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Conteúdo verificado por especialistas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-2xl max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-5xl prose-h1:mb-10 prose-h1:mt-16 prose-h1:leading-tight prose-h1:bg-gradient-to-r prose-h1:from-primary prose-h1:via-accent prose-h1:to-primary prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:drop-shadow-sm prose-h2:text-4xl prose-h2:mb-8 prose-h2:mt-14 prose-h2:leading-tight prose-h2:text-foreground prose-h2:relative prose-h2:pl-6 prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-1/2 prose-h2:before:-translate-y-1/2 prose-h2:before:w-1 prose-h2:before:h-16 prose-h2:before:bg-gradient-to-b prose-h2:before:from-primary prose-h2:before:to-accent prose-h2:before:rounded-full prose-h3:text-3xl prose-h3:mb-6 prose-h3:mt-12 prose-h3:leading-tight prose-h3:text-foreground prose-h3:border-b-2 prose-h3:border-primary/30 prose-h3:pb-3 prose-h3:inline-block prose-h3:relative prose-h3:after:content-[''] prose-h3:after:absolute prose-h3:after:bottom-0 prose-h3:after:left-0 prose-h3:after:w-1/3 prose-h3:after:h-0.5 prose-h3:after:bg-gradient-to-r prose-h3:after:from-primary prose-h3:after:to-transparent prose-h4:text-2xl prose-h4:mb-4 prose-h4:mt-10 prose-h4:leading-tight prose-h4:text-foreground prose-h4:font-semibold prose-p:text-foreground prose-p:leading-loose prose-p:text-xl prose-p:mb-8 prose-p:font-normal prose-p:tracking-wide prose-p:text-justify prose-p:indent-8 prose-p:first-letter:text-6xl prose-p:first-letter:font-bold prose-p:first-letter:text-primary prose-p:first-letter:float-left prose-p:first-letter:mr-2 prose-p:first-letter:leading-none prose-p:first-letter:drop-shadow-sm prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-semibold prose-a:transition-all prose-a:duration-300 prose-a:decoration-2 prose-a:underline-offset-4 prose-strong:text-foreground prose-strong:font-bold prose-strong:text-primary prose-strong:bg-primary/5 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded prose-ul:text-foreground prose-ul:text-xl prose-ul:leading-loose prose-ul:space-y-4 prose-ul:my-8 prose-ul:pl-8 prose-ul:relative prose-ul:before:content-[''] prose-ul:before:absolute prose-ul:before:left-0 prose-ul:before:top-0 prose-ul:before:bottom-0 prose-ul:before:w-0.5 prose-ul:before:bg-gradient-to-b prose-ul:before:from-primary prose-ul:before:to-accent prose-ol:text-foreground prose-ol:text-xl prose-ol:leading-loose prose-ol:space-y-4 prose-ol:my-8 prose-ol:pl-8 prose-li:text-foreground prose-li:mb-4 prose-li:font-normal prose-li:tracking-wide prose-li:relative prose-li:pl-4 prose-li:before:content-['•'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-primary prose-li:before:font-bold prose-li:before:text-2xl prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/5 prose-blockquote:via-accent/5 prose-blockquote:to-primary/5 prose-blockquote:border-l-4 prose-blockquote:pl-10 prose-blockquote:py-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-12 prose-blockquote:text-foreground prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:font-medium prose-blockquote:shadow-xl prose-blockquote:relative prose-blockquote:before:content-['"'] prose-blockquote:before:absolute prose-blockquote:before:-top-4 prose-blockquote:before:-left-2 prose-blockquote:before:text-8xl prose-blockquote:before:text-primary prose-blockquote:before:opacity-20 prose-blockquote:before:font-serif prose-blockquote:before:leading-none prose-code:bg-gradient-to-r prose-code:from-muted prose-code:to-muted/80 prose-code:px-4 prose-code:py-2 prose-code:rounded-lg prose-code:text-base prose-code:font-mono prose-code:text-foreground prose-code:shadow-lg prose-code:border prose-code:border-border prose-pre:bg-gradient-to-br prose-pre:from-muted prose-pre:to-muted/80 prose-pre:border prose-pre:border-border prose-pre:rounded-2xl prose-pre:p-8 prose-pre:overflow-x-auto prose-pre:my-12 prose-pre:shadow-2xl prose-pre:relative prose-pre:before:content-['</>'] prose-pre:before:absolute prose-pre:before:top-4 prose-pre:before:right-4 prose-pre:before:text-primary prose-pre:before:font-bold prose-pre:before:text-sm prose-table:text-foreground prose-table:text-xl prose-th:bg-gradient-to-r prose-th:from-primary/10 prose-th:to-accent/10 prose-th:font-bold prose-th:px-6 prose-th:py-4 prose-th:text-primary prose-td:px-6 prose-td:py-4 prose-td:border-b prose-td:border-border prose-td:even:bg-muted/30 prose-table:rounded-2xl prose-table:overflow-hidden prose-table:shadow-2xl prose-table:border prose-table:border-border">
            <style jsx global>{`
              .prose h1 {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-weight: 800;
                letter-spacing: -0.02em;
                line-height: 1.1;
                margin-bottom: 2rem;
                margin-top: 3rem;
              }
              
              .prose h2 {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-weight: 700;
                letter-spacing: -0.01em;
                line-height: 1.2;
                margin-bottom: 1.5rem;
                margin-top: 2.5rem;
                position: relative;
                padding-left: 1.5rem;
              }
              
              .prose h2::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 4px;
                height: 60px;
                background: linear-gradient(135deg, var(--primary), var(--accent));
                border-radius: 2px;
              }
              
              .prose h3 {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-weight: 600;
                letter-spacing: -0.01em;
                line-height: 1.3;
                margin-bottom: 1rem;
                margin-top: 2rem;
                color: var(--foreground);
                border-bottom: 2px solid var(--primary);
                padding-bottom: 0.5rem;
                display: inline-block;
                position: relative;
              }
              
              .prose h3::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 30%;
                height: 2px;
                background: linear-gradient(90deg, var(--primary), transparent);
              }
              
              .prose p {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 1.25rem;
                line-height: 1.8;
                margin-bottom: 2rem;
                text-align: justify;
                text-indent: 2rem;
                font-weight: 400;
                letter-spacing: 0.01em;
                color: var(--foreground);
              }
              
              .prose p:first-child::first-letter {
                font-size: 4rem;
                font-weight: 800;
                color: var(--primary);
                float: left;
                margin-right: 0.5rem;
                margin-top: 0.1rem;
                line-height: 0.8;
                text-shadow: 0 2px 4px rgba(0,0,0,0.1);
                font-family: 'Inter', sans-serif;
              }
              
              .prose strong {
                font-weight: 700;
                color: var(--primary);
                background: linear-gradient(135deg, var(--primary)/10, var(--accent)/10);
                padding: 0.25rem 0.5rem;
                border-radius: 0.375rem;
                border: 1px solid var(--primary)/20;
              }
              
              .prose ul, .prose ol {
                margin: 2rem 0;
                padding-left: 2rem;
                position: relative;
              }
              
              .prose ul::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(180deg, var(--primary), var(--accent));
                border-radius: 1px;
              }
              
              .prose li {
                font-size: 1.25rem;
                line-height: 1.8;
                margin-bottom: 1rem;
                position: relative;
                padding-left: 1rem;
                font-weight: 400;
                letter-spacing: 0.01em;
              }
              
              .prose li::before {
                content: '•';
                position: absolute;
                left: 0;
                color: var(--primary);
                font-weight: 700;
                font-size: 1.5rem;
                top: -0.1rem;
              }
              
              .prose blockquote {
                border-left: 4px solid var(--primary);
                background: linear-gradient(135deg, var(--primary)/5, var(--accent)/5, var(--primary)/5);
                padding: 2rem 2.5rem;
                margin: 3rem 0;
                border-radius: 0 1rem 1rem 0;
                font-style: italic;
                font-size: 1.25rem;
                font-weight: 500;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                position: relative;
                color: var(--foreground);
              }
              
              .prose blockquote::before {
                content: '"';
                position: absolute;
                top: -1rem;
                left: 1rem;
                font-size: 6rem;
                color: var(--primary);
                opacity: 0.2;
                font-family: serif;
                line-height: 1;
              }
              
              .prose code {
                background: linear-gradient(135deg, var(--muted), var(--muted)/80);
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 1rem;
                font-family: 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
                color: var(--foreground);
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                border: 1px solid var(--border);
                font-weight: 500;
              }
              
              .prose pre {
                background: linear-gradient(135deg, var(--muted), var(--muted)/80);
                border: 1px solid var(--border);
                border-radius: 1rem;
                padding: 2rem;
                margin: 3rem 0;
                overflow-x: auto;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                position: relative;
                font-family: 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
              }
              
              .prose pre::before {
                content: '</>';
                position: absolute;
                top: 1rem;
                right: 1rem;
                color: var(--primary);
                font-weight: 700;
                font-size: 0.875rem;
              }
              
              .prose table {
                border-radius: 1rem;
                overflow: hidden;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                border: 1px solid var(--border);
                margin: 2rem 0;
                font-size: 1.25rem;
              }
              
              .prose th {
                background: linear-gradient(135deg, var(--primary)/10, var(--accent)/10);
                font-weight: 700;
                padding: 1.5rem;
                color: var(--primary);
                text-align: left;
              }
              
              .prose td {
                padding: 1.5rem;
                border-bottom: 1px solid var(--border);
              }
              
              .prose td:nth-child(even) {
                background: var(--muted)/30;
              }
              
              .prose a {
                color: var(--primary);
                text-decoration: none;
                font-weight: 600;
                transition: all 0.3s ease;
                border-bottom: 2px solid transparent;
                padding-bottom: 2px;
              }
              
              .prose a:hover {
                text-decoration: underline;
                text-decoration-thickness: 2px;
                text-underline-offset: 4px;
                color: var(--accent);
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          {/* Author Info & Share */}
          <div className="mt-16 p-8 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/40 rounded-2xl border border-border/50 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">{post.author}</h4>
                  <p className="text-lg text-muted-foreground mb-2">Especialista em Automação</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Verificado por especialistas</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center lg:items-end gap-4">
                <span className="text-lg font-semibold text-foreground">Compartilhar este artigo:</span>
                <div className="flex gap-3">
                  <button className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Artigos Relacionados
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Continue explorando conteúdo valioso sobre automação e tecnologia
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-gray-900 border border-border/50 hover:border-primary/20">
                    <CardHeader className="p-0">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${relatedPost.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        <Badge className="absolute top-4 left-4 bg-white/95 text-gray-900 hover:bg-white shadow-lg border-0">
                          {relatedPost.category}
                        </Badge>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                            <ArrowRight size={16} className="text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                        {relatedPost.title}
                      </h4>
                      <p className="text-muted-foreground text-base mb-6 line-clamp-3 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                            <Calendar size={14} />
                            {new Date(relatedPost.date).toLocaleDateString('pt-BR')}
                          </div>
                          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                            <Clock size={14} />
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group/link"
                      >
                        <span>Ler artigo completo</span>
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl border border-primary/20 shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Quer automatizar seus processos?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como podemos revolucionar seu negócio com automação inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contato@n8nexus.com.br"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Entrar em Contato
                </a>
                <a 
                  href="https://calendly.com/marco-florencio100/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agendar Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
