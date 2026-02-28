"use client"

import { useState } from "react"

interface CreateAccountFormProps {
  onSwitchTab: () => void
  onCreateAccount: () => void
}

export function CreateAccountForm({ onSwitchTab, onCreateAccount }: CreateAccountFormProps) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreateAccount()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="create-username"
          className="text-primary-foreground/70 text-[10px] tracking-[0.2em] uppercase"
        >
          Username
        </label>
        <input
          id="create-username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-11 px-4 text-sm rounded-sm outline-none transition-shadow focus:ring-2 focus:ring-primary-foreground/30 bg-white text-foreground"
          placeholder="Choose a username"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="create-email"
          className="text-primary-foreground/70 text-[10px] tracking-[0.2em] uppercase"
        >
          Email Address
        </label>
        <input
          id="create-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 px-4 text-sm rounded-sm outline-none transition-shadow focus:ring-2 focus:ring-primary-foreground/30 bg-white text-foreground"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="create-password"
          className="text-primary-foreground/70 text-[10px] tracking-[0.2em] uppercase"
        >
          Password
        </label>
        <input
          id="create-password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 px-4 text-sm rounded-sm outline-none transition-shadow focus:ring-2 focus:ring-primary-foreground/30 bg-white text-foreground"
          placeholder="Create a password"
        />
      </div>

      <button
        type="submit"
        className="mt-2 h-12 text-xs tracking-[0.25em] uppercase font-semibold rounded-sm transition-all hover:opacity-90 active:scale-[0.98] bg-background text-primary"
      >
        Create Account
      </button>

      <p className="text-center text-xs mt-1 text-primary-foreground/60">
        {"Already a member? "}
        <button
          type="button"
          onClick={onSwitchTab}
          className="underline underline-offset-2 transition-opacity hover:opacity-80 text-primary-foreground"
        >
          Sign In
        </button>
      </p>
    </form>
  )
}
