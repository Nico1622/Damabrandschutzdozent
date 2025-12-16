"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../elements/button";
import Captcha from "./FormCaptcha";
import { usePathname } from 'next/navigation';

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<number | null>(null);

    const pathname = usePathname();
    const isContactPage = pathname === '/kontakt'; 

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        const body = Object.fromEntries(formData.entries());

        // Captcha prüfen
        if (!captchaValue) {
            setStatus("Bitte Captcha auswählen!");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setStatus("Nachricht erfolgreich gesendet!");
                e.currentTarget.reset();
                setCaptchaValue(null);
            }
        } catch {
                // Fehler ignorieren
        } finally {
                setLoading(false);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="row">

                {!isContactPage && (
                    <fieldset className="col form-headline">
                        Nehmen Sie mit mir Kontakt auf
                    </fieldset>
                )}
                               
                <fieldset className="col large-6">
                    <label htmlFor="companyName">Firmenname</label>
                    <input type="text" id="companyName" placeholder="Ihr Firmenname" name="companyName" required />

                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" placeholder="Ihre E-Mail" name="email" required />

                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" placeholder="Ihre Telefonnummer" name="phone" required />
                </fieldset>

                <fieldset className="col large-6">
                    <label htmlFor="message">Nachricht</label>
                    <textarea id="message" placeholder="Ihre Nachricht" name="message" rows={6} required />

                    {/* Captcha */}
                    <Captcha onChange={setCaptchaValue} />

                    <span className="checkbox-container">
                        <input
                        type="checkbox"
                        id="Datenschutz"
                        name="Datenschutz"
                        required
                        />
                        <label htmlFor="Datenschutz">
                        Die 
                        <Link href="/datenschutz" title="Informationen zum Datenschutz lesen" target="_blank">
                            Datenschutzerklärung
                        </Link>
                        habe ich gelesen und akzeptiert.
                        </label>
                    </span>

                    <Button type="submit" disabled={loading}>
                        {loading ? "Senden..." : "Nachricht abschicken"}
                    </Button>

                    {status && (
                        <p 
                            className="notification" 
                            onClick={() => setStatus('')} // leert den Status beim Klick
                        >
                            {status}
                        </p>
                        )}

                </fieldset>
            </div>
        </form>
    );
}