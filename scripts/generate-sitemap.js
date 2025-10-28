const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Configuration
const baseUrl = 'https://n8nexus.com.br'
const blogDir = path.join(process.cwd(), 'content/blog')
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml')

// Static pages
const staticPages = [
  {
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: '1.0',
  },
  {
    url: `${baseUrl}/sobre/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: '0.8',
  },
  {
    url: `${baseUrl}/servicos/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: '0.9',
  },
  {
    url: `${baseUrl}/automacao-processos/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: '0.8',
  },
  {
    url: `${baseUrl}/integracao-aws/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: '0.8',
  },
  {
    url: `${baseUrl}/infraestrutura-n8n/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: '0.8',
  },
  {
    url: `${baseUrl}/contato/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: '0.7',
  },
  {
    url: `${baseUrl}/blog/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: '0.7',
  },
  {
    url: `${baseUrl}/termos/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: '0.5',
  },
  {
    url: `${baseUrl}/privacidade/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: '0.5',
  },
]

// Get all blog posts
function getBlogPosts() {
  const fileNames = fs.readdirSync(blogDir)
  const posts = []

  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.mdx')) {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(blogDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      posts.push({
        url: `${baseUrl}/blog/${slug}/`,
        lastModified: new Date(data.date).toISOString(),
        changeFrequency: 'monthly',
        priority: '0.6',
      })
    }
  })

  return posts
}

// Generate sitemap
function generateSitemap() {
  const blogPosts = getBlogPosts()
  const allPages = [...staticPages, ...blogPosts]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  fs.writeFileSync(outputPath, sitemap, 'utf8')
  console.log(`✅ Sitemap generated successfully at ${outputPath}`)
  console.log(`📄 Total URLs: ${allPages.length}`)
}

generateSitemap()
