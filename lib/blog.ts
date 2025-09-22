import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
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

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Convert MDX to HTML
        const processedContent = await remark()
          .use(html)
          .process(content)
        const contentHtml = processedContent.toString()

        return {
          slug,
          content: contentHtml,
          ...data,
        } as BlogPost
      })
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert MDX to HTML
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      content: contentHtml,
      ...data,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getCategories(): string[] {
  // Return static categories for now
  return ['Todos', 'Automação', 'Tecnologia', 'AWS', 'IA', 'Negócios', 'Chatbots']
}
