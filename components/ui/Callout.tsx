'use client'

import React from 'react'

interface CalloutProps {
  type?: 'tip' | 'warning' | 'insight' | 'compliance'
  title?: string
  children: React.ReactNode
}

const icons: Record<string, string> = {
  tip: '💡',
  warning: '⚠️',
  insight: '🔍',
  compliance: '🛡️',
}

export default function Callout({ type = 'tip', title, children }: CalloutProps) {
  return (
    <div className={`callout callout--${type}`}>
      <div className="callout-header">
        <span className="callout-icon">{icons[type]}</span>
        {title && <span className="callout-title">{title}</span>}
      </div>
      <div className="callout-body">{children}</div>
    </div>
  )
}
