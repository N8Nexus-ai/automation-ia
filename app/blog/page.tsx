import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getAllPosts, getCategories } from "@/lib/blog"

export default async function BlogPage() {
  const articles = await getAllPosts()
  const categories = getCategories()
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog <span className="text-primary">Nexus.ai</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Artigos, tutoriais e insights sobre automação, IA e transformação digital para acelerar seu negócio.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                  <CardTitle className="text-xl group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
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
                    <span className="text-sm text-muted-foreground">
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

          {/* Newsletter CTA */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Fique por dentro das novidades
                </h3>
                <p className="text-muted-foreground mb-6">
                  Receba nossos melhores artigos e insights sobre automação diretamente no seu email.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Seu email"
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Inscrever-se
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
