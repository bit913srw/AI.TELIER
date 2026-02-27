"use client"

import { ArrowLeft, ShoppingCart } from "lucide-react"
import { useCart } from "./cart-context"

export function MarketplaceHeader() {
  const { totalItems, setIsOpen } = useCart()

  return (
    <header className="px-6 md:px-10 lg:px-16 pt-5 pb-3">
      <div className="flex items-center justify-between">
        <button
          className="flex items-center gap-1.5 text-primary font-sans text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          aria-label="Back to Studio"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>Studio</span>
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="relative p-1.5 text-primary transition-opacity hover:opacity-70"
          aria-label={`Shopping cart with ${totalItems} items`}
        >
          <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center bg-primary text-primary-foreground font-sans text-[9px] font-bold rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      <div className="mt-4 text-center">
        <h1 className="font-serif text-2xl tracking-[0.08em] text-primary">
          MARKETPLACE
        </h1>
        <div className="mx-auto mt-2 h-px w-20 bg-primary" />
      </div>
    </header>
  )
}
