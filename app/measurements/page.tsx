import { MeasurementsScreen } from "@/components/measurements/measurements-screen"

export default function Page() {
  return (
    <div className="fixed inset-0 bg-background">
      <main className="relative max-w-md mx-auto min-h-screen overflow-y-auto">
        <MeasurementsScreen />
      </main>
    </div>
  )
}
