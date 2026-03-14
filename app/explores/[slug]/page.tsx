import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getPostSlugs } from '@/lib/mdx'
import PostLayout from '@/components/blog/PostLayout'
import mdxComponents from '@/components/blog/MdxComponents'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getPostSlugs('explores').map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug('explores', params.slug)
  if (!post) return {}
  return {
    title: `${post.meta.title} — FLOR Explores`,
    description: post.meta.description,
  }
}

export default function ExploresArticle({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('explores', params.slug)
  if (!post) notFound()

  return (
    <PostLayout meta={post.meta} pillar="explores">
      <MDXRemote source={post.content} components={mdxComponents} />
    </PostLayout>
  )
}
