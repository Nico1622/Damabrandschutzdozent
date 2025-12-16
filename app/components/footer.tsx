"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./form/form";
import { company  } from "../assets/TypeScript/lib/backend/company";
import { usePathname } from 'next/navigation';
import { FooterNavigation } from "../components/navigation/footer-navigation"
// import { footerNavigationConfig } from "../assets/TypeScript/lib/site-navigation"


export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/kontakt'; 

  return (
  <footer className="bg-color-dark" role="contentinfo">
    <div className="row center">
      <div className="col large-10">
        <div className="footer-wrapper">
          {/* Branding */}
          <div className="footer-branding">
            <Link href="/" title="Zur Startseite und Übersicht gelangen">
              <Image className="no-border" src="/assets/images/layout/branding.svg" alt={`${company.address.text} - Logo`} width={150} height={24} style={{ width: "auto", height: "auto" }} />
            </Link>
          </div>

          <span className="trenner"></span>

          {/* E-Mail */}
          <div className="email">
            <strong>E-Mail:</strong>{" "}
            <Link href={company.email.href!} title={company.email.title}>
              {company.email.text}
            </Link>
          </div>

          <span className="trenner"></span>

          {/* Social */}
          <div className="social-container">
            <ul>
              <li>
                <Link href={company.instagram.href!} target="_blank" rel="noopener noreferrer" title={company.instagram.title}
                  className={company.instagram.text}>
                  <Image src={`/assets/images/icons/${company.instagram.name}.svg`}
                      alt={company.instagram.text} 
                      width={24}
                      height={24}
                      style={{ height: "auto" }}
                  />
                </Link>
              </li>
              <li>
                <Link href={company.linkedin.href!} target="_blank" rel="noopener noreferrer" title={company.linkedin.title}
                  className={company.linkedin.text}>
                  <Image src={`/assets/images/icons/${company.linkedin.name}.svg`}
                      alt={company.linkedin.text}
                      width={24}
                      height={24}
                      style={{ height: "auto" }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {!isContactPage && (
      <div className="row center" id="kontaktform">
        <div className="col">
          <ContactForm />
        </div>
      </div>
    )}

    <FooterNavigation />

    {/* <nav className="navi-add">
      <ul aria-label="Footer Navigation">
        {footerNavigationConfig.map((item) => (
          <li key={item.href}>
            <Link href={item.href} title={item.description || item.label}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav> */}
    
  </footer>
  );
}