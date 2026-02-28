"use client"

import { useState, useEffect } from "react"
import { StudioHeader } from "@/components/studio-header"
import { EditorialIndex } from "@/components/editorial-index"
import { StudioTagline } from "@/components/studio-tagline"

export function Dashboard() {
  const [username, setUsername] = useState("Sydney")

  useEffect(() => {
    // Check localStorage for a saved username, otherwise use default
    const savedUsername = localStorage.getItem("aitelier_username")
    if (savedUsername) {
      setUsername(savedUsername)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <StudioHeader username={username} />
      <div className="flex-1">
        <EditorialIndex />
      </div>
      <StudioTagline />
    </main>
  )
}
