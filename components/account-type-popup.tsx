"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

interface AccountTypePopupProps {
  onClose: () => void
}

export function AccountTypePopup({ onClose }: AccountTypePopupProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSelect = (type: "passion" | "business") => {
    router.push("/dashboard")
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-200 bg-foreground/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Choose account type"
    >
      <div className="relative w-full max-w-[440px] rounded-sm p-8 sm:p-10 animate-in zoom-in-95 duration-200 bg-background border-2 border-primary">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 transition-opacity hover:opacity-60 text-primary"
          aria-label="Close dialog"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        <h2 className="font-serif text-xl text-center mb-8 tracking-wide text-primary">
          What type of creator are you?
        </h2>

        <div className="flex flex-col gap-4">
          {/* Passion Card */}
          <button
            onClick={() => handleSelect("passion")}
            className="group flex flex-col items-start p-6 rounded-sm text-left transition-all hover:shadow-md border-[1.5px] border-primary bg-transparent hover:bg-primary"
          >
            <span className="text-xs tracking-[0.25em] uppercase font-semibold transition-colors text-primary group-hover:text-primary-foreground">
              Passion
            </span>
            <span className="text-sm mt-1.5 transition-colors text-foreground/70 group-hover:text-primary-foreground/70">
              For personal creative projects
            </span>
          </button>

          {/* Business Card */}
          <button
            onClick={() => handleSelect("business")}
            className="group flex flex-col items-start p-6 rounded-sm text-left transition-all hover:shadow-md border-[1.5px] border-primary bg-transparent hover:bg-primary"
          >
            <span className="text-xs tracking-[0.25em] uppercase font-semibold transition-colors text-primary group-hover:text-primary-foreground">
              Business
            </span>
            <span className="text-sm mt-1.5 transition-colors text-foreground/70 group-hover:text-primary-foreground/70">
              For professional & commercial use
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
