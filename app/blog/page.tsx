import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getAllPosts, getCategories } from "@/lib/blog"

export default async function BlogPage() {
  const articles = await getAllPosts()
  const categories = getCategories()
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Blog <span className="text-primary">Nexus.ai</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Artigos, tutoriais e insights sobre automação, IA e transformação digital para acelerar seu negócio.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border border-gray-200">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors mb-3 line-clamp-2 text-gray-900">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm mb-4 line-clamp-3 text-gray-600">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Por {article.author}
                    </span>
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Ler mais
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Quer automatizar seus processos?
                </h3>
                <p className="text-gray-700 mb-6">
                  Entre em contato conosco e descubra como podemos revolucionar seu negócio com automação inteligente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:contato@n8nexus.com.br?subject=Contato via Blog Nexus.ai&body=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Enviar Email
                  </a>
                  <a 
                    href="https://wa.me/5511990099690?text=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <FooterLight />
    </main>
  )
}
