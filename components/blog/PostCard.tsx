import type { PostMeta } from '@/lib/mdx'

export default function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <a href={`/${post.pillar}/${post.slug}`} className="post-card">
      <span className="post-card-tag">{post.tags[0]}</span>
      <h3 className="post-card-title">{post.title}</h3>
      <p className="post-card-desc">{post.description}</p>
      <div className="post-card-meta">
        <span>{formattedDate}</span>
        <span>{post.readingTime}</span>
      </div>
    </a>
  )
}
