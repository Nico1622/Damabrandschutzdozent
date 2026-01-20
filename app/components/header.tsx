"use client"

import { usePathname } from "next/navigation"
import { company } from "@/app/assets/TypeScript/lib/backend/company"
import Button from "@/app/components/elements/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const pathname = usePathname()

  if (pathname !== "/") {
    return null
  }

  return (
    <header role="banner" id="header">
      <a className="scroll-down lazy-bg" href="#main" title="Zum Hauptbereich" data-aos="fade-up" data-aos-delay="500">
        Weiterlesen
      </a>
    </header>
  )
}
