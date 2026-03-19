'use client'

import React from 'react'

interface StepListProps {
  /** Steps formatted as "Title :: Description" separated by ";;" */
  steps: string
}

export default function StepList({ steps }: StepListProps) {
  const parsed = steps.split(';;').map((s) => {
    const [title, description] = s.split('::').map((p) => p.trim())
    return { title, description }
  })

  return (
    <div className="step-list">
      {parsed.map((step, i) => (
        <div key={i} className="step-item">
          <div className="step-number">{i + 1}</div>
          <div className="step-content">
            <div className="step-title">{step.title}</div>
            <div className="step-description">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
