export const metadata = {
  title: "500 – Serverfehler",
  description: "Ups! Auf dem Server ist ein Fehler aufgetreten. Bitte versuche es später erneut oder kehre zur Startseite zurück.",
};

export default function ServerErrorPage() {
  return (
    <div className="pageWrap">
      <div className="row">
        <div className="col">
          <div
            className="notfound-container"
            data-aos="fade-up"
          >
            <h1
              className="notfound-title"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              500
            </h1>

            <p
              className="notfound-text"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Interner Serverfehler
            </p>

            <p
              className="notfound-subtext"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Etwas ist schiefgelaufen. Bitte versuche es später erneut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
