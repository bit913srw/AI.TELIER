"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { ProfilesList } from "./profiles-list"
import { ProfileDetail } from "./profile-detail"

interface Profile {
  id: string
  name: string
}

const INITIAL_PROFILES: Profile[] = [
  { id: "1", name: "SYDNEY HERO" },
  { id: "2", name: "BODY 1" },
  { id: "3", name: "BODY 2" },
]

export function MeasurementsScreen() {
  const [profiles, setProfiles] = useState<Profile[]>(INITIAL_PROFILES)
  const [selectedId, setSelectedId] = useState("1")
  const [openProfileId, setOpenProfileId] = useState<string | null>(null)

  const openProfile = profiles.find((p) => p.id === openProfileId)

  const handleAddProfile = () => {
    const newId = String(Date.now())
    const newName = `BODY ${profiles.length}`
    setProfiles((prev) => [...prev, { id: newId, name: newName }])
  }

  // Detail view
  if (openProfile) {
    return (
      <ProfileDetail
        profileName={openProfile.name}
        onBack={() => setOpenProfileId(null)}
      />
    )
  }

  // Profiles list view
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Top-left: Tools */}
      <button
        className="fixed top-6 left-6 z-10 flex items-center gap-2 text-deep-red text-base tracking-[0.15em] uppercase font-mono hover:text-deep-red/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red rounded-sm"
        aria-label="Back to tools"
      >
        <ArrowLeft className="w-5 h-5" />
        Tools
      </button>

      {/* Top-right: Add New + */}
      <button
        onClick={handleAddProfile}
        className="fixed top-6 right-6 z-10 text-deep-red text-base tracking-[0.15em] uppercase font-mono hover:text-deep-red/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red rounded-sm"
      >
        Add New +
      </button>

      {/* Title - below Tools/Add New */}
      <div className="px-6 pt-20 pb-2">
        <h1 className="font-serif text-2xl text-[#2A2218] tracking-wide text-center text-balance leading-relaxed">
          Measurements
        </h1>
        <div className="mt-3 mx-auto w-16 h-px bg-deep-red" />
      </div>

      {/* Profile list */}
      <div className="flex-1 flex items-start pt-20 px-6">
        <div className="w-full">
          <ProfilesList
            profiles={profiles}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onOpen={setOpenProfileId}
          />
        </div>
      </div>

      {/* Bottom-left: Measurement Guide */}
      <button className="fixed bottom-6 left-6 z-10 text-[#F5F0E8]/80 text-sm tracking-[0.2em] uppercase font-mono hover:text-[#F5F0E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red rounded-sm drop-shadow-sm">
        Measurement Guide
      </button>
    </div>
  )
}
