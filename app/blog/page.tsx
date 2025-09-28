import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Card, CardContent } from "@/components/ui/card"
import { BlogFilter } from "@/components/blog-filter"
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

          {/* Blog Filter Component */}
          <BlogFilter articles={articles} categories={categories} />

          {/* CTA Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-300">
                  Quer automatizar seus processos?
                </h3>
                <p className="text-gray-400 mb-6">
                  Entre em contato conosco e descubra como podemos revolucionar seu negócio com automação inteligente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:contato@n8nexus.com.br?subject=Contato via Blog Nexus.ai&body=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                  >
                    Enviar Email
                  </a>
                  <a 
                    href="https://wa.me/5511990099690?text=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
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
