'use client'

import React from 'react'

interface ComparisonTableProps {
  /** Pipe-separated headers, e.g. "Col A | Col B | Col C" */
  headers: string
  /** Rows separated by ;; with cells separated by |, e.g. "a | b | c ;; d | e | f" */
  rows: string
}

export default function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  const headerCells = headers.split('|').map((h) => h.trim())
  const dataRows = rows.split(';;').map((row) => row.split('|').map((cell) => cell.trim()))

  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            {headerCells.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
