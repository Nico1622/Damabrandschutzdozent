"use client"

import { usePathname } from "next/navigation"
import { company } from "../assets/TypeScript/lib/backend/company"
import Button from "./elements/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const pathname = usePathname()

  if (pathname !== "/") {
    return null
  }

  return (
    <header role="banner" id="header">
      <div className="row">
        <div className="col large-1">
          <aside className="social-container" data-aos="fade-right" data-aos-delay="100">
            <p>Folge mir</p>
            <span className="line"></span>
            <address className="socials">
              <ul className="unstyled-list">
                <li>
                  <Link
                    href={company.xing.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={company.xing.title}
                    className={company.xing.text}
                  >
                    <Image
                      src={`/assets/images/icons/${company.xing.text}.svg`}
                      alt={company.xing.text}
                      width={36}
                      height={36}
                      style={{ height: "auto" }}
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={company.linkedin.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={company.linkedin.title}
                    className={company.linkedin.text}
                  >
                    <Image
                      src={`/assets/images/icons/${company.linkedin.text}.svg`}
                      alt={company.linkedin.text}
                      width={36}
                      height={36}
                      style={{ height: "auto" }}
                      loading="lazy"
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

            <span className="hr" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600"></span>

            <p>
              Als Frontend-Entwickler liegt mein Schwerpunkt auf der Gestaltung moderner Websites und Onlineshops mit
              klarem Fokus auf Benutzererlebnis und Performance. Ich entwickle durchdachte, funktionale Lösungen, die
              Design und Technik sinnvoll verbinden.
            </p>

            <div data-aos="fade-up" data-aos-delay="200">
              <Button href="/profil" title="Mehr über mich und meine Arbeit erfahren">
                Lernen Sie mich kennen
              </Button>
            </div>
          </div>
        </div>
      </div>

      <aside className="pointer-nav">
        {[
          { id: "#main", num: "1", text: "Einblick", title: "Mehr über mich" },
          { id: "#workflow", num: "2", text: "Workflow", title: "Workflow anzeigen" },
          { id: "#onlineshops", num: "3", text: "Onlineshops", title: "Shop erstellung" },
          { id: "#kontaktform", num: "4", text: "Kontaktformular", title: "Zum Kontaktformular" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.id}
            className="pointer-nav-item"
            data-aos="fade-left"
            data-aos-delay={300 + index * 50}
            title={item.title}
          >
            <span>{item.num}</span>
            <p>{item.text}</p>
          </a>
        ))}
      </aside>

      <a className="scroll-down lazy-bg" href="#main" title="Zum Hauptbereich" data-aos="fade-up" data-aos-delay="500">
        Weiterlesen
      </a>
    </header>
  )
}
