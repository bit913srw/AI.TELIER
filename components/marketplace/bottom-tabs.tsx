"use client"

import { ShoppingBag, Package, Tag } from "lucide-react"

export type TabValue = "browse" | "purchases" | "sell"

interface BottomTabsProps {
  activeTab: TabValue
  onTabChange: (tab: TabValue) => void
}

const tabs: { value: TabValue; label: string; icon: typeof ShoppingBag }[] = [
  { value: "browse", label: "Browse", icon: ShoppingBag },
  { value: "purchases", label: "My Purchases", icon: Package },
  { value: "sell", label: "Sell", icon: Tag },
]

export function BottomTabs({ activeTab, onTabChange }: BottomTabsProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex items-stretch max-w-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.value
          return (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={`relative flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <span className="absolute top-0 left-4 right-4 h-0.5 bg-primary" />
              )}
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase">
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
