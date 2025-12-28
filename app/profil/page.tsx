import Image from "next/image"
import Card from "../components/elements/card"
import ProjectItem from "../components/elements/project-item"

export const metadata = {
  title: "Profil – Webdesign mit Köpfchen",
  description:
    "Seit über fünf Jahren gestalte und entwickle ich moderne, benutzerfreundliche Webauftritte – mit Fokus auf klare Strukturen und zielgerichtete Lösungen.",
}

export default function ProfilPage() {
  return (
    <div className="pageWrap no-padding-top">
      <div className="helper-right distance">
        {/* Header Bereich */}
        <div className="row">
          <div className="col large-6 huge-5 huge-suffix-1" data-aos="fade-right">
            <h1 className="line">
              Webdesign mit Köpfchen
              <span>klarer Fokus aufs Wesentliche</span>
            </h1>

            <p>
              Was mit einem Schulpraktikum begann, entwickelte sich zu meiner beruflichen Leidenschaft. Seit über fünf Jahren konzipiere und realisiere ich moderne, nutzerzentrierte Webauftritte – von der Planung bis zur Umsetzung. Dabei arbeite ich mit CMS-Systemen, sowie gängigen Entwicklungssprachen & Tools zusammmen, um stabile und ansprechende Lösungen zu entwickeln.
            </p>
            <p>
              Ein besonderer Schwerpunkt liegt in meiner derzeiteigen Anstellung auf der Entwicklung und Betreuung von WooCommerce-Shops, sowie der Unterstützung von Auszubildenden und Praktikant:innen. Ergänzend übernehme ich technische Supportaufgaben für Mitarbeiter und bringe mich aktiv in die Weiterentwicklung bestehender interner Systeme ein.
            </p>
          </div>
          <div className="col large-6 huge-5 huge-prefix-1" data-aos="fade-left" data-aos-delay="200">
            <Image
              src="/assets/images/layout/profile.webp"
              alt="Webdesigner arbeitet an einem großen Monitor an einem Website-Layout in einem gemütlichen Homeoffice mit Schreibtischlampe und Pflanze"
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

        {/* Value Cards (Clean Code, etc.) */}
        <div className="distance no-distance-bottom">
          <div className="row card-container">
            <div className="col large-4 margin-bottom" >
              <Card title="Clean Code">
                Ich lege großen Wert auf wartbaren und skalierbaren Code, der langfristig verständlich und erweiterbar bleibt.
              </Card>
            </div>
            <div className="col large-4 margin-bottom" data-aos="fade-up" data-aos-delay="200">
              <Card title="Nutzerzentriert">
                Ein zentraler Aspekt für mich ist, technische und gestalterische Entscheidungen stets mit Blick auf die User Experience zu treffen.
              </Card>
            </div>
            <div className="col large-4 margin-bottom" data-aos="fade-up" data-aos-delay="300">
              <Card title="Frontend-Kompetenz">
                Ich entwickle Oberflächen, die performant und Responsive nutzbar sind, und achte dabei auf eine klare Trennung von Struktur, Stil und Logik.
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Werdegang & Skills */}
      <section className="history distance bg-color-dark">
        <div className="row justify-arround">
          <div className="col large-7 flex" data-aos="fade-right">
            <div className="box flex-grow">
              <h2 className="history-headline">Werdegang</h2>
              <div className="timeline">
                <div data-aos="fade-up" data-aos-delay="200">
                    <Card className="badge" date="2023 - Heute" title="WWWE GmbH (Festanstellung)">
                    <p>
                        In meiner aktuellen Position entwickle und betreue ich kundenspezifische Online-Shops auf Basis von Wordpress und WooCommerce. Dabei arbeite ich eng mit Kunden zusammen und stehe in engem Austauschen mit meinen Kollegen um ganzheitliche E-Commerce-Lösungen umzusetzen.
                    </p>
                    </Card>
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                    <Card className="badge" date="2020 - 2023" title="WWWE GmbH (Ausbildung)">
                    <p>
                        Mein Einstieg in die professionelle Webentwicklung. Während meiner Ausbildung war ich an zahlreichen Projekten beteiligt – von Corporate Websites bis hin zu E-Commerce-Lösungen. In dieser Zeit konnte ich mein technisches Fundament festigen und wertvolle Praxiserfahrung sammeln.
                    </p>
                    </Card>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <Card className="badge" date="2016 - 2020" title="Fachabitur & Informationstechnischer Assistent (BTI Neuss)">
                    <p>
                        Absolviertes Fachabitur mit paraleller Ausbildung (Schwerpunkt Informatik). Hier sammelte ich meine ersten praktischen Erfahrungen mit HTML, CSS, JavaScript, PHP sowie Datenbanken und entdeckte meine Leidenschaft für die Webentwicklung.
                    </p>
                    </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="col large-5" data-aos="fade-left" data-aos-delay="300">
            <h2 className="skills-headline">Skills & Stärken</h2>
            <div className="card-container skills">
              <Card icon="" title="Technische Skills" data-aos="zoom-in" data-aos-delay="400">
                <ul className="unstyled-list">
                  <li>HTML5</li>
                  <li>SCSS / CSS</li>
                  <li>JavaScript</li>
                  <li>Next.js</li>
                  <li>PHP</li>
                </ul>
              </Card>
              <Card icon="" title="E-Commerce & Shop-Systeme" data-aos="zoom-in" data-aos-delay="500">
                <ul className="unstyled-list">
                  <li>WooCommerce</li>
                  <li>E-Pages</li>
                  <li>Shop-Optimierung</li>
                  <li>OnPage - SEO</li>
                </ul>
              </Card>
              <Card icon="" title="Tools & Workflow" data-aos="zoom-in" data-aos-delay="600">
                <ul className="unstyled-list">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>VS Code</li>
                  <li>GitHub</li>
                </ul>
              </Card>
              <Card icon="" title="Soft Skills" data-aos="zoom-in" data-aos-delay="700">
                <ul className="unstyled-list">
                  <li>Strukturierte Arbeitsweise</li>
                  <li>Qualitätsbewusstsein</li>
                  <li>Zuverlässigkeit</li>
                  <li>Nutzerorientiert</li>
                  <li>Teamfähigkeit</li>
                  <li>Lösungsorientierung</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projekte */}
      <section className="projects distance no-distance-bottom">
        <div className="row">
          <div className="col" data-aos="fade-up">
            <h2>Projekt-Referenzen</h2>
            <p>
              Eine Auswahl an Projekte aus den letzten Jahren.
            </p>
          </div>
          <div className="col">
            <div className="project-item-container">
              <div data-aos="fade-up" data-aos-delay="100">
                <ProjectItem image="/assets/images/files/thumbs/kaspar-thumb-desktop.webp" title="Kaspar Spirituosen" slideIndex={0}>
                    <p>
                    Moderner WooCommerce-Onlineshop für den Verkauf von Spirituosen und Eventtickets.
                    </p>
                </ProjectItem>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <ProjectItem image="/assets/images/files/thumbs/helpcenter-desktop.webp" title="Helpcenter Euroweb" slideIndex={1}>
                    <p>
                    Zentrale Wissensplattform auf WordPress-Basis zur Untersützung von Kundenanfragen.
                    </p>
                </ProjectItem>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <ProjectItem image="/assets/images/files/thumbs/scharrn3-desktop.webp" title="Scharrn3" slideIndex={2}>
                    <p>
                      Webpräsenz für ein lokales Deko- und Accessoire-Geschäft in Lübbecke.
                    </p>
                </ProjectItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}