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
      <video autoPlay loop muted playsInline>
				<source src="/assets/videos/header.mp4" type="video/mp4" />
			</video>

      <div className="row">
        <div className="col large-6">
          <div className="claim">
            <blockquote>Brandschutz begreifen Leben Retten</blockquote>

            <div className="btn-container">
              <a href="/kontakt" title="" className="btn">
                Kontakt aufnehmen
              </a>

              <a href="/brandschutz" title="" className="btn transparent">
                Mehr über Brandschutz
              </a>
            </div>
          </div>
        </div>

        <div className="col large-6 huge-5 huge-prefix-1">
          <Image src={"/assets/images/layout/header.jpg"} alt={""} width={639} height={480} style={{ width: "100%", height: "auto" }}/>
        </div>
      </div>

      <a className="scroll-down lazy-bg" href="#main" title="Zum Hauptbereich" data-aos="fade-up" data-aos-delay="500">
        Weiterlesen
      </a>
    </header>
  )
}
