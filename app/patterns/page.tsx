"use client"
import Link from "next/link"

export default function MyPatternsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard" className="font-mono text-xs tracking-[0.25em] uppercase text-primary hover:opacity-70">
            ← STUDIO
          </Link>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-black text-primary text-center tracking-[0.2em] uppercase mb-2">
          MY PATTERNS
        </h1>
        <div className="w-full h-px bg-primary mb-12" />
        <p className="text-center font-mono text-sm tracking-[0.2em] uppercase text-primary/60 mt-20">
          YOUR SAVED PATTERNS WILL APPEAR HERE
        </p>
      </div>
    </main>
  )
}
