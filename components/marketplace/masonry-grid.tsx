"use client"

import type { Pattern } from "@/lib/patterns-data"
import { PatternCard } from "./pattern-card"

interface MasonryGridProps {
  patterns: Pattern[]
}

export function MasonryGrid({ patterns }: MasonryGridProps) {
  // Split patterns into four columns for masonry effect
  const columns: Pattern[][] = [[], [], [], []]

  patterns.forEach((pattern, index) => {
    columns[index % 4].push(pattern)
  })

  if (patterns.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 md:px-10 lg:px-16">
        <p className="font-serif text-lg text-primary">No patterns found</p>
        <p className="mt-1 font-sans text-xs text-muted-foreground tracking-wide">
          Try adjusting your search or filters
        </p>
      </div>
    )
  }

  return (
    <section className="px-6 md:px-10 lg:px-16 pb-24" aria-label="Pattern grid">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.map((pattern) => (
              <PatternCard key={pattern.id} pattern={pattern} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
