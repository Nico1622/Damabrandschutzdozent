'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/elements/button";
import LazyLoad from "./assets/TypeScript/_module/lazyLoad";
import { MainNavigation } from "./components/navigation/main-navigation";

interface ClientLayoutProps {
  children: React.ReactNode; 
  customBodyClass?: string;
}

const LOGIN_ENABLED = process.env.NEXT_PUBLIC_LOGIN_ENABLED === "true";

export default function ClientLayout({ children, customBodyClass }: ClientLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

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

      for (let i = 1; i < segments.length; i++) {
        classes.push(`${segments[i - 1]}-${segments[i]}`);
      }
    }

    body.className = classes.join(" ");

    // 🔐 Login bestimmen
    let isLoggedIn = true;

    if (LOGIN_ENABLED) {
      isLoggedIn = document.cookie.includes("loggedIn=true");
    }

    setLoggedIn(isLoggedIn);

    // 🔁 Redirect, wenn nicht eingeloggt
    if (!isLoggedIn && pathname !== "/login") {
      router.replace("/login");
    }

    return () => {
      body.className = "";
    };
  }, [pathname, customBodyClass, router]);

  return (
    <>
      {/* Layout IMMER rendern */}
      <div className="navigation">
        <div className="row">
          <div className="col">
            <MainNavigation />
          </div>
        </div>
      </div>

      <Header />

      <main id="main" role="main">
        {/* 
          children sind ENTWEDER:
          - normale Seite (eingeloggt)
          - /login/page.tsx (nicht eingeloggt)
        */}
        {loggedIn === null ? null : (
          <LazyLoad offset="200px" threshold={0.1}>
            {children}
          </LazyLoad>
        )}
      </main>

      <Footer />

      <Button
        className="back-to-top no-btn"
        title="Zurück zum Start"
        aria-label="Zum Seitenanfang scrollen"
      >
        &#8679;
      </Button>
    </>
  );
}
