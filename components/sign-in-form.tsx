"use client"

import { useState } from "react"

interface SignInFormProps {
  onSwitchTab: () => void
}

export function SignInForm({ onSwitchTab }: SignInFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p
        className="font-script text-4xl sm:text-5xl mb-2"
        style={{ color: "#F0EDE8" }}
      >
        Welcome Back
      </p>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="signin-email"
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{ color: "rgba(240,237,232,0.7)" }}
        >
          Email Address
        </label>
        <input
          id="signin-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 px-4 text-sm rounded-sm outline-none transition-shadow focus:ring-2 focus:ring-[#F0EDE8]/30"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#2A2A2A",
          }}
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="signin-password"
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{ color: "rgba(240,237,232,0.7)" }}
        >
          Password
        </label>
        <input
          id="signin-password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 px-4 text-sm rounded-sm outline-none transition-shadow focus:ring-2 focus:ring-[#F0EDE8]/30"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#2A2A2A",
          }}
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="mt-2 h-12 text-xs tracking-[0.25em] uppercase font-semibold rounded-sm transition-all hover:opacity-90 active:scale-[0.98]"
        style={{
          backgroundColor: "#F0EDE8",
          color: "#8B1A1A",
        }}
      >
        Sign In
      </button>

      <p className="text-center text-xs mt-1" style={{ color: "rgba(240,237,232,0.6)" }}>
        {"New here? "}
        <button
          type="button"
          onClick={onSwitchTab}
          className="underline underline-offset-2 transition-opacity hover:opacity-80"
          style={{ color: "#F0EDE8" }}
        >
          Create Account
        </button>
      </p>
    </form>
  )
}
