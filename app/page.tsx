"use client"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center bg-background text-[#8B1A1A]">
      {/* Top left corner */}
      <div className="absolute top-6 left-6">
        <p className="text-[10px] font-light tracking-[0.25em] text-[#8B1A1A]">
          {"FASHION · PATTERN · STUDIO"}
        </p>
      </div>

      {/* Top right corner */}
      <div className="absolute top-6 right-6">
        <p className="text-[10px] font-light tracking-[0.25em] text-[#8B1A1A]">
          VERSION 1.0
        </p>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center gap-0">
        <Link href="/signin" className="cursor-pointer">
          <h1 className="font-serif text-[clamp(4rem,15vw,12rem)] font-black leading-none tracking-tight text-[#8B1A1A]">
            AI.TELIER
          </h1>
        </Link>
        <p
          className="mt-2 self-start whitespace-nowrap font-script text-2xl tracking-normal text-[#8B1A1A]"
          style={{ marginLeft: "74%", transform: "translateX(-50%)" }}
        >
          by design{' '}
        </p>
        <p className="mt-6 text-[10px] font-light tracking-[0.35em] text-[#8B1A1A]">
          {"AI POWERED FASHION PATTERNS · PRECISION CRAFTED FOR YOU"}
        </p>
      </div>
    </main>
  );
}
