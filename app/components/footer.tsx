"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "../assets/TypeScript/lib/backend/company";
import { FooterNavigation } from "../components/navigation/footer-navigation"

export default function Footer() {
  return (
    <footer className="bg-color-dark" role="contentinfo">
      <div className="row">
        <div className="col">
          <Link href="/" title="Zur Startseite und Übersicht gelangen">
            <Image className="no-border" src="/assets/images/layout/branding.png" alt={`${company.name.text} - Logo`} width={150} height={24} style={{ width: "auto", height: "auto" }} />
          </Link> 
        </div>
        <div className="col">
          <address>
            <strong>E-Mail: </strong> 
            
            <Link href={company.email.href!} title={company.email.title}>
              {company.email.text}
            </Link>
          </address>

          <span className="trenner"></span>
        </div>
      </div>

      {/* Branding & Kontakt-Info Leiste */}
      {/* <div className="row center" data-aos="fade-up">
        <div className="col large-10">
          <div className="footer-wrapper">
            <div className="footer-branding" data-aos="fade-up" data-aos-delay="200">
              <Link href="/" title="Zur Startseite und Übersicht gelangen">
                <Image className="no-border" src="/assets/images/layout/branding.svg" alt={`${company.name.text} - Logo`} width={150} height={24} style={{ width: "auto", height: "auto" }} />
              </Link> 
            </div>

            <span className="trenner"></span>

            <div className="email" data-aos="fade-up" data-aos-delay="400">
              <strong>E-Mail:</strong>{" "}
              <Link href={company.email.href!} title={company.email.title}>
                {company.email.text}
              </Link>
            </div>

            <span className="trenner"></span>
          </div>
        </div>
      </div> */}

      {/* Rechtliche Navigation ganz unten */}
     
      <FooterNavigation />
     
    </footer>
  );
}