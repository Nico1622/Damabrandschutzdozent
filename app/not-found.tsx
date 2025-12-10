"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="pageWrap">
      <div className="row">
        <div className="col">
          <div className="notfound-container">
            <h1 className="notfound-title">404</h1>

            <p className="notfound-text">
              Diese Seite konnte nicht gefunden werden.
            </p>

            <p className="notfound-subtext">
              Vielleicht wurde sie verschoben oder gelöscht.
            </p>

            <div className="notfound-btn-wrapper">
              <Link href="/" className="btn">
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
