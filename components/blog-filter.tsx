'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  gradient: string
  content: string
}

interface BlogFilterProps {
  articles: BlogPost[]
  categories: string[]
}

export function BlogFilter({ articles, categories }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              category === selectedCategory
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, index) => (
          <Link href={`/blog/${article.slug}`} key={article.slug} className="group">
            <Card className="h-full overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-white/95 text-gray-900 font-medium shadow-sm">
                  {article.category}
                </Badge>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Ler artigo</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* No results message */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            Nenhum artigo encontrado para a categoria "{selectedCategory}".
          </p>
        </div>
      )}
    </>
  )
}