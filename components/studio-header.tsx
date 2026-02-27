interface StudioHeaderProps {
  username?: string
}

export function StudioHeader({ username = "Atelier" }: StudioHeaderProps) {
  return (
    <header className="flex flex-col items-center px-4 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
      <div className="flex flex-col items-center gap-1 md:gap-2">
        <span
          className="text-foreground/70 text-xl md:text-2xl lg:text-3xl"
          style={{ fontFamily: 'var(--font-pinyon), cursive' }}
        >
          {username}{"'s"}
        </span>
        <h1 className="font-serif text-primary text-4xl md:text-6xl lg:text-8xl font-black text-center tracking-[0.25em] md:tracking-[0.3em] uppercase">
          AI.TELIER
        </h1>
        <span className="font-serif text-foreground/60 text-xs md:text-sm lg:text-base tracking-[0.5em] md:tracking-[0.6em] uppercase">
          Studio
        </span>
      </div>
      <div className="mt-6 md:mt-8 w-full h-px bg-primary" />
    </header>
  )
}
