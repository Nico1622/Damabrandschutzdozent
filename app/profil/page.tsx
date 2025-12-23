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
              Was mit einem Schulpraktikum begann, entwickelte sich zu meiner beruflichen Leidenschaft. Seit über fünf Jahren konzipiere und realisiere ich moderne, nutzerzentrierte Webauftritte – von der Planung bis zur Umsetzung. Dabei arbeite ich mit CMS-Systemen, HTML5, SCSS und JavaScript, um stabile und ansprechende Lösungen zu entwickeln.
            </p>
            <p>
              Ein besonderer Schwerpunkt liegt in meiner derzeiteigen Anstellung auf der Entwicklung und Betreuung von WooCommerce-Shops. Ergänzend unterstütze ich Auszubildende und Praktikant:innen, übernehme technische Supportaufgaben und bringe mich aktiv in die Weiterentwicklung bestehender Systeme ein.
            </p>
          </div>
          <div className="col large-6 huge-5 huge-prefix-1" data-aos="fade-left" data-aos-delay="200">
            <Image
              src="/assets/images/layout/profile.webp"
              title="SASS / SCSS"
              alt="Sass - Icon"
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
                Technische und gestalterische Entscheidungen treffe ich stets mit Blick auf die User Experience.
              </Card>
            </div>
            <div className="col large-4 margin-bottom" data-aos="fade-up" data-aos-delay="300">
              <Card title="Frontend-Kompetenz">
                Ich entwickle performante, responsive Oberflächen mit sauberer Trennung von Struktur, Stil und Logik.
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
                        In meiner aktuellen Position entwickle und betreue ich kundenspezifische Online-Shops auf Basis von Shopify und WooCommerce. Dabei arbeite ich eng mit Design- und Backend-Teams zusammen, um ganzheitliche E-Commerce-Lösungen umzusetzen.
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
                    <Card className="badge" date="2016 - 2020" title="Informationstechnischer Assistent (BTI Neuss)">
                    <p>
                        Fundierte Ausbildung im Bereich Softwareentwicklung mit Schwerpunkt auf Webtechnologien. Hier sammelte ich meine ersten praktischen Erfahrungen mit HTML, CSS, JavaScript und PHP und entdeckte meine Leidenschaft für die Webentwicklung.
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
                  <li>SEO-Grundlagen</li>
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
                  <li>Nutzerzentrierung</li>
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
              Eine Auswahl relevanter Projekte aus den letzten Jahren – mit Fokus auf E-Commerce und Webentwicklung.
            </p>
          </div>
          <div className="col">
            <div className="project-item-container">
              <div data-aos="fade-up" data-aos-delay="100">
                <ProjectItem image="/assets/images/files/thumbs/kaspar-thumb-desktop.webp" title="Kaspar Spirituosen" slideIndex={0}>
                    <p>
                    Moderner WooCommerce-Onlineshop für den Verkauf von Spirituosen und Eventtickets – technisch durchdacht, wartungsfreundlich und nahtlos in bestehende Systeme integriert.
                    </p>
                </ProjectItem>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <ProjectItem image="/assets/images/files/thumbs/helpcenter-desktop.webp" title="Helpcenter Euroweb" slideIndex={1}>
                    <p>
                    Zentrale Wissensplattform auf WordPress-Basis mit intelligenter Struktur, leistungsstarker Suche und individuellen Funktionen für optimale Kundenunterstützung.
                    </p>
                </ProjectItem>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <ProjectItem image="/assets/images/files/thumbs/scharrn3-desktop.webp" title="Scharrn3" slideIndex={2}>
                    <p>
                    Zeitgemäße Webpräsenz für ein lokales Deko- und Accessoire-Geschäft – modern gestaltet, leicht pflegbar und klar auf Markenwirkung ausgelegt.
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