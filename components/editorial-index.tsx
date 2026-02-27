import { IndexRow } from "@/components/index-row"

const sections = [
  {
    number: "01",
    title: "Tools",
    description: "Measurements, ideas & inspiration",
    href: "/tools",
  },
  {
    number: "02",
    title: "Marketplace",
    description: "Buy & sell AI patterns",
    href: "/marketplace",
  },
  {
    number: "03",
    title: "Generate Pattern",
    description: "Create your design",
    href: "/generate",
  },
  {
    number: "04",
    title: "My Patterns",
    description: "Your saved patterns",
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
          description={section.description}
          href={section.href}
        />
      ))}
    </nav>
  )
}
