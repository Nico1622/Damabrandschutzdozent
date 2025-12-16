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
        <div className="row">
          <div className="col large-6 huge-5 huge-suffix-1">
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
          <div className="col large-6 huge-5 huge-prefix-1">
            <Image
              src="/assets/images/layout/shop-img.jpg"
              title="SASS / SCSS"
              alt="Sass - Icon"
              width={512}
              height={512}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="distance no-distance-bottom">
          <div className="row card-container">
            <div className="col large-4 margin-bottom">
              <Card title="Clean Code">
                Ich lege großen Wert auf wartbaren und skalierbaren Code, der langfristig verständlich und erweiterbar bleibt.
              </Card>
            </div>
            <div className="col large-4 margin-bottom">
              <Card title="Nutzerzentriert">
                Technische und gestalterische Entscheidungen treffe ich stets mit Blick auf die User Experience.
              </Card>
            </div>
            <div className="col large-4 margin-bottom">
              <Card title="Frontend-Kompetenz">
                Ich entwickle performante, responsive Oberflächen mit sauberer Trennung von Struktur, Stil und Logik.
              </Card>
            </div>
          </div>
        </div>
      </div>

      <section className="history distance bg-color-dark">
        <div className="row justify-arround">
          <div className="col large-7 flex">
            <div className="box flex-grow">
              <h2 className="history-headline">Werdegang</h2>
              <div className="timeline">
                <Card className="badge" date="2023 - Heute" title="WWWE GmbH (Festanstellung)">
                  <p>
                    In meiner aktuellen Position entwickle und betreue ich kundenspezifische Online-Shops auf Basis von Shopify und WooCommerce. Dabei arbeite ich eng mit Design- und Backend-Teams zusammen, um ganzheitliche E-Commerce-Lösungen umzusetzen.
                  </p>
                </Card>
                <Card className="badge" date="2020 - 2023" title="WWWE GmbH (Ausbildung)">
                  <p>
                    Mein Einstieg in die professionelle Webentwicklung. Während meiner Ausbildung war ich an zahlreichen Projekten beteiligt – von Corporate Websites bis hin zu E-Commerce-Lösungen. In dieser Zeit konnte ich mein technisches Fundament festigen und wertvolle Praxiserfahrung sammeln.
                  </p>
                </Card>
                <Card className="badge" date="2016 - 2020" title="Informationstechnischer Assistent (BTI Neuss)">
                  <p>
                    Fundierte Ausbildung im Bereich Softwareentwicklung mit Schwerpunkt auf Webtechnologien. Hier sammelte ich meine ersten praktischen Erfahrungen mit HTML, CSS, JavaScript und PHP und entdeckte meine Leidenschaft für die Webentwicklung.
                  </p>
                </Card>
              </div>
            </div>
          </div>
          <div className="col large-5">
            <h2 className="skills-headline">Skills & Stärken</h2>
            <div className="card-container skills">
              <Card icon="" title="Technische Skills">
                <ul className="unstyled-list">
                  <li>HTML5</li>
                  <li>SCSS / CSS</li>
                  <li>JavaScript</li>
                  <li>Next.js</li>
                  <li>PHP</li>
                </ul>
              </Card>
              <Card icon="" title="E-Commerce & Shop-Systeme">
                <ul className="unstyled-list">
                  <li>WooCommerce</li>
                  <li>E-Pages</li>
                  <li>Shop-Optimierung</li>
                  <li>SEO-Grundlagen</li>
                </ul>
              </Card>
              <Card icon="" title="Tools & Workflow">
                <ul className="unstyled-list">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>VS Code</li>
                  <li>GitHub</li>
                </ul>
              </Card>
              <Card icon="" title="Soft Skills">
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

      <section className="projects distance no-distance-bottom">
        <div className="row">
          <div className="col">
            <h2>Projekt-Referenzen</h2>
            <p>
              Eine Auswahl relevanter Projekte aus den letzten Jahren – mit Fokus auf E-Commerce und Webentwicklung.
            </p>
          </div>
          <div className="col">
            <div className="project-item-container">
              <ProjectItem image="/assets/images/layout/banner.jpg" title="Portfolio Website" slideIndex={0}>
                <p>
                  Entwicklung einer vollständig responsiven Portfolio-Webseite mit Next.js, TailwindCSS und animierten
                  UI-Elementen.
                </p>
              </ProjectItem>
              <ProjectItem image="/assets/images/layout/banner.jpg" title="Portfolio Website" slideIndex={1}>
                <p>
                  Entwicklung einer vollständig responsiven Portfolio-Webseite mit Next.js, TailwindCSS und animierten
                  UI-Elementen.
                </p>
              </ProjectItem>
              <ProjectItem image="/assets/images/layout/banner.jpg" title="Portfolio Website" slideIndex={2}>
                <p>
                  Entwicklung einer vollständig responsiven Portfolio-Webseite mit Next.js, TailwindCSS und animierten
                  UI-Elementen.
                </p>
              </ProjectItem>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about-me-wrapper">
        <div className="row center">
          <div className="col text-align-center">
            <h2>Ein bisschen mehr über mich</h2>
            <p>Wenn ich nicht am Coden oder Designen bin, findest du mich wahrscheinlich dabei</p>
          </div>
          <div className="col huge-10">
            <div className="about-me-container">
              <div className="about-me-item">
                <Image
                  src="/assets/images/icons/php.png"
                  alt="Musik"
                  width={40}
                  height={40}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-full object-cover"
                />
                <p>Musik</p>
              </div>
              <div className="about-me-item">
                <Image
                  src="/assets/images/icons/php.png"
                  alt="Musik"
                  width={40}
                  height={40}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-full object-cover"
                />
                <p>Fitness</p>
              </div>
              <div className="about-me-item">
                <Image
                  src="/assets/images/icons/php.png"
                  alt="Musik"
                  width={40}
                  height={40}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-full object-cover"
                />
                <p>Schwimmen</p>
              </div>
              <div className="about-me-item">
                <Image
                  src="/assets/images/icons/php.png"
                  alt="Musik"
                  width={40}
                  height={40}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-full object-cover"
                />
                <p>Motorrad</p>
              </div>
              <div className="about-me-item">
                <Image
                  src="/assets/images/icons/php.png"
                  alt="Musik"
                  width={40}
                  height={40}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-full object-cover"
                />
                <p>Events</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
