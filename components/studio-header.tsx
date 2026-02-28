interface StudioHeaderProps {
  username?: string
}

export function StudioHeader({ username = "Sydney" }: StudioHeaderProps) {
  return (
    <header className="flex flex-col items-center px-4 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
      <div className="flex flex-col items-center gap-0">
        <span className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl">
          {username}{"'s"}
        </span>
        <h1 className="font-serif text-primary text-4xl md:text-6xl lg:text-8xl font-black text-center tracking-[0.25em] md:tracking-[0.3em] uppercase">
          AI.TELIER
        </h1>
        <span className="font-serif text-primary text-base md:text-lg lg:text-xl tracking-[0.4em] md:tracking-[0.5em] uppercase">
          Studio
        </span>
      </div>
      <div className="mt-6 md:mt-8 w-full h-px bg-primary" />
    </header>
  )
}
