import { NextRequest, NextResponse } from "next/server";

// Benutzer-Daten nur Passwort-basiert
const USERS = [
  { password: "WPLogin213!", role: "admin" },
  { password: "Bewerbung2026", role: "visitor" },
];

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  // Prüfen, ob Passwort existiert
  const user = USERS.find(u => u.password === password);

  if (user) {
    const res = NextResponse.json({ success: true, role: user.role });
    res.cookies.set("loggedIn", "true", { httpOnly: false, path: "/" });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
