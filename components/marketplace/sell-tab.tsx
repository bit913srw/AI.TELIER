"use client"

import { Plus, Pencil } from "lucide-react"
import Image from "next/image"
import { userPatterns } from "@/lib/patterns-data"

export function SellTab() {
  return (
    <section className="px-6 md:px-10 lg:px-16 pb-24" aria-label="Your patterns for sale">
      <div className="flex items-center justify-between py-4">
        <h2 className="font-serif text-lg text-primary tracking-wide">
          Your Patterns for Sale
        </h2>
        <button className="flex items-center gap-1.5 border border-primary px-3 py-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          <span>List New Pattern</span>
          <Plus className="h-3 w-3" strokeWidth={2} />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {userPatterns.map((pattern) => (
          <article
            key={pattern.id}
            className="flex gap-3 border border-border bg-card p-3"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden">
              <Image
                src={pattern.image}
                alt={pattern.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-serif text-sm text-foreground">{pattern.title}</h3>
                <p className="mt-0.5 font-sans text-xs text-primary font-bold">
                  {"$"}{pattern.price}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] tracking-wide text-muted-foreground uppercase">
                  {pattern.sales} sales
                </span>
                <button
                  className="flex items-center gap-1 text-primary font-sans text-[10px] tracking-[0.1em] uppercase hover:opacity-70 transition-opacity"
                  aria-label={`Edit ${pattern.title}`}
                >
                  <Pencil className="h-3 w-3" strokeWidth={1.5} />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {userPatterns.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="font-serif text-lg text-primary">No patterns listed</p>
          <p className="mt-1 font-sans text-xs text-muted-foreground tracking-wide">
            Start selling your designs to the community
          </p>
        </div>
      )}
    </section>
  )
}
