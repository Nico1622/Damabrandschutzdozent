"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../elements/button";
import Captcha from "./FormCaptcha";
import { usePathname } from 'next/navigation';
import { createPortal } from "react-dom";

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [captchaValid, setCaptchaValid] = useState(false);
    const [captchaKey, setCaptchaKey] = useState(0); // Key für Captcha-Reset

    const pathname = usePathname();
    const isContactPage = pathname === '/kontakt'; 

    // Notification automatisch nach 4 Sekunden ausblenden
    useEffect(() => {
        if (!status) return;
        const timer = setTimeout(() => setStatus(null), 4000);
        return () => clearTimeout(timer);
    }, [status]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        const body = Object.fromEntries(formData.entries());

        const form = e.currentTarget; // Formular speichern

        // Captcha prüfen
        if (!captchaValid) {
            setStatus("Captcha ist falsch!");
            setLoading(false);
            setCaptchaKey(prev => prev + 1); // neues Captcha generieren
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
                form.reset(); // Formular resetten
                setCaptchaValid(false);
                setCaptchaKey(prev => prev + 1); // neues Captcha generieren
            } else {
                setStatus("Fehler beim Senden der Nachricht!");
            }
        } catch (error) {
            console.error(error);
            setStatus("Fehler beim Senden der Nachricht!");
        } finally {
            setLoading(false);
        }
    }


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="row">

                    {!isContactPage && (
                        <fieldset className="col form-headline">
                            Nehmen Sie mit mir Kontakt auf
                        </fieldset>
                    )}
                                    
                    <fieldset className="col large-6">
                        <label htmlFor="companyName">Firmenname <small>(Pflicht)</small></label>
                        <input type="text" id="companyName" placeholder="Ihr Firmenname" name="companyName" required />

                        <label htmlFor="email">E-Mail <small>(Pflicht)</small></label>
                        <input type="email" id="email" placeholder="Ihre E-Mail" name="email" required />

                        <label htmlFor="phone">Telefon <small>(Pflicht)</small></label>
                        <input type="tel" id="phone" placeholder="Ihre Telefonnummer" name="phone" required />
                    </fieldset>

                    <fieldset className="col large-6">
                        <label htmlFor="message">Nachricht <small>(Pflicht)</small></label>
                        <textarea id="message" placeholder="Ihre Nachricht" name="message" rows={6} required />

                        {/* Captcha */}
                        <Captcha key={captchaKey} onValidate={setCaptchaValid} />

                        <span className="checkbox-container">
                            <input
                                type="checkbox"
                                id="Datenschutz"
                                name="Datenschutz"
                                required
                            />
                            <label htmlFor="Datenschutz">
                                Die <Link href="/datenschutz" title="Informationen zum Datenschutz lesen" target="_blank">Datenschutzerklärung</Link> habe ich gelesen und akzeptiert.
                            </label>
                        </span>

                        <Button type="submit" disabled={loading}>
                            {loading ? "Senden..." : "Nachricht abschicken"}
                        </Button>
                    </fieldset>
                </div>
            </form>

            {/* Notification über Portal */}
            {status && typeof document !== "undefined" && createPortal(
                <p
                    role="alert"
                    className="notification"
                    onClick={() => setStatus(null)}
                >
                    {status}
                </p>,
                document.body
            )}
        </>
    );
}
