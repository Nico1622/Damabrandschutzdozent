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
      <div className="referenzen-container">
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
              <SwiperSlide>
                <div className="col large-6">
                  <Devices
                    desktopVideo="/assets/files/kaspar-desktop.mp4"
                    desktopPoster="/assets/images/files/kaspar-thumb-desktop.png"
                    mobileVideo="/assets/files/kaspar-mobile.mp4"
                    mobilePoster="/assets/images/files/kaspar-thumb-mobile.png"
                  />

                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>Kaspar Spirituosen</h2>
                      <p>Irgendein Text zu Projekt 1.</p>
                      <p>Irgendein Text zu Projekt 1.</p>
                      <p>Irgendein Text zu Projekt 1.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />
                    </div>

                    <Button href="https://www.kaspar-spirituosen.de/shop/" target="_blank" className="btn" title="Hier geht es zum Kasper Spirituosen - Onlineshop">
                      Zu Kaspar Spirituosen
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col large-6">
                  <Devices desktopVideo="/videos/projekt2-desktop.mp4" />
                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>Busche Gruppe</h2>
                      <p>Irgendein Text zu Projekt 2.</p>
                      <p>Irgendein Text zu Projekt 2.</p>
                      <p>Irgendein Text zu Projekt 2.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />
                    </div>

                    <Button href="https://www.kaspar-spirituosen.de/shop/" target="_blank" className="btn" title="Hier geht es zum Kasper Spirituosen - Onlineshop">
                      Kaspar Spirituosen
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col large-6">
                  <Devices desktopVideo="/videos/projekt2-desktop.mp4" />
                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>Up Cologne</h2>
                      <p>Irgendein Text zu Projekt 3.</p>
                      <p>Irgendein Text zu Projekt 3.</p>
                      <p>Irgendein Text zu Projekt 3.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />
                    </div>

                    <Button href="https://www.kaspar-spirituosen.de/shop/" target="_blank" className="btn" title="Hier geht es zum Kasper Spirituosen - Onlineshop">
                      Kaspar Spirituosen
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col large-6">
                  <Devices desktopVideo="/videos/projekt2-desktop.mp4" />
                </div>
                <div className="col large-5 large-prefix-1 flex align-center">
                  <div className="slide-container">
                    <div className="device-text-container">
                      <h2>Scharrn3</h2>
                      <p>Irgendein Text zu Projekt 3.</p>
                      <p>Irgendein Text zu Projekt 3.</p>
                      <p>Irgendein Text zu Projekt 3.</p>
                    </div>

                    <div className="device-icon-container margin-bottom">
                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />

                      <Image
                        src="/assets/images/icons/html.png"
                        alt="HTML Icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                        className="thumb-image"
                      />
                    </div>

                    <Button href="https://www.kaspar-spirituosen.de/shop/" target="_blank" className="btn" title="Hier geht es zum Kasper Spirituosen - Onlineshop">
                      Kaspar Spirituosen
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* --- Buttons --- */}
      <div className="row">
        <div className="col">
          <div className="controls">
            <Button className="btn-prev btn" title="Vorherige Projekte">
              Zurück
            </Button>
            <div className="thumbs-container">
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs, A11y,  Keyboard]}
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
                    <Image
                      src="/assets/images/icons/html.png"
                      alt="HTML Icon"
                      width={100}
                      height={100}
                      style={{ width: "auto", height: "auto" }}
                      className="thumb-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="thumb-wrapper">
                    <Image
                      src="/assets/images/icons/html.png"
                      alt="HTML Icon"
                      width={100}
                      height={100}
                      style={{ width: "auto", height: "auto" }}
                      className="thumb-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="thumb-wrapper">
                    <Image
                      src="/assets/images/icons/html.png"
                      alt="HTML Icon"
                      width={100}
                      height={100}
                      style={{ width: "auto", height: "auto" }}
                      className="thumb-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="thumb-wrapper">
                    <Image
                      src="/assets/images/icons/html.png"
                      alt="HTML Icon"
                      width={100}
                      height={100}
                      style={{ width: "auto", height: "auto" }}
                      className="thumb-image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <Button className="btn-next btn" title="Weitere Projekte">
              Weiter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
