import { MeasurementsScreen } from "@/components/measurements/measurements-screen"

export default function Page() {
  return (
    <div
      className="fixed inset-0"
      style={{
        background: "linear-gradient(to bottom, #F0EAE0 0%, #D4B896 35%, #A0604A 65%, #8B1A1A 100%)",
      }}
    >
      <main className="relative max-w-md mx-auto min-h-screen overflow-y-auto">
        <MeasurementsScreen />
      </main>
    </div>
  )
}
