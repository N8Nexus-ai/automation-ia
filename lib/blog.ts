import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'content/blog')

function normalizePostHtml(htmlContent: string) {
  return htmlContent
    .replace(/<h1(\s|>)/g, '<h2$1')
    .replace(/<\/h1>/g, '</h2>')
}

async function renderPostContent(content: string) {
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content)

  return normalizePostHtml(processedContent.toString())
}

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

        const contentHtml = await renderPostContent(content)

        return {
          slug,
          content: contentHtml,
          ...data,
        } as BlogPost
      })
  )

  return allPostsData.sort((a, b) => {
    if (a.date === b.date) {
      return a.title.localeCompare(b.title, 'pt-BR')
    }

    return a.date < b.date ? 1 : -1
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const contentHtml = await renderPostContent(content)

    return {
      slug,
      content: contentHtml,
      ...data,
    } as BlogPost
  } catch {
    return null
  }
}

export function getCategories(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const categories = new Set<string>()

  fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .forEach((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      if (typeof data.category === 'string' && data.category.trim()) {
        categories.add(data.category)
      }
    })

  return ['Todos', ...Array.from(categories).sort((a, b) => a.localeCompare(b, 'pt-BR'))]
}
