"use client"

import type { Pattern } from "@/lib/patterns-data"
import { PatternCard } from "./pattern-card"

interface FeaturedSectionProps {
  patterns: Pattern[]
}

export function FeaturedSection({ patterns }: FeaturedSectionProps) {
  if (patterns.length === 0) return null

  return (
    <section className="px-6 md:px-10 lg:px-16 py-4" aria-label="Featured patterns">
      <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
        Featured
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} size="featured" />
        ))}
      </div>
    </section>
  )
}
