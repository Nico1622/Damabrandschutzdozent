export const metadata = {
  title: "Profil – Webdesign mit Köpfchen",
  description: "Seit über fünf Jahren gestalte und entwickle ich moderne, benutzerfreundliche Webauftritte – mit Fokus auf klare Strukturen und zielgerichtete Lösungen.",
};

import ReferenzenSwiper from "./ReferenzenSwiper"; 

export default function ReferenzenPage() {
  return (
    <main className="pageWrap">
      <div className="row">
        <div className="col" data-aos="fade-up" data-aos-delay="100">
          <h1>Referenzen</h1>
        </div>
      </div>

      <ReferenzenSwiper />
    </main>
  );
}
