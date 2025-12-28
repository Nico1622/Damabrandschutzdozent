"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./form/form";
import { company } from "../assets/TypeScript/lib/backend/company";
import { usePathname } from 'next/navigation';
import { FooterNavigation } from "../components/navigation/footer-navigation"

export default function Footer() {
  const pathname = usePathname()

  if (pathname == "/login") {
    return null
  }

  const isContactPage = pathname === '/kontakt'; 

  return (
    <footer className="bg-color-dark" role="contentinfo">
      {/* Branding & Kontakt-Info Leiste */}
      <div className="row center" data-aos="fade-up">
        <div className="col large-10">
          <div className="footer-wrapper">
            {/* Branding */}
            <div className="footer-branding" data-aos="fade-up" data-aos-delay="200">
              <Link href="/" title="Zur Startseite und Übersicht gelangen">
                <Image className="no-border" src="/assets/images/layout/branding.svg" alt={`${company.name.text} - Logo`} width={150} height={24} style={{ width: "auto", height: "auto" }} />
              </Link> 
            </div>

            <span className="trenner"></span>

            {/* E-Mail */}
            <div className="email" data-aos="fade-up" data-aos-delay="400">
              <strong>E-Mail:</strong>{" "}
              <Link href={company.email.href!} title={company.email.title}>
                {company.email.text}
              </Link>
            </div>

            <span className="trenner"></span>

            {/* Social */}
            <div className="social-container" data-aos="fade-up" data-aos-delay="600">
              <ul>
                <li>
                  <Link href={company.xing.href!} target="_blank" rel="noopener noreferrer" title={company.xing.title} className={company.xing.text}>
                    <Image src={`/assets/images/icons/${company.xing.text}.svg`} alt={`${company.xing.name} - Logo`} width={24} height={24} style={{ height: "auto" }} />
                  </Link>
                </li>
                <li>
                  <Link href={company.linkedin.href!} target="_blank" rel="noopener noreferrer" title={company.linkedin.title} className={company.linkedin.text}>
                    <Image src={`/assets/images/icons/${company.linkedin.text}.svg`} alt={`${company.linkedin.name} - Logo`} width={24} height={24} style={{ height: "auto" }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Kontaktformular - Die wichtigste Sektion im Footer */}
      {!isContactPage && (
        <div className="row center" id="kontaktform" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="col">
            <ContactForm />
          </div>
        </div>
      )}

      {/* Rechtliche Navigation ganz unten */}
     
      <FooterNavigation />
     
    </footer>
  );
}