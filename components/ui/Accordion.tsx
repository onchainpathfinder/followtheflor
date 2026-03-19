'use client'

import React, { useState } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`accordion ${open ? 'accordion--open' : ''}`}>
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="accordion-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  )
}
