import ContactForm from "../components/form/form";

export const metadata = {
  title: "Kontakt & Anfrage",
  description: "Kontaktieren Sie mich für ein Gespräch.",
};


export default function KontaktPage() {
  return (
    <div className="pageWrap">
      <div className="row">
        <div className="col" data-aos="fade-up" data-aos-delay="100">
          <h1>Kontakt</h1>
        </div>
      </div>

      <div className="row center">
        <div className="col" data-aos="fade-up" data-aos-delay="100">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
