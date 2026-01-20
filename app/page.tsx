"use client";

import Link from "next/link"
import Image from "next/image"
import Button from "./components/elements/button"

export default function MainPage() {
    return (
    <div className="pageWrap">
        <div className="teaser">
            <div className="row">
                <div className="col">
                    <h1>Leistungen im Überblick</h1>
                </div>

                <div className="col">
                    <div className="teaser-container">
                        <div className="teaser-item">
                            Brandschutzunterweisung
                        </div>
                        <div className="teaser-item">
                            Brandschutzhelfer Ausbildung
                        </div>
                        <div className="teaser-item">
                            Praktisches Feuerlöschtraining
                        </div>
                        <div className="teaser-item">
                            Brandschutzhelfer & Evakuierungshelfer
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="first-content">
            <div className="row">
                <div className="col large-6 huge-5 huge-suffix-1">
                    <Image src={"/assets/images/layout/first-content.png"} alt={""} width={639} height={595} style={{width: "100%", height: "auto"}}/>
                </div>
                <div className="col large-6">
                    <h2>
                        Die Brandschutz­unterweisung
                        <span>Was, wie, wann und wie oft?</span>
                    </h2>

                    <p>
                        Die <Link href="/brandschutz/brandschutzunterweisung" title="Brandschutzunterweisung">Brandschutzunterweisung</Link> ist ein wichtiger Bestandteil des <strong>betrieblichen Brandschutzes</strong>. Sie dient der Vorbeugung und soll Ihre Mitarbeiter fit für den Ernstfall machen. Das Arbeitsschutzgesetz verpflichtet den Arbeitgeber, alle erforderlichen Maßnahmen zu treffen, um das <strong>Leben und die Gesundheit</strong> seiner Mitarbeiter zu gewährleisten. Im § 12 ArbSchG ist festgelegt, dass der Arbeitgeber alle Beschäftigten über den Sicherheits- und Gesundheitsschutz bei der Arbeit zu unterweisen sind.
                    </p>
                </div>

                <div className="col">
                    <div className="box">
                        Der Brandschutz ist ein Teil dieser <strong>Arbeitsschutz&shy;­unterweisung</strong>, da Brandgefahr praktisch in allen Unternehmen, selbst in Firmen mit reiner Bürotätigkeit, besteht.

                        <a href="" title="">
                            <i className="icon icon-arrow"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="second-content">
            <div className="row">
                <div className="col large-6 huge-5 huge-prefix-1">
                    <h2>Ausbildung von Brandschutz- und Evakuierungshelfern</h2>
                    <p>
                        Die Teilnehmer lernen zunächst die Grundlagen des Brandschutzes, wie Feuerlöscherarten, Brandklassen und Löschtechniken. Zudem werden sie in der Erkennung und Meldung von Brandgefahren und der richtigen Verwendung von Notrufsystemen geschult. Auch die Evakuierung von Personen in Notsituationen wird intensiv behandelt. Dazu gehören unter anderem die Organisation und Durchführung von Evakuierungsübungen.
                    </p>

                    <a href="" title="" className="btn">
                        Mehr erfahren
                    </a>
                </div>
                <div className="col large-6 huge-5-huge-prefix-1">
                    <Image src={"/assets/images/layout/second-content.png"} alt={""} width={636} height={863} style={{width: "100%", height: "auto"}}/>
                </div>
            </div>
        </div>

        <div className="banner">
            <div className="row">
                <div className="col large-7 huge-6 full-5">
                    <blockquote>CO2 Übungsfeuerlöscher</blockquote>
                    <p>Der CO2-Übungsfeuerlöscher ist entscheidend für <strong>praxisnahe Schulungen</strong> im sicheren Umgang mit Löschanlagen. Diese Simulation fördert <strong>effektives Handeln</strong> im Ernstfall, besonders in sensiblen Arbeitsbereichen.</p>
                    <a href="" title="" className="btn">
                        Weitere Informationen
                    </a>
                </div>
            </div>
        </div>

        <div className="third-content">
            <div className="row">
                <div className="col">
                    <h2>Brandschutzhelfer Ausbildung</h2>
                </div>
                <div className="col large-6 huge-5">
                    <p>Die Teilnehmer lernen zunächst die Grundlagen des Brandschutzes, wie Feuerlöscherarten, Brandklassen und Löschtechniken. Zudem werden sie in der Erkennung und Meldung von Brandgefahren und der richtigen Verwendung von Notrufsystemen geschult. Auch die Evakuierung von Personen in Notsituationen wird intensiv behandelt.</p>
                </div>
                <div className="col large-6 huge-5">
                    <p>Ein besonderer Schwerpunkt der Ausbildung liegt auf der praktischen Anwendung des Gelernten. Die Teilnehmer haben die Möglichkeit, ihre Fähigkeiten in realistischen Szenarien zu testen und zu verbessern. Hierzu werden beispielsweise Brände simuliert, um das Verhalten im Ernstfall zu üben.</p>

                    <a href="" title="" className="btn">
                        Zum Brandschutzhelfer
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}