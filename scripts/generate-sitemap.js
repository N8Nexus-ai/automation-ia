const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Configuration
const baseUrl = 'https://n8nexus.com.br'
const blogDir = path.join(process.cwd(), 'content/blog')
const appDir = path.join(process.cwd(), 'app')
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml')

function getLastModified(filePath) {
  try {
    const { mtime } = fs.statSync(filePath)
    return mtime.toISOString()
  } catch (error) {
    return new Date().toISOString()
  }
}

function getPostChangeFrequency(postDate) {
  const now = new Date()
  const date = postDate ? new Date(postDate) : now
  if (Number.isNaN(date.getTime())) {
    return 'yearly'
  }
  const daysOld = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)

  return daysOld > 365 ? 'yearly' : 'monthly'
}

function getPostLastModified(postDate) {
  const date = postDate ? new Date(postDate) : new Date()
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString()
  }

  return date.toISOString()
}

// Static pages
const staticPages = [
  {
    url: baseUrl,
    filePath: path.join(appDir, 'page.tsx'),
    changeFrequency: 'weekly',
    priority: '1.0',
  },
  {
    url: `${baseUrl}/sobre/`,
    filePath: path.join(appDir, 'sobre', 'page.tsx'),
    changeFrequency: 'monthly',
    priority: '0.7',
  },
  {
    url: `${baseUrl}/servicos/`,
    filePath: path.join(appDir, 'servicos', 'page.tsx'),
    changeFrequency: 'monthly',
    priority: '0.9',
  },
  {
    url: `${baseUrl}/automacao-processos/`,
    filePath: path.join(appDir, 'automacao-processos', 'page.tsx'),
    changeFrequency: 'monthly',
    priority: '0.9',
  },
  {
    url: `${baseUrl}/integracao-aws/`,
    filePath: path.join(appDir, 'integracao-aws', 'page.tsx'),
    changeFrequency: 'monthly',
    priority: '0.8',
  },
  {
    url: `${baseUrl}/infraestrutura-n8n/`,
    filePath: path.join(appDir, 'infraestrutura-n8n', 'page.tsx'),
    changeFrequency: 'monthly',
    priority: '0.8',
  },
  {
    url: `${baseUrl}/contato/`,
    filePath: path.join(appDir, 'contato', 'page.tsx'),
    changeFrequency: 'monthly',
    priority: '0.7',
  },
  {
    url: `${baseUrl}/blog/`,
    filePath: path.join(appDir, 'blog', 'page.tsx'),
    changeFrequency: 'weekly',
    priority: '0.7',
  },
  {
    url: `${baseUrl}/termos/`,
    filePath: path.join(appDir, 'termos', 'page.tsx'),
    changeFrequency: 'yearly',
    priority: '0.5',
  },
  {
    url: `${baseUrl}/privacidade/`,
    filePath: path.join(appDir, 'privacidade', 'page.tsx'),
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
        lastModified: getPostLastModified(data.date),
        changeFrequency: getPostChangeFrequency(data.date),
        priority: '0.6',
      })
    }
  })

  return posts
}

// Generate sitemap
function generateSitemap() {
  const blogPosts = getBlogPosts()
  const staticEntries = staticPages.map((page) => ({
    ...page,
    lastModified: getLastModified(page.filePath),
  }))
  const allPages = [...staticEntries, ...blogPosts]

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
