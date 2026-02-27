import { StudioHeader } from "@/components/studio-header"
import { EditorialIndex } from "@/components/editorial-index"
import { StudioTagline } from "@/components/studio-tagline"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <StudioHeader />
      <div className="flex-1">
        <EditorialIndex />
      </div>
      <StudioTagline />
    </main>
  )
}
