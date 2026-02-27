"use client"

import { Heart, Plus, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import type { Pattern } from "@/lib/patterns-data"
import { useCart } from "./cart-context"

interface PatternCardProps {
  pattern: Pattern
  size?: "default" | "featured"
}

const heightMap = {
  tall: "aspect-[3/4]",
  medium: "aspect-[4/4]",
  short: "aspect-[5/4]",
}

export function PatternCard({ pattern, size = "default" }: PatternCardProps) {
  const [liked, setLiked] = useState(pattern.liked)
  const { items, addToCart } = useCart()
  const isInCart = items.some((item) => item.pattern.id === pattern.id)

  return (
    <article
      className="group relative overflow-hidden"
    >
      <div
        className={`relative w-full overflow-hidden ${
          size === "featured" ? "aspect-[3/4]" : heightMap[pattern.height]
        }`}
      >
        <Image
          src={pattern.image}
          alt={`${pattern.title} by ${pattern.designer}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={size === "featured" ? "33vw" : "(max-width: 768px) 50vw, 25vw"}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badge top-left */}
        <span className="absolute left-2 top-2 bg-background/90 px-2 py-0.5 font-sans text-[8px] tracking-[0.2em] uppercase text-primary">
          {pattern.badge}
        </span>

        {/* Heart top-right */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-2 top-2 p-1 transition-transform hover:scale-110"
          aria-label={liked ? "Unlike pattern" : "Like pattern"}
        >
          <Heart
            className={`h-4 w-4 ${
              liked
                ? "fill-primary text-primary"
                : "fill-transparent text-background/80"
            } transition-colors`}
            strokeWidth={1.5}
          />
        </button>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-serif text-sm leading-tight text-white text-balance">
            {pattern.title}
          </h3>
          <div className="mt-1 flex items-center justify-between">
            <span className="font-sans text-[10px] tracking-wide text-white/70 uppercase">
              {pattern.designer}
            </span>
            <span className="font-sans text-xs font-bold tracking-wide text-primary bg-background/90 px-1.5 py-0.5">
              {"$"}{pattern.price}
            </span>
          </div>
        </div>

        {/* Add to cart button - appears on hover */}
        <button
          onClick={() => addToCart(pattern)}
          disabled={isInCart}
          className={`absolute bottom-14 right-2 flex items-center gap-1.5 px-2.5 py-1.5 font-sans text-[9px] tracking-[0.15em] uppercase transition-all duration-300 ${
            isInCart
              ? "bg-primary text-primary-foreground opacity-100"
              : "bg-background/95 text-primary opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
          }`}
          aria-label={isInCart ? "Already in cart" : `Add ${pattern.title} to cart`}
        >
          {isInCart ? (
            <>
              <Check className="h-3 w-3" strokeWidth={2} />
              <span>In Cart</span>
            </>
          ) : (
            <>
              <Plus className="h-3 w-3" strokeWidth={2} />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </article>
  )
}
