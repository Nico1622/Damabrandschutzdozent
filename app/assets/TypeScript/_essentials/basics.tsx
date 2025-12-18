"use client"
import { useEffect } from "react"
import { getLenis } from "../_module/smoothScroll" // Pfad ggf. anpassen

/**
 * Funktion für das Logo-Scrolling. 
 * Wird in der Navigation aufgerufen, um bei Klick auf das Logo 
 * auf der Startseite sanft nach oben zu scrollen.
 */
export const handleLogoScroll = (e: React.MouseEvent, pathname: string) => {
  if (pathname === "/") {
    e.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      // Nutzt Lenis für den identischen Smooth-Scroll wie dein BackToTop-Button
      lenis.scrollTo(0, { 
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      });
    } else {
      // Fallback für Browser ohne aktives Smooth-Scroll Modul
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};

const Basics = () => {
  useEffect(() => {
    const html = document.documentElement

    // --- 1. Browser & Device Detection ---
    const applyDeviceClasses = () => {
      const ua = navigator.userAgent
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
      const isChrome = /Chrome/i.test(ua) && !/Edg/i.test(ua)
      const isFirefox = /Firefox/i.test(ua)
      const isSafari = /^((?!chrome|android|crios|fxios|safari).)*safari/i.test(ua)
      const isEdge = /Edg/i.test(ua)

      // Grundklassen für Desktop/Mobil
      html.classList.add(isMobile ? "mobile" : "desktop")
      
      // Browser-spezifische Klassen für CSS-Fixes
      if (isChrome) html.classList.add("chrome")
      else if (isFirefox) html.classList.add("firefox")
      else if (isSafari) html.classList.add("safari")
      else if (isEdge) html.classList.add("edge")
    }

    // --- 2. Breakpoint Logic ---
    const breakpoints: { [key in "tiny" | "small" | "medium" | "large" | "giant" | "huge" | "full" | "cut"]: number } = {
      tiny: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-tiny"), 10) || 0,
      small: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-small"), 10) || 480,
      medium: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-medium"), 10) || 768,
      large: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-large"), 10) || 1024,
      giant: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-giant"), 10) || 1200,
      huge: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-huge"), 10) || 1400,
      full: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-full"), 10) || 1600,
      cut: Number.parseInt(getComputedStyle(html).getPropertyValue("--break-cut"), 10) || 1920,
    }

    // Hilfsfunktion (intern im Effect nutzbar)
    const isBreakpointActive = (name: keyof typeof breakpoints): boolean => {
      return window.innerWidth >= breakpoints[name]
    }

    // --- 3. Scroll Logic (Header & State) ---
    let lastScrollTop = 0

    const onScroll = () => {
      const scrollTop = window.pageYOffset || html.scrollTop

      // Richtungserkennung (Scroll-Up / Scroll-Down)
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        html.classList.add("scrolling-down")
        html.classList.remove("scrolling-up")
      } else if (scrollTop < lastScrollTop) {
        html.classList.remove("scrolling-down")
        html.classList.add("scrolling-up")
      }

      // Status am Seitenanfang
      if (scrollTop <= 0) {
        html.classList.remove("scrolling-up", "scrolled", "scrolling-down")
      } else {
        html.classList.add("scrolled")
      }

      lastScrollTop = scrollTop
    }

    // Event Listener hinzufügen
    window.addEventListener("scroll", onScroll, { passive: true })
    applyDeviceClasses()

    // Cleanup beim Unmount
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return null
}

export default Basics