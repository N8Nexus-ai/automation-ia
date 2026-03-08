import type { MetadataRoute } from 'next'

import fs from 'fs/promises'
import path from 'path'

import { getAllPosts } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://n8nexus.com.br'
const appDir = path.join(process.cwd(), 'app')

const staticPages = [
  {
    route: '',
    changeFrequency: 'weekly',
    priority: 1,
    filePath: path.join(appDir, 'page.tsx'),
  },
  {
    route: '/sobre',
    changeFrequency: 'monthly',
    priority: 0.7,
    filePath: path.join(appDir, 'sobre', 'page.tsx'),
  },
  {
    route: '/servicos',
    changeFrequency: 'monthly',
    priority: 0.9,
    filePath: path.join(appDir, 'servicos', 'page.tsx'),
  },
  {
    route: '/automacao-processos',
    changeFrequency: 'monthly',
    priority: 0.9,
    filePath: path.join(appDir, 'automacao-processos', 'page.tsx'),
  },
  {
    route: '/integracao-aws',
    changeFrequency: 'monthly',
    priority: 0.8,
    filePath: path.join(appDir, 'integracao-aws', 'page.tsx'),
  },
  {
    route: '/infraestrutura-n8n',
    changeFrequency: 'monthly',
    priority: 0.8,
    filePath: path.join(appDir, 'infraestrutura-n8n', 'page.tsx'),
  },
  {
    route: '/contato',
    changeFrequency: 'monthly',
    priority: 0.7,
    filePath: path.join(appDir, 'contato', 'page.tsx'),
  },
  {
    route: '/blog',
    changeFrequency: 'weekly',
    priority: 0.7,
    filePath: path.join(appDir, 'blog', 'page.tsx'),
  },
  {
    route: '/privacidade',
    changeFrequency: 'yearly',
    priority: 0.5,
    filePath: path.join(appDir, 'privacidade', 'page.tsx'),
  },
  {
    route: '/termos',
    changeFrequency: 'yearly',
    priority: 0.5,
    filePath: path.join(appDir, 'termos', 'page.tsx'),
  },
]

async function getLastModified(filePath: string): Promise<Date> {
  try {
    const stats = await fs.stat(filePath)
    return stats.mtime
  } catch {
    return new Date()
  }
}

function getPostChangeFrequency(date: Date, now: Date): MetadataRoute.Sitemap[number]['changeFrequency'] {
  const daysOld = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  return daysOld > 365 ? 'yearly' : 'monthly'
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = await Promise.all(
    staticPages.map(async (page) => ({
      url: `${baseUrl}${page.route}`,
      lastModified: await getLastModified(page.filePath),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  )

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const postDate = post.date ? new Date(post.date) : now
    const safeDate = Number.isNaN(postDate.getTime()) ? now : postDate

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: safeDate,
      changeFrequency: getPostChangeFrequency(safeDate, now),
      priority: 0.6,
    }
  })

  return [...staticEntries, ...postEntries]
}

export async function generateStaticParams() {
  return [
    {
      __metadata_id__: 'sitemap.xml',
    },
  ]
}
