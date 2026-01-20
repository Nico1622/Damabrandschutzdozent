"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import Button from "@/app/components/elements/button"

export default function Header() {
  const pathname = usePathname()

  if (pathname !== "/") {
    return null
  }

  return (
    <header role="banner" id="header" className="distance">
      <video autoPlay loop muted playsInline>
        <source src="/assets/videos/header.mp4" type="video/mp4" />
      </video>

      <div className="row center">
        <div className="col tiny-11  medium-6 flex align-center">
          <div className="claim">
            <blockquote>Brandschutz begreifen Leben Retten</blockquote>

            <div className="btn-container">
              <Button href="/kontakt" className="btn">
                Kontakt aufnehmen
              </Button>

              <Button href="/brandschutz" className="btn transparent">
                Mehr über Brandschutz
              </Button>
            </div>
          </div>
        </div>

        <div className="col tiny-11 medium-6 huge-5 huge-prefix-1 medium-order-1">
          <Image
            src="/assets/images/layout/header.jpg"
            alt=""
            width={639}
            height={480}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </header>
  )
}
