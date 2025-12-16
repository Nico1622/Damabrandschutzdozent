"use client";

import Link from "next/link"
import Image from "next/image"
import Button from "./components/elements/button"

export default function MainPage() {
return (
<div className="pageWrap">
  <section className="row first-content" id="first-content">
    <div className="col large-6">
      <div className="row">
        <div className="col large-10 no-gutter">
          <Image src="/assets/images/layout/content.png" alt="Header Background" width={512} height={512}
            style={{ height: "auto", width: "100%"}} />
        </div>
        <div className="box-container">
          <Image src="/assets/images/icons/wordpress.png" title="WordPress" alt="Wordpress - Icon" width={64} height={64}
            style={{ width: "auto", height: "auto" }} />
          <Image src="/assets/images/icons/html.png" title="HTML" alt="HTML - Icon" width={64} height={64}
            style={{ width: "auto", height: "auto" }} />
          <Image src="/assets/images/icons/sass.png" title="SASS / SCSS" alt="Sass - Icon" width={64} height={64}
            style={{ width: "auto", height: "auto" }} />
          <Image src="/assets/images/icons/javascript.png" title="JavaScript" alt="Javascript - Icon" width={64} height={64}
            style={{ width: "auto", height: "auto" }} />
          <Image src="/assets/images/icons/php.png" title="PHP" alt="PHP - Icon" width={64} height={64}
            style={{ width: "auto", height: "auto" }} />
        </div>
      </div>
    </div>
    <div className="col large-6 giant-5 giant-prefix-1 flex align-center">
      <div className="inner-container">
        <h1 className="line">
          Ein Einblick in meine Welt
          <span>- Facettenreich kreativ</span>
        </h1>
        <p>
          Seit über fünf Jahren bin ich in der Webentwicklung tätig und habe mir ein breites technisches Fundament aufgebaut. Mein Schwerpunkt liegt auf WordPress, HTML5, SCSS und JavaScript, ergänzt durch Next.js sowie Backend-Kenntnisse in PHP. Dabei verbinde ich sauberen Code mit einem hohen Anspruch an Design und Nutzerfreundlichkeit.
        </p>
        <p>Konzepte setze ich zunächst visuell mit Figma oder Adobe XD um, bevor sie technisch realisiert werden. Ziel ist stets eine klare Struktur, gute Wartbarkeit und eine positive User Experience. Weitere Einblicke in meinen Werdegang finden Sie in meinem <Link href="/profil" title="Mehr über mich und meine Arbeit erfahren">Profil</Link>.</p>
      </div>
    </div>
  </section>

  <section className="second-content" id="workflow">
    <div className="row between">
      <div className="col medium-5 full-4 giant-prefix-1">
        <div className="sticky-container lazy-bg">
          <h2 className="line second">
            Mein Workflow in der Webentwicklung
            <span>- Von der Idee zur Umsetzung</span>
          </h2>
          <Button href="/referenzen" title="Meine Projekte und Arbeiten ansehen">
            Referenzen anschauen
          </Button>
        </div>
      </div>
      <div className="col medium-6 giant-5">
        <div className="workflow-container">
          {[
            { title: "Recherche", text: "Analyse von Zielgruppe, Markt und Anforderungen als Grundlage für Struktur und Design." },
            { title: "Design", text: "Entwicklung klarer, konsistenter Layouts mit Fokus auf Nutzerführung und Markenwirkung." },
            { title: "Entwicklung", text: "Umsetzung in performanten, wartbaren Code – optimiert für alle Endgeräte." },
            { title: "Optimierung", text: "Performance-Optimierung, Funktionstests und grundlegende SEO-Anpassungen." },
            { title: "Veröffentlichung", text: "Server-Setup, Domain- und SSL-Konfiguration sowie finale Live-Prüfung." },
          ].map((step, i) => (
            <div
              key={i}
              data-count={i + 1}
              className="workflow-box"
            >
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <div className="banner-container lazy-bg" id="banner">
    <div className="row center">
      <div className="col small-10 large-7 giant-6 huge-5">
        <blockquote>Bereits überzeugt?</blockquote>
        <p>
          Als teamorientierter Entwickler mit hoher technischer Affinität unterstütze ich Unternehmen zuverlässig bei der Umsetzung moderner Weblösungen. <Link href="/kontakt" title="Kontaktieren Sie mich via E-Mail">Kontaktieren</Link> Sie mich jetzt für eine erfolgreiche Zusammenarbeit!
        </p>
      </div>
    </div>
  </div>

  <div className="banner-inner-container">
    <div className="item">
      Über 5 Jahre <strong>Erfahrung</strong>
    </div>
    <div className="item">
      350+ <strong>Projekte</strong>
    </div>
    <div className="item">
      Teamübergreifende <strong>Kommunikation</strong>
    </div>
  </div>

  <section className="third-content" id="onlineshops">
    <div className="row">
      <div className="col medium-6 large-prefix-1 giant-5 flex align-center">
        <div>
          <h3 className="line">
            Erfahrungen mit Onlineshops
            <span>- Erfolg im digitalen Markt</span>
          </h3>
          <p>
            In der Entwicklung von Onlineshops bringe ich vor allem meine Frontend-Expertise ein, um ein ansprechendes, intuitives und conversionstarkes Einkaufserlebnis zu schaffen. Dabei arbeite ich überwiegend mit WooCommerce in Verbindung mit WordPress sowie teils mit E-Pages.
          </p>
          <p>
            Bei WordPress-basierten Shops übernehme ich zusätzlich Backend-Aufgaben, darunter individuelle Anpassungen von WooCommerce, Plugin-Integration und technische Optimierungen.
          </p>
        </div>
        {/* <div className="content-box"></div> */}
      </div>
      <div className="col medium-6 large-4 giant-prefix-1 huge-suffix-1 cut-5 cut-suffix-0 flex">
        <Image src="/assets/images/layout/shop-img.jpg" alt="Onlineshop Background" width={1536} height={1024}
          style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  </section>
</div>
)
}