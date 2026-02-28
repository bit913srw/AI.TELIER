"use client"

import { useState } from "react"
import Link from "next/link"

interface IndexRowProps {
  number: string
  title: string
  href: string
}

export function IndexRow({ number, title, href }: IndexRowProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      prefetch={false}
    >
      <div className="flex items-start gap-6 py-7 px-2 md:gap-10 md:py-9 transition-colors duration-300 hover:bg-[#E8E4DD]/50">
        <span
          className="font-serif text-primary text-4xl md:text-6xl lg:text-7xl font-bold leading-none select-none transition-transform duration-300 min-w-[3rem] md:min-w-[5rem]"
          style={{
            transform: isHovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          {number}
        </span>
        <div className="flex items-center pt-1 md:pt-2">
          <h2
            className="font-serif text-primary text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              letterSpacing: isHovered ? "0.15em" : "0.08em",
            }}
          >
            {title}
          </h2>
        </div>
      </div>
      <div
        className="h-px w-full transition-colors duration-300"
        style={{
          backgroundColor: isHovered
            ? "var(--primary)"
            : "rgba(139, 26, 26, 0.2)",
        }}
      />
    </Link>
  )
}
