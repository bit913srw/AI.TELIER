"use client"

import { useState, useMemo } from "react"
import { SlidersHorizontal, ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react"
import { patterns, type PatternCategory, categories } from "@/lib/patterns-data"
import { MarketplaceHeader } from "./header"
import { SearchFilters } from "./search-filters"
import { FeaturedSection } from "./featured-section"
import { MasonryGrid } from "./masonry-grid"
import { BottomTabs, type TabValue } from "./bottom-tabs"
import { SellTab } from "./sell-tab"
import { PurchasesTab } from "./purchases-tab"
import { CartProvider } from "./cart-context"
import { CartDrawer } from "./cart-drawer"

export function MarketplaceScreen() {
  const [activeTab, setActiveTab] = useState<TabValue>("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<PatternCategory>("ALL")

  const featuredPatterns = useMemo(
    () => patterns.filter((p) => p.featured),
    []
  )

  const filteredPatterns = useMemo(() => {
    return patterns.filter((pattern) => {
      const matchesSearch =
        searchQuery === "" ||
        pattern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.designer.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        activeCategory === "ALL" || pattern.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <MarketplaceHeader />

        {activeTab === "browse" && (
          <>
            <SearchFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <FeaturedSection patterns={featuredPatterns} />

            <div className="px-6 md:px-10 lg:px-16 py-3">
              <div className="h-px w-full bg-border" />
            </div>

            <AllPatternsHeader
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <MasonryGrid patterns={filteredPatterns} />
          </>
        )}

        {activeTab === "purchases" && <PurchasesTab />}
        {activeTab === "sell" && <SellTab />}

        <BottomTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <CartDrawer />
    </CartProvider>
  )
}

function AllPatternsHeader({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: PatternCategory
  onCategoryChange: (category: PatternCategory) => void
}) {
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [sortOrder, setSortOrder] = useState<"default" | "low" | "high">("default")

  return (
    <div className="px-6 md:px-10 lg:px-16 pt-2 pb-3">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary">
          All Patterns
        </h2>

        <div className="relative">
          <button
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className="flex items-center gap-1.5 border border-primary/30 px-3 py-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Filter and sort patterns"
            aria-expanded={showFilterMenu}
          >
            <SlidersHorizontal className="h-3 w-3" strokeWidth={1.5} />
            <span>Filter</span>
          </button>

          {showFilterMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowFilterMenu(false)}
              />
              <div className="absolute right-0 top-full z-50 mt-1.5 w-52 border border-border bg-card p-3 shadow-lg">
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Category
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        onCategoryChange(cat)
                      }}
                      className={`border px-2 py-1 font-sans text-[9px] tracking-[0.1em] uppercase transition-all ${
                        activeCategory === cat
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-primary/30 text-primary hover:border-primary/60"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="h-px w-full bg-border mb-3" />

                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Sort by Price
                </p>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => setSortOrder("low")}
                    className={`flex items-center gap-1.5 border px-2 py-1 font-sans text-[9px] tracking-[0.1em] uppercase transition-all ${
                      sortOrder === "low"
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/30 text-primary hover:border-primary/60"
                    }`}
                  >
                    <ArrowUpNarrowWide className="h-3 w-3" strokeWidth={1.5} />
                    <span>Low to High</span>
                  </button>
                  <button
                    onClick={() => setSortOrder("high")}
                    className={`flex items-center gap-1.5 border px-2 py-1 font-sans text-[9px] tracking-[0.1em] uppercase transition-all ${
                      sortOrder === "high"
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/30 text-primary hover:border-primary/60"
                    }`}
                  >
                    <ArrowDownNarrowWide className="h-3 w-3" strokeWidth={1.5} />
                    <span>High to Low</span>
                  </button>
                  <button
                    onClick={() => setSortOrder("default")}
                    className={`flex items-center gap-1.5 border px-2 py-1 font-sans text-[9px] tracking-[0.1em] uppercase transition-all ${
                      sortOrder === "default"
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/30 text-primary hover:border-primary/60"
                    }`}
                  >
                    <span>Default</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
