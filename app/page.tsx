"use client"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center bg-background text-foreground">
      {/* Top left corner */}
      <div className="absolute top-6 left-6">
        <p className="text-[10px] font-light tracking-[0.25em] text-foreground">
          {"FASHION \u00B7 PATTERN \u00B7 STUDIO"}
        </p>
      </div>

      {/* Top right corner */}
      <div className="absolute top-6 right-6">
        <p className="text-[10px] font-light tracking-[0.25em] text-foreground">
          VERSION 1.0
        </p>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center gap-0">
        {/* Masthead */}
        <Link href="/signin"><h1 className="font-serif text-[clamp(4rem,15vw,12rem)] font-black leading-none tracking-tight text-foreground cursor-pointer">
          AI.TELIER
        </h1>

        {/* "by design" — centered between mid-E and mid-R of AI.TELIER (~72% from left) */}
        <p
          className="mt-2 self-start whitespace-nowrap font-sans text-lg font-light italic tracking-[0.1em] text-foreground"
          style={{ marginLeft: '74%', transform: 'translateX(-50%)' }}
        >
          by design
        </p>

        {/* Tagline */}
        <p className="mt-6 text-[10px] font-light tracking-[0.35em] text-[#8B1A1A]">
          {"AI POWERED FASHION PATTERNS \u00B7 PRECISION CRAFTED FOR YOU"}
        </p>
      </div>

      
    </main>
  );
}
