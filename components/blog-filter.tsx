'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Badge 
            key={category}
            variant={category === selectedCategory ? "default" : "outline"}
            className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
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
              <Link href={`/blog/${article.slug}`}>
                <CardTitle className="text-lg group-hover:text-primary transition-colors mb-3 line-clamp-2 text-gray-900 cursor-pointer hover:text-primary">
                  {article.title}
                </CardTitle>
              </Link>
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

      {/* No results message */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhum artigo encontrado para a categoria "{selectedCategory}".
          </p>
        </div>
      )}
    </>
  )
}
