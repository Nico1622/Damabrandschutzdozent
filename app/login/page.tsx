"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      setError("Passwort falsch");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card" data-aos="fade-up">
        <h1 className="login-title">Login</h1>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">

          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin(e);
              }}
              required
              autoComplete="off"
            />

            <i
              title={showPassword ? "Passwort ausblenden" : "Passwort anzeigen"}
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontStyle: "normal",
                userSelect: "none",
              }}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </i>
          </div>

          <button type="submit">Einloggen</button>
        </form>
      </div>
    </div>
  );
}
