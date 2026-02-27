"use client"

import { Download } from "lucide-react"
import Image from "next/image"
import { purchasedPatterns } from "@/lib/patterns-data"

export function PurchasesTab() {
  return (
    <section className="px-6 md:px-10 lg:px-16 pb-24" aria-label="Your purchased patterns">
      <div className="py-4">
        <h2 className="font-serif text-lg text-primary tracking-wide">
          My Purchases
        </h2>
        <p className="mt-0.5 font-sans text-[10px] tracking-wide text-muted-foreground uppercase">
          Redownload anytime from cloud
        </p>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-1 flex-col gap-3">
          {purchasedPatterns
            .filter((_, i) => i % 2 === 0)
            .map((pattern) => (
              <PurchaseCard key={pattern.id} pattern={pattern} />
            ))}
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {purchasedPatterns
            .filter((_, i) => i % 2 !== 0)
            .map((pattern) => (
              <PurchaseCard key={pattern.id} pattern={pattern} />
            ))}
        </div>
      </div>

      {purchasedPatterns.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="font-serif text-lg text-primary">No purchases yet</p>
          <p className="mt-1 font-sans text-xs text-muted-foreground tracking-wide">
            Browse the marketplace to find patterns
          </p>
        </div>
      )}
    </section>
  )
}

function PurchaseCard({ pattern }: { pattern: (typeof purchasedPatterns)[number] }) {
  return (
    <article className="group relative overflow-hidden">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={pattern.image}
          alt={`${pattern.title} by ${pattern.designer}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-serif text-sm leading-tight text-white">{pattern.title}</h3>
          <span className="mt-0.5 block font-sans text-[10px] tracking-wide text-white/70 uppercase">
            {pattern.designer}
          </span>
          <button
            className="mt-2 flex w-full items-center justify-center gap-1.5 bg-primary py-2 font-sans text-[10px] tracking-[0.15em] uppercase text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label={`Download ${pattern.title}`}
          >
            <span>Download</span>
            <Download className="h-3 w-3" strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  )
}
