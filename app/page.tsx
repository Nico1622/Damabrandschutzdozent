"use client";

import Link from "next/link"
import Image from "next/image"
import Button from "./components/elements/button"

export default function MainPage() {
return (
<div className="pageWrap">
  <section className="row first-content" id="first-content">
    <div className="col large-6" data-aos="fade-right">
      <div className="row">
        <div className="col medium-prefix-1 medium-10 large-prefix-0 large-10 no-gutter">
          <Image 
            src="/assets/images/layout/first-content.webp" 
            alt="Header Background" 
            width={1024}
            height={1024}
            sizes="
              (max-width: 360px) 90vw,
              (max-width: 480px) 85vw,
              (max-width: 576px) 80vw,
              (max-width: 768px) 75vw,
              (max-width: 992px) 70vw,
              (max-width: 1360px) 65vw,
              1024px
            "
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="box-container">
          <Image src="/assets/images/icons/wordpress.webp" title="WordPress" alt="Wordpress - Icon" width={52} height={52}
            style={{ width: "100%", height: "auto" }} />
          <Image src="/assets/images/icons/html.webp" title="HTML" alt="HTML - Icon" width={52} height={52}
            style={{ width: "100%", height: "auto" }} />
          <Image src="/assets/images/icons/sass.webp" title="SASS / SCSS" alt="Sass - Icon" width={52} height={52}
            style={{ width: "100%", height: "auto" }} />
          <Image src="/assets/images/icons/javascript.webp" title="JavaScript" alt="Javascript - Icon" width={52} height={52}
            style={{ width: "100%", height: "auto" }} />
          <Image src="/assets/images/icons/php.webp" title="PHP" alt="PHP - Icon" width={52} height={52}
            style={{ width: "100%", height: "auto" }} />
          <Image src="/assets/images/icons/nextjs.webp" title="NextJs" alt="NextJs - Icon" width={52} height={52}
            style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </div>

    <div className="col large-6 giant-5 giant-prefix-1 flex align-center" data-aos="fade-left" data-aos-delay="200">
      <div className="inner-container">
        <h1 className="line">
          Ein Einblick<br className="large-none"/> in meine Welt
          <span>Facettenreich kreativ</span>
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
      <div 
        className="col medium-5 full-4 giant-prefix-1"
        data-aos="fade-right" 
        data-aos-duration="1000"
      >
        <div className="sticky-container lazy-bg">
          <h2 className="line second">
            Mein Work&shy;flow in der Web&shy;entwicklung
            <span>Von der Idee zur Umsetzung</span>
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
            { title: "Optimierung", text: "Performance-Optimierung, Funktionstests und OnPage SEO-Anpassungen." },
            { title: "Veröffentlichung", text: "Server-Setup, Domain- und SSL-Konfiguration sowie finale Live-Prüfung." },
          ].map((step, i) => (
            <div
              key={i}
              data-count={i + 1}
              className="workflow-box"
              data-aos="fade-left"
              data-aos-delay={i * 150}
              data-aos-duration="800"
              data-aos-anchor-placement="center-bottom"
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
    <div className="row center" data-aos="fade-up" data-aos-duration="1000">
      <div className="col small-10 large-7 giant-6 huge-5">
        <blockquote data-aos="zoom-in" data-aos-delay="200">
          Bereits überzeugt?
        </blockquote>
        
        <p data-aos="fade-up" data-aos-delay="400">
          Als teamorientierter Entwickler mit hoher technischer Affinität unterstütze ich Unternehmen zuverlässig bei der Umsetzung moderner Weblösungen. <Link href="/kontakt" title="Kontaktieren Sie mich via E-Mail">Kontaktieren</Link> Sie mich jetzt für eine erfolgreiche Zusammenarbeit!
        </p>
      </div>
    </div>
  </div>

  <div className="banner-inner-container">
    <div className="item" data-aos="fade-up" data-aos-delay="100">
      Über 5 Jahre <strong>Erfahrung</strong>
    </div>
    <div className="item" data-aos="fade-up" data-aos-delay="300">
      350+ <strong>Projekte</strong>
    </div>
    <div className="item" data-aos="fade-up" data-aos-delay="500">
      Teamübergreifende <strong>Kommunikation</strong>
    </div>
  </div>

  <section className="third-content" id="onlineshops">
    <div className="row">
      <div 
        className="col large-6 giant-prefix-1 giant-5 flex align-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div>
          <h3 className="line">
            Erfahrungen mit Onlineshops
            <span>Erfolg im digitalen Markt</span>
          </h3>
          <p>
            In der Entwicklung von Onlineshops bringe ich vor allem meine Frontend-Expertise ein, um ein ansprechendes, intuitives und conversionstarkes Einkaufserlebnis zu schaffen. Dabei arbeite ich überwiegend mit WordPress in Verbindung mit WooCommerce sowie teils mit E-Pages.
          </p>
          <p>
            Bei WordPress-basierten Shops übernehme ich zusätzlich Backend-Aufgaben, darunter individuelle Anpassungen von WooCommerce, Plugin-Integration und technischen Optimierungen.
          </p>
        </div>
      </div>

      <div 
        className="col medium-prefix-1 medium-10 large-prefix-0 large-6 giant-4 giant-prefix-1 huge-suffix-1 cut-5 cut-suffix-0 flex order-1-large"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <Image 
          src="/assets/images/layout/shop-img.webp" 
          alt="Onlineshop Background" 
          width={1024}
          height={1024}
          sizes="
            (max-width: 360px) 90vw,
            (max-width: 480px) 85vw,
            (max-width: 576px) 80vw,
            (max-width: 768px) 75vw,
            (max-width: 992px) 70vw,
            (max-width: 1360px) 65vw,
            1024px
          "
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  </section>
</div>
)
}