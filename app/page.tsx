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
          Seit 5 Jahren bin ich in der Webentwicklung unterwegs. Mein Spielplatz?{" "}
          <strong>Wordpress</strong>, <strong>HTML</strong>, <strong>SCSS</strong>,{" "}
          <strong>Javascript</strong>, <strong>Next.JS</strong> und <strong>PHP</strong>. Jede Codezeile erzählt ihre eigene
          Geschichte, sei es bei der Entwicklung ansprechender Designs oder innovativer
          Funktionalitäten. Mehr darüber erfahrt Ihr in meinem{" "}
          <Link href="/profil" title="Mehr über mich und meine Arbeit erfahren">Profil</Link>.
        </p>
      </div>
    </div>
  </section>

  <section className="second-content" id="workflow">
    <div className="row between">
      <div className="col medium-5 full-4 giant-prefix-1">
        <div className="sticky-container lazy-bg">
          <h2 className="line second">
            Mein Workflow In der Webentwicklung
            <span>- Von der Idee zur Innovation</span>
          </h2>
          <Button href="/referenzen" title="Meine Projekte und Arbeiten ansehen">
            Referenzen anschauen
          </Button>
        </div>
      </div>
      <div className="col medium-6 giant-5">
        <div className="workflow-container">
          {[
            { title: "Recherche", text: "Zu Beginn werden Zielgruppe, Markt und Wettbewerber analysiert. Auf Basis dieser Erkenntnisse entsteht eine klare Strategie, die als Fundament für Struktur und Design dient." },
            { title: "Design", text: "Aus den Konzepten entsteht ein durchdachtes Layout, das Nutzerführung, Markenauftritt und Funktion vereint. So entsteht ein klares, modernes und konsistentes Design." },
            { title: "Entwicklung", text: "Das Design wird in sauberen, performanten Code umgesetzt. Funktionen, Strukturen und Inhalte werden technisch präzise umgesetzt und für alle Endgeräte optimiert." },
            { title: "Optimierung", text: "In dieser Phase werden Ladezeiten verbessert, Funktionen getestet und Inhalte für Suchmaschinen optimiert. Ziel ist eine schnelle, benutzerfreundliche und stabile Website." },
            { title: "Veröffentlichung", text: "Abschließend wird die Website auf dem Server eingerichtet, Domains und SSL konfiguriert und der Live-Betrieb geprüft, damit der Onlinegang reibungslos erfolgt." },
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
          Als <strong>teamfähiger Profi</strong> mit einer <strong>Leidenschaft für moderne Techniken</strong> bin ich
          genau der Richtige für Ihr Unternehmen.{" "}
          <Link href="/kontakt" title="Kontaktieren Sie mich via E-Mail">Kontaktieren</Link> Sie mich jetzt für eine erfolgreiche Zusammenarbeit!
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
      Team übergreifende <strong>Kommunikation</strong>
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
            Was die Entwicklung von Onlineshops betrifft, nutze ich vor allem meine Kenntnisse im Frontendbereich, um ein
            ansprechendes und intuitives Einkaufserlebnis für Kunden zu schaffen.
          </p>
          <p>
            Bei WordPress-Shops kümmere ich mich zusätzlich um das Backend, um sicherzustellen, dass alles reibungslos
            funktioniert und die Verwaltung der Produkte und Bestellungen für den Kunden einfach zu bedienen ist.
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