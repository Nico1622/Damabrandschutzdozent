"use client"

import { usePathname } from "next/navigation"
import { company  } from "../assets/TypeScript/lib/backend/company";
import Button from "./elements/button"
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  const pathname = usePathname()

  if (pathname !== "/") {
    return null
  }

  return (
    <header role="banner" id="header">
      <div className="row">
        <div className="col large-1">
            <aside className="social-container">
              <p>Folge mir</p>

              <span className="line"></span>

              <address className="socials">
                <ul className="unstyled-list">
                  <li>
                    <Link href={company.instagram.href!} target="_blank" rel="noopener noreferrer" title={company.instagram.title}
                      className={company.instagram.text}>
                      <Image src={`/assets/images/icons/${company.instagram.name}.svg`}
                          alt={company.instagram.text}
                          width={36}
                          height={36}
                          style={{ height: "auto" }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={company.linkedin.href!} target="_blank" rel="noopener noreferrer" title={company.linkedin.title}
                      className={company.linkedin.text}>
                      <Image src={`/assets/images/icons/${company.linkedin.name}.svg`}
                          alt={company.linkedin.text}
                          width={36}
                          height={36}
                          style={{ height: "auto" }}
                      />
                    </Link>
                  </li>
                </ul>
              </address>
            </aside>
        </div>
        <div className="col large-7 giant-6 huge-5">
            <div className="header-container">
              <blockquote>
                <span>Hi! Ich bin</span>
                Nico Beyer
              </blockquote>

              <span className="hr"></span>

              <p>
                Als Frontend-Entwickler liegt mein Schwerpunkt auf der Gestaltung moderner Websites und Onlineshops mit klarem Fokus auf Benutzererlebnis und Performance. Ich entwickle durchdachte, funktionale Lösungen, die Design und Technik sinnvoll verbinden.
              </p>
              
              <Button href="/kontakt" title="Mehr über mich und meine Arbeit erfahren">
                Lerne mich kennen
              </Button>
             
            </div>
            
        </div>
      </div>

      <aside className="pointer-nav">
        <a href="#main" className="pointer-nav-item">
          <span>1</span>
          <p>Einblick</p>
        </a>
        <a href="#workflow" className="pointer-nav-item">
          <span>2</span>
          <p>Workflow</p>
        </a>
        <a href="#onlineshops" className="pointer-nav-item">
          <span>3</span>
          <p>Onlineshops</p>
        </a>
        <a href="#kontaktform" className="pointer-nav-item">
          <span>4</span>
          <p>Kontaktformular</p>
        </a>
      </aside>

      <a className="scroll-down lazy-bg" href="#main" title="Zum Hauptbereich">
        Weiterlesen
      </a>
    </header>
  )
}
