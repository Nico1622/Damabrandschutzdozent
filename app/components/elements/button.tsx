import Link from "next/link"

type ButtonProps = {
  href?: string // optional, für Links
  type?: "button" | "submit" | "reset" // optional, für Formulare
  title?: string
  className?: string
  children: React.ReactNode
  disabled?: boolean // <-- hier hinzufügen
  target?: "_blank" | "_self" | "_parent" | "_top"
}

export default function Button({
  href,
  type = "button",
  title,
  className = "btn",
  children,
  disabled = false, // optionaler Default
  target,
}: ButtonProps) {
  if (href) {
    // Wenn href vorhanden -> Link
    return (
      <Link
        href={href}
        title={title ?? children?.toString()}
        className={className}
        target={target} // optional
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    )
  }

  // Andernfalls normaler Button für Formulare
  return (
    <button type={type} title={title} className={className} disabled={disabled}>
      {children}
    </button>
  )
}
