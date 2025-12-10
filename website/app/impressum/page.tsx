import { company  } from "../assets/TypeScript/lib/backend/company";
import Link from "next/link";

export const metadata = {
  title: "Profil – Webdesign mit Köpfchen",
  description: "Seit über fünf Jahren gestalte und entwickle ich moderne, benutzerfreundliche Webauftritte – mit Fokus auf klare Strukturen und zielgerichtete Lösungen.",
};

export default function ImprintPage() {
  return ( 
    <div className="imprint">
      <div className="row">
        <div className="col">
            <h1>Impressum</h1>
        </div>

        <div className="col large-6">
          <dl className="styled-list">
            {/* <dt>{company.imprint.companyName.name}:</dt>
            <dd>{company.imprint.companyName.text}</dd> */}

            <dt>{company.imprint.owner.name}:</dt>
            <dd>{company.imprint.owner.text}</dd>

            <dt>{company.imprint.address.name}:</dt>
            <dd>{company.imprint.address.text}</dd>

            <dt>{company.imprint.zip.name}:</dt>
            <dd>{company.imprint.zip.text}</dd>          
          </dl>
        </div>
        <div className="col large-6">
          <dl className="styled-list">

            <dt>{company.imprint.city.name}:</dt>
            <dd>{company.imprint.city.text}</dd>

            <dt>{company.imprint.email  .name}:</dt>
            <dd>
              <Link href={company.imprint.email.href!} title={company.imprint.email.title}>
                {company.imprint.email.text}
              </Link>
            </dd>

            <dt>Datenschutz:</dt>
            <dd>Beachten Sie auch meine <Link href="/datenschutz" title="Informationen zum Datenschutz lesen">Datenschutzerklärung</Link></dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
  