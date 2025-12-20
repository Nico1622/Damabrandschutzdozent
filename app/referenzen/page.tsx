export const metadata = {
  title: "Meine Referenzen – Webdesign mit Konzept",
  description: "Einblick in meine Webdesign-Referenzen: durchdachte Konzepte, moderne Gestaltung und funktionale Lösungen aus realen Kundenprojekten.",
};

import ReferenzenSwiper from "./ReferenzenSwiper"; 
import { Suspense } from "react";

export default function ReferenzenPage() {
  return (
    <main className="pageWrap">
      <div className="row">
        <div className="col" data-aos="fade-up" data-aos-delay="100">
          <h1>Referenzen</h1>
        </div>
      </div>
      
      <Suspense fallback={<div>Loading…</div>}>
        <ReferenzenSwiper />
      </Suspense>

    </main>
  );
}
