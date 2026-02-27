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
      <p className="font-sans text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.35em] opacity-40 select-none">
        {"AI \u00B7 Pattern \u00B7 Generation"}
      </p>
      <nav aria-label="Footer links" className="flex items-center gap-4 md:gap-6">
        {footerLinks.map((link, i) => (
          <span key={link.href} className="flex items-center gap-4 md:gap-6">
            <Link
              href={link.href}
              prefetch={false}
              className="font-sans text-muted-foreground text-[10px] md:text-[11px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              {link.label}
            </Link>
            {i < footerLinks.length - 1 && (
              <span className="text-muted-foreground text-[8px] opacity-30 select-none">
                {"\u00B7"}
              </span>
            )}
          </span>
        ))}
      </nav>
    </footer>
  )
}
