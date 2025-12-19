import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Konfiguration: Login-Schutz aktivieren/deaktivieren
const LOGIN_ENABLED = true;

const PUBLIC_PATHS = ["/login", "/api/login"];

export function middleware(req: NextRequest) {
  // Wenn der Login-Schutz global deaktiviert ist, lassen wir jede Anfrage durch
  if (!LOGIN_ENABLED) {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;

  // 1. Ausnahme für statische Dateien, Assets und öffentliche Pfade
  if (
    pathname.startsWith("/_next/") ||       // Interne Next.js Dateien (Chunks, Static)
    pathname.startsWith("/favicon.ico") ||  // Favicon
    pathname.startsWith("/assets/") ||       // Dein Assets-Ordner
    pathname.endsWith(".css") ||             // Direkte CSS-Anfragen
    PUBLIC_PATHS.some(path => pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }

  // 2. Prüfung des Login-Status via Cookies
  const loggedIn = req.cookies.get("loggedIn")?.value;

  // 3. Wenn nicht eingeloggt, zur Login-Seite umleiten
  if (!loggedIn) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Eingeloggt -> Anfrage fortsetzen
  return NextResponse.next();
}
