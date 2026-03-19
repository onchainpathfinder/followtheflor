import React from 'react'
import type { MDXComponents } from 'mdx/types'
import Callout from '@/components/ui/Callout'
import Accordion from '@/components/ui/Accordion'
import StatHighlight from '@/components/ui/StatHighlight'
import ComparisonTable from '@/components/ui/ComparisonTable'
import StepList from '@/components/ui/StepList'

const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="article-h1" {...props} />,
  h2: (props) => <h2 className="article-h2" {...props} />,
  h3: (props) => <h3 className="article-h3" {...props} />,
  p: (props) => <p className="article-p" {...props} />,
  a: (props) => (
    <a
      className="article-link"
      target={typeof props.href === 'string' && props.href.startsWith('http') ? '_blank' : undefined}
      rel={typeof props.href === 'string' && props.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props) => <ul className="article-ul" {...props} />,
  ol: (props) => <ol className="article-ol" {...props} />,
  li: (props) => <li className="article-li" {...props} />,
  blockquote: (props) => <blockquote className="article-blockquote" {...props} />,
  code: (props) => <code className="article-code" {...props} />,
  pre: (props) => <pre className="article-pre" {...props} />,
  strong: (props) => <strong className="article-strong" {...props} />,
  em: (props) => <em className="article-em" {...props} />,
  hr: () => <hr className="article-hr" />,
  Callout,
  Accordion,
  StatHighlight,
  ComparisonTable,
  StepList,
}

export default mdxComponents
