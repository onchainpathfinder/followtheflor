'use client'

import React from 'react'

interface StatHighlightProps {
  value: string
  label: string
  accent?: 'pink' | 'cyan' | 'yellow'
}

export default function StatHighlight({ value, label, accent = 'cyan' }: StatHighlightProps) {
  return (
    <div className={`stat-highlight stat-highlight--${accent}`}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
