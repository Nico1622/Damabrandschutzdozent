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
      <div className="row center-large">
        <div className="col large-1">
          <aside className="social-container" data-aos="fade-right" data-aos-delay="100">
            <p>Social Media</p>
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
                      alt={`${company.xing.name} - Logo`}
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
                      alt={`${company.linkedin.name} - Logo`}
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

        <div className="col medium-10 large-7 giant-6 huge-5">
          <div className="header-container">
            <blockquote>
              <span>Hi! Ich bin</span>
              Nico Beyer
            </blockquote>

            <span className="hr" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600"></span>

            <p>
              Ein Frontend-Entwickler aus der Niederrhein-Region.
              Mein Schwerpunkt liegt auf der Erstellung ansprechender Websites und Onlineshops.
              Ich freue mich über Ihr Interesse – erfahren Sie im Folgenden mehr über mich.
            </p>

            <div>
              <Button href="/profil" title="Mehr über mich und meine Arbeit erfahren">
                Mein Profil / Werdegang
              </Button>
            </div>
          </div>
        </div>

        <div className="col tiny-10 small-8 medium-6 large-3 huge-4 cut-4 large-prefix-1 flex align-center order-1-large">
          <div className="header-img-container">
            <Image
              src={`/assets/images/layout/header-img.webp`}
              alt="Profilfoto von Nico Beyer"
              className="header-img"
              width={560}
              height={560}
              priority
              sizes="
                (max-width: 360px) 90vw,
                (max-width: 480px) 85vw,
                (max-width: 576px) 80vw,
                (max-width: 768px) 75vw,
                (max-width: 992px) 70vw,
                (max-width: 1360px) 65vw,
                1024px
              "
              style={{ width:"100%", height: "auto" }}
            />
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
