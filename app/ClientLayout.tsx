'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import Navigation from "./components/elements/navigation";
import Header from "./components/header";
import Button from "./components/elements/button";
import Footer from "./components/footer";
import LazyLoad from './assets/TypeScript/_module/lazyLoad';

import { MainNavigation } from "./components/navigation/main-navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
  customBodyClass?: string;
}

// 🔐 Login global aktiv/deaktiviert (Client-seitig verfügbar)
const LOGIN_ENABLED = process.env.NEXT_PUBLIC_LOGIN_ENABLED === "true";

export default function ClientLayout({ children, customBodyClass }: ClientLayoutProps) {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const body = document.body;
    let classes: string[] = [];

    if (customBodyClass) {
      classes.push(customBodyClass);
    } else if (!pathname || pathname === "/") {
      classes = ["index"];
    } else {
      const segments = pathname.split("/").filter(Boolean);
      classes.push(...segments);

      if (segments.length >= 2) {
        for (let i = 1; i < segments.length; i++) {
          classes.push(`${segments[i - 1]}-${segments[i]}`);
        }
      }
    }

    body.className = classes.join(" ");

    // ✅ Login-Status bestimmen
    if (!LOGIN_ENABLED) {
      // Login-Schutz deaktiviert → immer "eingeloggt"
      setLoggedIn(true);
    } else {
      // Login-Schutz aktiv → Cookie prüfen
      const isLoggedIn = document.cookie.includes("loggedIn=true");
      setLoggedIn(isLoggedIn);
    }

    return () => {
      body.className = "";
    };
  }, [pathname, customBodyClass]);

  return (
    <>
      {loggedIn && (
        <div className="navigation">
          <div className="row">
            <div className="col">
              <MainNavigation />
            </div>
          </div>
        </div>
      )}

      {loggedIn && <Header />}

      <main id="main" role="main">
        <LazyLoad offset="200px" threshold={0.1}>
          {children}
        </LazyLoad>
      </main>

      {loggedIn && <Footer />}

      <Button
        className="back-to-top no-btn"
        aria-label="Zum Seitenanfang scrollen"
      >
        &#8679;
      </Button>
    </>
  );
}
