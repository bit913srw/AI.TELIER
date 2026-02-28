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
    // Navigate to dashboard after selecting account type
    router.push("/dashboard")
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-200"
      style={{ backgroundColor: "rgba(42,42,42,0.5)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Choose account type"
    >
      <div
        className="relative w-full max-w-[440px] rounded-sm p-8 sm:p-10 animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: "#F0EDE8",
          border: "2px solid #8B1A1A",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 transition-opacity hover:opacity-60"
          style={{ color: "#8B1A1A" }}
          aria-label="Close dialog"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        <h2
          className="font-serif text-xl text-center mb-8 tracking-wide"
          style={{ color: "#8B1A1A" }}
        >
          What type of creator are you?
        </h2>

        <div className="flex flex-col gap-4">
          {/* Passion Card */}
          <button
            onClick={() => handleSelect("passion")}
            className="group flex flex-col items-start p-6 rounded-sm text-left transition-all hover:shadow-md"
            style={{
              border: "1.5px solid #8B1A1A",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#8B1A1A"
              e.currentTarget.querySelectorAll<HTMLElement>("[data-title]").forEach(
                (el) => (el.style.color = "#F0EDE8")
              )
              e.currentTarget.querySelectorAll<HTMLElement>("[data-desc]").forEach(
                (el) => (el.style.color = "rgba(240,237,232,0.7)")
              )
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.querySelectorAll<HTMLElement>("[data-title]").forEach(
                (el) => (el.style.color = "#8B1A1A")
              )
              e.currentTarget.querySelectorAll<HTMLElement>("[data-desc]").forEach(
                (el) => (el.style.color = "#6B6560")
              )
            }}
          >
            <span
              data-title=""
              className="text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
              style={{ color: "#8B1A1A" }}
            >
              Passion
            </span>
            <span
              data-desc=""
              className="text-sm mt-1.5 transition-colors"
              style={{ color: "#6B6560" }}
            >
              For personal creative projects
            </span>
          </button>

          {/* Business Card */}
          <button
            onClick={() => handleSelect("business")}
            className="group flex flex-col items-start p-6 rounded-sm text-left transition-all hover:shadow-md"
            style={{
              border: "1.5px solid #8B1A1A",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#8B1A1A"
              e.currentTarget.querySelectorAll<HTMLElement>("[data-title]").forEach(
                (el) => (el.style.color = "#F0EDE8")
              )
              e.currentTarget.querySelectorAll<HTMLElement>("[data-desc]").forEach(
                (el) => (el.style.color = "rgba(240,237,232,0.7)")
              )
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.querySelectorAll<HTMLElement>("[data-title]").forEach(
                (el) => (el.style.color = "#8B1A1A")
              )
              e.currentTarget.querySelectorAll<HTMLElement>("[data-desc]").forEach(
                (el) => (el.style.color = "#6B6560")
              )
            }}
          >
            <span
              data-title=""
              className="text-xs tracking-[0.25em] uppercase font-semibold transition-colors"
              style={{ color: "#8B1A1A" }}
            >
              Business
            </span>
            <span
              data-desc=""
              className="text-sm mt-1.5 transition-colors"
              style={{ color: "#6B6560" }}
            >
              For professional & commercial use
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
