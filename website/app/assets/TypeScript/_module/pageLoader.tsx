"use client";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false); // für Fade-In/Fade-Out

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]") as HTMLAnchorElement | null;

      if (link && link.href.startsWith(window.location.origin)) {
        const href = link.getAttribute("href");

        if (href && (href.startsWith("#") || href.includes("#"))) return;

        setLoading(true);
        setVisible(true);

        const minLoadingTime = 1000; // ms
        setTimeout(() => setVisible(false), minLoadingTime); // Fade-Out starten
        setTimeout(() => setLoading(false), minLoadingTime + 300); // nach Fade-Out komplett entfernen
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {loading && (
        <div className={`page-loader ${visible ? "visible" : ""}`} />
      )}
    </>
  );
}
