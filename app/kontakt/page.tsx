import ContactForm from "../components/form/form";

export const metadata = {
  title: "Profil – Webdesign mit Köpfchen",
  description: "Seit über fünf Jahren gestalte und entwickle ich moderne, benutzerfreundliche Webauftritte – mit Fokus auf klare Strukturen und zielgerichtete Lösungen.",
};

export default function KontaktPage() {
  return (
    <div className="pageWrap">
      <div className="row">
        <div className="col">
          <h1>Kontakt</h1>
        </div>
      </div>

      <div className="row center">
        <div className="col">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
