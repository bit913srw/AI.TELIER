import { AuthBook } from "@/components/auth-book"

export default function AuthPage() {
  return (
    <main
      className="min-h-dvh flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#F0EDE8" }}
    >
      {/* Decorative scattered elements for editorial feel */}
      <div className="absolute top-8 left-8 hidden sm:block" aria-hidden="true">
        <div
          className="w-[1px] h-16"
          style={{ backgroundColor: "rgba(139,26,26,0.12)" }}
        />
      </div>
      <div className="absolute bottom-8 right-8 hidden sm:block" aria-hidden="true">
        <div
          className="w-16 h-[1px]"
          style={{ backgroundColor: "rgba(139,26,26,0.12)" }}
        />
      </div>

      <AuthBook />

      {/* Footer text */}
      <p
        className="mt-10 text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(139,26,26,0.3)" }}
      >
        AI Pattern Generation
      </p>
    </main>
  )
}
