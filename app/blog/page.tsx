import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { BlogFilter } from "@/components/blog-filter"
import { getAllPosts, getCategories } from "@/lib/blog"

export default async function BlogPage() {
  const articles = await getAllPosts()
  const categories = getCategories()
  return (
    <main className="min-h-screen bg-white">
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