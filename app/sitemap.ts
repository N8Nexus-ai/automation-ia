import type { MetadataRoute } from 'next'

import { getAllPosts } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://n8nexus.com.br'

const staticRoutes = [
  '',
  '/sobre',
  '/servicos',
  '/automacao-processos',
  '/infraestrutura-n8n',
  '/integracao-aws',
  '/contato',
  '/blog',
  '/privacidade',
  '/termos',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticEntries, ...postEntries]
}
