import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  description: string
  date: string
  pillar: 'onchain' | 'runs' | 'explores'
  tags: string[]
  primaryKeyword: string
  readingTime: string
  slug: string
  region?: string
}

const contentDir = path.join(process.cwd(), 'content')

export function getAllPosts(): PostMeta[] {
  const pillars = ['onchain', 'runs', 'explores']
  const posts: PostMeta[] = []

  for (const pillar of pillars) {
    posts.push(...getPostsByPillar(pillar))
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByPillar(pillar: string): PostMeta[] {
  const pillarDir = path.join(contentDir, pillar)

  if (!fs.existsSync(pillarDir)) return []

  const files = fs.readdirSync(pillarDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const filePath = path.join(pillarDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      const slug = filename.replace(/\.mdx$/, '')

      return {
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        pillar: data.pillar || pillar,
        tags: data.tags || [],
        primaryKeyword: data.primaryKeyword || '',
        readingTime: data.readingTime || '',
        slug,
        region: data.region || undefined,
      } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(
  pillar: string,
  slug: string
): { meta: PostMeta; content: string } | null {
  const filePath = path.join(contentDir, pillar, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    meta: {
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      pillar: data.pillar || pillar,
      tags: data.tags || [],
      primaryKeyword: data.primaryKeyword || '',
      readingTime: data.readingTime || '',
      slug,
      region: data.region || undefined,
    },
    content,
  }
}

export function getPostsByPillarAndRegion(pillar: string, region: string): PostMeta[] {
  return getPostsByPillar(pillar).filter((post) => post.region === region)
}

export function getPostSlugs(pillar: string): string[] {
  const pillarDir = path.join(contentDir, pillar)

  if (!fs.existsSync(pillarDir)) return []

  return fs
    .readdirSync(pillarDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
