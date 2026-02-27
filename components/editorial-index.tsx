import { IndexRow } from "@/components/index-row"

const sections = [
  {
    number: "01",
    title: "Tools",
    href: "/tools",
  },
  {
    number: "02",
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    number: "03",
    title: "Generate Pattern",
    href: "/generate",
  },
  {
    number: "04",
    title: "My Patterns",
    href: "/patterns",
  },
]

export function EditorialIndex() {
  return (
    <nav aria-label="Studio sections" className="w-full max-w-3xl mx-auto px-4 md:px-8">
      <div
        className="h-px w-full bg-primary/20"
      />
      {sections.map((section) => (
        <IndexRow
          key={section.number}
          number={section.number}
          title={section.title}
          href={section.href}
        />
      ))}
    </nav>
  )
}
