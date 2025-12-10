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
          <div className="col large-6">
            <h1 className="line">
              Webdesign mit Köpfchen
              <span>klarer Fokus aufs Wesentliche</span>
            </h1>

            <p>
              Was als Schulpraktikum begann, wurde schnell zu einer Leidenschaft. Seit über <strong>fünf Jahren</strong>{" "}
              gestalte und entwickle ich moderne, benutzerfreundliche und zielgerichtete Webauftritte – vom ersten
              Layout bis zur Umsetzung mithilfe von CMS, sauberem HTML, SCSS und der Integration passender
              JavaScript-Tools.
            </p>
            <p>
              Ein besonderer Fokus liegt auf der Erstellung und Pflege von individuellen Online-Shops mit Hilfe von
              WooCommerce. Neben meiner kreativen Arbeit begleite ich Auszubildende und Praktikant:innen, bin
              Ansprechpartner bei technischen Fragen rund um das Helpdesk, sowie führend mit dabei bei der Erstellung
              von Onlineshops mit WooCommerce.
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
            <div className="col large-4">
              <Card title="Clean Code">
                Wartbarer, skalierbarer Code ist die Grundlage jeder erfolgreichen Anwendung. Ich schreibe Code, den
                auch andere verstehen.
              </Card>
            </div>
            <div className="col large-4">
              <Card title="Nutzerzentriert">
                Am Ende zählt die User Experience. Jede Entscheidung wird mit dem Nutzer im Fokus getroffen.
              </Card>
            </div>
            <div className="col large-4">
              <Card title="Kreative Lösungen">
                Komplexe Probleme brauchen kreative Ansätze. Ich denke über den Tellerrand hinaus.
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
                    Entwicklung und Wartung von kundenspezifischen Online-Shops auf Basis von Shopify und WooCommerce.
                    Enge Zusammenarbeit mit Design- und Backend-Teams.
                  </p>
                </Card>
                <Card className="badge" date="2020 - 2023" title="WWWE GmbH (Ausbildung)">
                  <p>
                    Einstieg in die professionelle Webentwicklung. Mitarbeit an verschiedenen Projekten – von Corporate
                    Websites bis zu kleineren E-Commerce Lösungen.
                  </p>
                </Card>
                <Card className="badge" date="2016 - 2020" title="Informationstechnischer Assistent (BTI Neuss)">
                  <p>
                    Fundierte Ausbildung in der Softwareentwicklung mit Schwerpunkt auf Webtechnologien. Erste
                    praktische Erfahrungen in HTML, CSS, JavaScript und PHP.
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
                  <li>
                    <span>HTML5</span>
                  </li>
                  <li>
                    <span>SCSS</span>
                  </li>
                  <li>
                    <span>Next.JS</span>
                  </li>
                  <li>
                    <span>PHP</span>
                  </li>
                  <li>
                    <span>JavaScript</span>
                  </li>
                </ul>
              </Card>
              <Card icon="" title="E-Commerce & Shop-Systeme">
                <ul className="unstyled-list">
                  <li>
                    <span>WooCommerce</span>
                  </li>
                  <li>
                    <span>E-Pages</span>
                  </li>
                  <li>
                    <span>SEO Optimierung</span>
                  </li>
                </ul>
              </Card>
              <Card icon="" title="Tools & Workflow">
                <ul className="unstyled-list">
                  <li>
                    <span>Figma</span>
                  </li>
                  <li>
                    <span>Adobe XD</span>
                  </li>
                  <li>
                    <span>VS Code</span>
                  </li>
                  <li>
                    <span>GitLab</span>
                  </li>
                </ul>
              </Card>
              <Card icon="" title="Soft Skills">
                <ul className="unstyled-list">
                  <li>
                    <span>Strukturierte Arbeitsweise</span>
                  </li>
                  <li>
                    <span>Kreativität</span>
                  </li>
                  <li>
                    <span>Zuverlässigkeit</span>
                  </li>
                  <li>
                    <span>Nutzerzentriertes Denken</span>
                  </li>
                  <li>
                    <span>Teamarbeit</span>
                  </li>
                  <li>
                    <span>Problemlösung</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="projects distance no-distance-bottom">
        <div className="row">
          <div className="col">
            <h2>Projekt Referenzen</h2>
            <p>
              Eine Auswahl meiner Arbeiten aus den letzten Jahren. Von E-Commerce Lösungen bis zu komplexen
              Webanwendungen.
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
