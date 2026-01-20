import { company  } from "../assets/TypeScript/lib/backend/company";
import Link from "next/link";

export const metadata = {
  title: "Impressum",
  description: "Rechtliche Angaben zum Betreiber der Website gemäß §5 TMG. Informationen zu Kontakt und Verantwortlichkeit.",
};

export default function ImprintPage() {
  return ( 
    <div className="imprint pageWrap">
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
            <dd className="margin-bottom">{company.imprint.zip.text}</dd>          
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
            <dd>Beachten Sie auch unsere <Link href="/datenschutz" title="Informationen zum Datenschutz lesen">Datenschutzerklärung</Link></dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
  