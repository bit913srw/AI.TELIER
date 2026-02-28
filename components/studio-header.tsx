interface StudioHeaderProps {
  username?: string
}

export function StudioHeader({ username = "Sydney" }: StudioHeaderProps) {
  return (
    <header className="flex flex-col items-center px-4 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
      <div className="flex flex-col items-center gap-0">
        <span
          className="text-primary text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-pinyon), cursive' }}
        >
          {username}{"'s"}
        </span>
        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-8xl font-black text-center tracking-[0.25em] md:tracking-[0.3em] uppercase"
          style={{
            color: '#D8D4CD',
            textShadow: '1px 1px 1px rgba(255,255,255,0.8), -1px -1px 1px rgba(0,0,0,0.08), 2px 2px 3px rgba(0,0,0,0.06)',
          }}
        >
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
