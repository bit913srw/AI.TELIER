"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

const MEASUREMENT_FIELDS = [
  "Bust",
  "Waist",
  "Hips",
  "Inseam",
  "Shoulder Width",
  "Sleeve Length",
  "Back Length",
  "Front Length",
  "Neck",
  "Thigh",
  "Knee",
  "Ankle",
] as const

interface ProfileDetailProps {
  profileName: string
  onBack: () => void
}

export function ProfileDetail({ profileName, onBack }: ProfileDetailProps) {
  const [unit, setUnit] = useState<"IN" | "CM">("IN")
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(MEASUREMENT_FIELDS.map((f) => [f, ""]))
  )

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 pt-6 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-primary text-xs tracking-[0.15em] uppercase font-mono hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          aria-label="Back to profiles"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>

        {/* Unit toggle */}
        <div className="flex items-center gap-0 border border-foreground/20 rounded-sm overflow-hidden" role="radiogroup" aria-label="Measurement unit">
          <button
            role="radio"
            aria-checked={unit === "IN"}
            onClick={() => setUnit("IN")}
            className={`px-3 py-1 text-xs tracking-[0.1em] font-mono transition-colors ${
              unit === "IN"
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-foreground/50 hover:text-foreground/80"
            }`}
          >
            IN
          </button>
          <button
            role="radio"
            aria-checked={unit === "CM"}
            onClick={() => setUnit("CM")}
            className={`px-3 py-1 text-xs tracking-[0.1em] font-mono transition-colors ${
              unit === "CM"
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-foreground/50 hover:text-foreground/80"
            }`}
          >
            CM
          </button>
        </div>
      </header>

      {/* Title */}
      <div className="px-6 pb-6 pt-2">
        <h1 className="font-serif text-2xl text-foreground tracking-wide text-center text-balance">
          {profileName}
        </h1>
        <div className="mt-3 mx-auto w-16 h-px bg-primary" />
      </div>

      {/* Measurement fields */}
      <div className="flex-1 px-6 pb-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
          {MEASUREMENT_FIELDS.map((field) => (
            <div key={field} className="flex flex-col gap-1.5">
              <label
                htmlFor={`field-${field}`}
                className="text-foreground/60 text-[11px] tracking-[0.15em] uppercase font-mono"
              >
                {field}
              </label>
              <input
                id={`field-${field}`}
                type="text"
                inputMode="decimal"
                value={values[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                placeholder="--"
                className="bg-transparent border-b border-foreground/20 rounded-none px-1 py-2.5 text-foreground font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Save button */}
      <div className="px-6 pb-8 pt-2">
        <button
          className="w-full bg-primary text-primary-foreground font-mono text-sm tracking-[0.2em] uppercase py-3.5 rounded-sm hover:bg-primary/90 active:bg-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          Save
        </button>
      </div>
    </div>
  )
}
