"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Button from "../components/elements/button"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { Navigation, Pagination, Thumbs, A11y, Keyboard } from "swiper/modules"
import Devices from "../components/elements/devices"
import "swiper/css"

export default function ReferenzenSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const slideParam = searchParams.get("slide")
    if (slideParam && mainSwiper) {
      const slideIndex = Number.parseInt(slideParam, 10)
      if (!isNaN(slideIndex)) {
        mainSwiper.slideTo(slideIndex)
      }
    }
  }, [searchParams, mainSwiper])

  return (
    <div className="referenzen-slider">
      {/* --- MAIN SLIDER --- */}
      <div className="referenzen-container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col">
            <Swiper
              onSwiper={setMainSwiper}
              modules={[Navigation, Pagination, Thumbs, A11y]}
              className="referenz-swiper"
              speed={1200}
              spaceBetween={50}
              grabCursor={true}
              cssMode={true}
              slidesPerView={1}
              role="group"
              aria-label="Hauptnavigation für Projekte"
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              pagination={{
                el: ".pagination-custom",
                clickable: true,
              }}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              a11y={{
                enabled: true,
                prevSlideMessage: 'Zur vorherigen Referenz',
                nextSlideMessage: 'Zur nächsten Referenz',
                firstSlideMessage: 'Dies ist die erste Referenz',
                lastSlideMessage: 'Dies ist die letzte Referenz',
                slideLabelMessage: 'Referenz {{index}} von {{slidesLength}}',
                containerMessage: 'Referenz Slider',
              }}
            >
              {/* --- KASPAR SPIRITUOSEN --- */}
              <SwiperSlide>
                <div className="col large-6">
                  <Devices
                    desktopImage="/assets/images/files/thumbs/kaspar-thumb-desktop.webp"
                    mobileImage="/assets/images/files/thumbs/kaspar-thumb-mobile.webp"
                    desktopAlt="Kaspar Spirituosen – Desktop Ansicht – Onlineshop für Spirituosen und Events"
                    mobileAlt="Kaspar Spirituosen – Mobile Ansicht – Responsive WooCommerce Shop"
                  />
                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>Kaspar Spirituosen</h2>
                      <p>Für Kaspar Spirituosen entstand ein leistungsstarker WooCommerce-Onlineshop, der den Verkauf hochwertiger Spirituosen und Eventtickets gleichermaßen abbildet. Besonderer Fokus lag auf einer stabilen, wartungsfreundlichen Lösung, die vom Kunden selbstständig gepflegt und erweitert werden kann.</p>
                      <p>Durch die Anbindung mehrerer Schnittstellen wurde das bestehende Warenwirtschaftssystem nahtlos integriert. Meine Aufgabe umfasste die vollständige Konzeption und Umsetzung des gesamten Onlineshops – von der technischen Basis bis zur finalen Nutzererfahrung.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image src="/assets/images/icons/wordpress.webp" alt="WordPress Technologie Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/sass.webp" alt="SASS CSS Framework Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/html.webp" alt="HTML5 Webstandard Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/php.webp" alt="PHP Programmierung Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                    </div>

                    <Button href="https://www.kaspar-spirituosen.de/shop/" target="_blank" className="btn" title="Hier geht es zum Kasper Spirituosen - Onlineshop">
                      Kaspar Spirituosen
                    </Button>
                  </div>
                </div>
              </SwiperSlide>

              {/* --- HELPCENTER EUROWEB --- */}
              <SwiperSlide>
                <div className="col large-6">
                  <Devices 
                    desktopImage="/assets/images/files/thumbs/helpcenter-desktop.webp"
                    mobileImage="/assets/images/files/thumbs/helpcenter-mobile.webp" 
                    desktopAlt="Euroweb HelpCenter – Desktop Ansicht – Wissensdatenbank und Support-Portal"
                    mobileAlt="Euroweb HelpCenter – Mobile Ansicht – Responsive Hilfe-Plattform"
                  />
                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>HelpCenter Euroweb</h2>
                      <p>Das HelpCenter von Euroweb dient als zentrale Anlaufstelle für Kundenfragen rund um Produkte und Leistungen des Unternehmens. Realisiert wurde ein umfangreiches WordPress-Projekt mit individuellen Funktionen wie einem Glossar, Taxonomieverwaltung innerhalb von Beiträgen sowie einer leistungsfähigen Suchfunktion mit Hervorhebung der Suchbegriffe.</p>
                      <p>Ich war verantwortlich für den strukturellen Aufbau des Helpcenters sowie die komplette Frontend-Ausgabe. Die inhaltliche Texterstellung wurde dabei konzeptionell mitbetreut.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image src="/assets/images/icons/wordpress.webp" alt="WordPress Technologie Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/php.webp" alt="PHP Programmierung Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/sass.webp" alt="SASS CSS Framework Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/cms.webp" alt="Content Management System Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/javascript.webp" alt="JavaScript Programmierung Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                    </div>

                    <Button href="https://helpcenter.euroweb.de/" target="_blank" className="btn" title="Hier geht es zum Helpcenter von Euroweb">
                      HelpCenter Euroweb
                    </Button>
                  </div>
                </div>
              </SwiperSlide>

              {/* --- SCHARRN3 --- */}
              <SwiperSlide>
                <div className="col large-6">
                  <Devices
                    desktopImage="/assets/images/files/thumbs/scharrn3-desktop.webp"
                    mobileImage="/assets/images/files/thumbs/scharrn3-mobile.webp" 
                    desktopAlt="Scharrn3 – Desktop Ansicht – Webpräsenz für Lifestyle und Dekoration"
                    mobileAlt="Scharrn3 – Mobile Ansicht – Responsive Website für den Einzelhandel"
                  />
                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>Scharrn3</h2>
                      <p>Für den lokalen Deko- und Accessoire-Laden Scharrn3 wurde eine moderne Webpräsenz entwickelt, die das Unternehmen zeitgemäß und ansprechend repräsentiert. Die Inhalte können komfortabel über ein CMS gepflegt werden, wodurch eine langfristige Wartbarkeit gewährleistet ist.</p>
                      <p>Der Fokus lag jedoch klar auf einem modernen, ästhetischen Auftritt, der die Marke emotional transportiert und die Produkte wirkungsvoll präsentiert.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image src="/assets/images/icons/html.webp" alt="HTML5 Webstandard Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/cms.webp" alt="Content Management System Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/sass.webp" alt="SASS CSS Framework Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                    </div>

                    <Button href="https://www.scharrn3.com/" target="_blank" className="btn" title="Hier geht es zu Scharrn3">
                      Scharrn3
                    </Button>
                  </div>
                </div>
              </SwiperSlide>

              {/* --- BUSCHE GRUPPE --- */}
              <SwiperSlide>
                <div className="col large-6">
                  <Devices 
                    desktopImage="/assets/images/files/thumbs/busche-gruppe-desktop.webp"
                    mobileImage="/assets/images/files/thumbs/busche-gruppe-mobile.webp" 
                    desktopAlt="Busche Gruppe – Desktop Ansicht – Corporate Website für Unternehmensgruppe"
                    mobileAlt="Busche Gruppe – Mobile Ansicht – Responsive Unternehmenspräsentation"
                  />
                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>Busche Gruppe</h2>
                      <p>Für die Busche Gruppe entstand eine Corporate Website, die mehrere Unterfirmen unter einem einheitlichen digitalen Auftritt vereint. In enger Zusammenarbeit mit dem Kunden wurden individuelle Designwünsche sowie speziell gewünschte Funktionen umgesetzt.</p>
                      <p>Ein zentrales Element bildet ein detailliertes Anfrageformular für Strategiegespräche, das gezielt auf die Bedürfnisse potenzieller Kunden ausgerichtet ist. Neben der Vermarktung der Produkte lag ein weiterer Schwerpunkt auf der professionellen Präsentation des Unternehmens und seiner Werte.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image src="/assets/images/icons/html.webp" alt="HTML5 Webstandard Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/cms.webp" alt="Content Management System Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/sass.webp" alt="SASS CSS Framework Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                      <Image src="/assets/images/icons/javascript.webp" alt="JavaScript Programmierung Icon" width={100} height={100} style={{ width: "auto", height: "auto" }} className="thumb-image" />
                    </div>

                    <Button href="https://www.busche-gruppe.de/" target="_blank" className="btn" title="Hier geht es zur Busche Gruppe">
                      Busche Gruppe
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* --- THUMBNAILS --- */}
      <div className="row">
        <div className="col">
          <div className="controls" data-aos="fade-up" data-aos-delay="100">
            <Button className="btn-prev btn" title="Vorherige Projekte">
              <i className="icon icon-arrow-left"></i>
            </Button>
            <div className="thumbs-container">
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs, A11y, Keyboard]}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                slideToClickedSlide={true}
                className="thumbs-swiper"
                freeMode={true}
                keyboard={{
                  enabled: true,
                  onlyInViewport: true,
                  pageUpDown: true
                }}
              >
                <SwiperSlide>
                  <div className="thumb-wrapper">
                    <Image src="/assets/images/files/favicon/favicon-kaspar.webp" alt="Projekt Kaspar Spirituosen – Logo Icon" width={60} height={60} style={{ width: "100%", height: "auto" }} className="thumb-image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="thumb-wrapper">
                    <Image src="/assets/images/files/favicon/favicon-helpcenter.webp" alt="Projekt HelpCenter – Logo Icon" width={60} height={60} style={{ width: "100%", height: "auto" }} className="thumb-image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="thumb-wrapper">
                    <Image src="/assets/images/files/favicon/favicon-scharrn3.webp" alt="Projekt Scharrn3 – Logo Icon" width={60} height={60} style={{ width: "100%", height: "auto" }} className="thumb-image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="thumb-wrapper">
                    <Image src="/assets/images/files/favicon/favicon-busche.webp" alt="Projekt Busche Gruppe – Logo Icon" width={100} height={100} style={{ width: "100%", height: "auto" }} className="thumb-image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <Button className="btn-next btn" title="Weitere Projekte">
              <i className="icon icon-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}