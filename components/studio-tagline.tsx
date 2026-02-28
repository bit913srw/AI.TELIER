import Link from "next/link"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Help", href: "/help" },
  { label: "Legal", href: "/legal" },
]

export function StudioTagline() {
  return (
    <footer className="flex flex-col items-center gap-5 px-4 pb-10 pt-8 md:pb-14 md:pt-10 lg:pb-16 lg:pt-12">
      <nav aria-label="Footer links" className="flex items-center gap-4 md:gap-6">
        {footerLinks.map((link, i) => (
          <span key={link.href} className="flex items-center gap-4 md:gap-6">
            <Link
              href={link.href}
              prefetch={false}
              className="font-sans text-foreground/70 text-[10px] md:text-[11px] uppercase tracking-[0.2em] hover:text-primary transition-all duration-300"
            >
              {link.label}
            </Link>
            {i < footerLinks.length - 1 && (
              <span className="text-foreground/50 text-[8px] select-none">
                {"\u00B7"}
              </span>
            )}
          </span>
        ))}
      </nav>
      <p className="font-sans text-foreground/50 text-[10px] md:text-xs uppercase tracking-[0.35em] select-none">
        {"AI \u00B7 Pattern \u00B7 Generation"}
      </p>
    </footer>
  )
}
