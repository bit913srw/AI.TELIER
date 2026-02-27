"use client"

import { Search } from "lucide-react"
import { type PatternCategory, categories } from "@/lib/patterns-data"

interface SearchFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  activeCategory: PatternCategory
  onCategoryChange: (category: PatternCategory) => void
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: SearchFiltersProps) {
  return (
    <div className="px-6 md:px-10 lg:px-16 py-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-primary/50" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search patterns..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-none border border-primary/30 bg-transparent py-2.5 pl-9 pr-4 font-sans text-xs tracking-wide text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide" role="tablist" aria-label="Pattern categories">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => onCategoryChange(category)}
            className={`shrink-0 border px-3.5 py-1.5 font-sans text-[10px] tracking-[0.15em] uppercase transition-all ${
              activeCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/30 bg-transparent text-primary hover:border-primary/60"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
