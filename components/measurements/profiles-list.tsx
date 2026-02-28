"use client"

import { ChevronRight } from "lucide-react"

interface Profile {
  id: string
  name: string
}

interface ProfilesListProps {
  profiles: Profile[]
  selectedId: string
  onSelect: (id: string) => void
  onOpen: (id: string) => void
}

export function ProfilesList({ profiles, selectedId, onSelect, onOpen }: ProfilesListProps) {
  return (
    <div className="flex flex-col" role="radiogroup" aria-label="Measurement profiles">
      {profiles.map((profile, index) => (
        <div key={profile.id}>
          <div className="flex items-center gap-5 py-5 px-1">
            <button
              role="radio"
              aria-checked={selectedId === profile.id}
              aria-label={`Select ${profile.name} as active profile`}
              onClick={() => onSelect(profile.id)}
              className="flex-shrink-0 flex items-center justify-center w-5 h-5 border border-deep-red rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red"
            >
              {selectedId === profile.id && (
                <div className="w-3 h-3 bg-deep-red rounded-[1px]" />
              )}
            </button>

            <button
              onClick={() => onOpen(profile.id)}
              className="flex flex-1 items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red rounded-sm"
            >
              <span className="font-serif text-lg text-[#2A2218] tracking-wide group-hover:text-deep-red transition-colors">
                {profile.name}
              </span>
              <ChevronRight className="w-5 h-5 text-[#2A2218]/40 group-hover:text-deep-red transition-colors" />
            </button>
          </div>

          {index < profiles.length - 1 && (
            <div className="h-px bg-[#2A2218]/12" />
          )}
        </div>
      ))}
    </div>
  )
}
