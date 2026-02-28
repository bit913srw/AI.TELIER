import { AuthBook } from "@/components/auth-book"

export default function AuthPage() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 py-12 bg-background">
      {/* Decorative scattered elements for editorial feel */}
      <div className="absolute top-8 left-8 hidden sm:block" aria-hidden="true">
        <div className="w-[1px] h-16 bg-primary/20" />
      </div>
      <div className="absolute bottom-8 right-8 hidden sm:block" aria-hidden="true">
        <div className="w-16 h-[1px] bg-primary/20" />
      </div>

      <AuthBook />

      {/* Footer text */}
      <p className="mt-10 text-[10px] tracking-[0.3em] uppercase text-primary/70">
        AI Pattern Generation
      </p>
    </main>
  )
}
