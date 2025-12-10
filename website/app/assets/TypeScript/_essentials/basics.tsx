"use client"
import { useEffect } from "react"

const Basics = () => {
  useEffect(() => {
    const applyDeviceClasses = () => {
      const html = document.documentElement
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isChrome = /Chrome/i.test(navigator.userAgent) && !/Edge/i.test(navigator.userAgent)
      const isFirefox = /Firefox/i.test(navigator.userAgent)
      const isSafari = /^((?!chrome|android|crios|fxios|safari).)*safari/i.test(navigator.userAgent)
      const isEdge = /Edg/i.test(navigator.userAgent)

      if (isMobile) {
        html.classList.add("mobile")
      } else {
        html.classList.add("desktop")
      }

      if (isChrome) {
        html.classList.add("chrome")
      } else if (isFirefox) {
        html.classList.add("firefox")
      } else if (isSafari) {
        html.classList.add("safari")
      } else if (isEdge) {
        html.classList.add("edge")
      }
    }

    const breakpoints: { [key in "tiny" | "small" | "medium" | "large" | "giant" | "huge" | "full" | "cut"]: number } =
      {
        tiny: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-tiny"), 10),
        small: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-small"), 10),
        medium: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-medium"), 10),
        large: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-large"), 10),
        giant: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-giant"), 10),
        huge: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-huge"), 10),
        full: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-full"), 10),
        cut: Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--break-cut"), 10),
      }

    const getBreakpointValue = (
      breakpointName: "tiny" | "small" | "medium" | "large" | "giant" | "huge" | "full" | "cut",
    ): number | null => {
      return breakpoints[breakpointName] || null
    }

    const breakpoint = (
      breakpointName: "tiny" | "small" | "medium" | "large" | "giant" | "huge" | "full" | "cut",
    ): boolean => {
      const breakpointValue = getBreakpointValue(breakpointName)
      if (breakpointValue === null) {
        return false
      }
      return window.innerWidth >= breakpointValue
    }

    let lastScrollTop = 0
    const html = document.documentElement

    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        html.classList.add("scrolling-down")
        html.classList.remove("scrolling-up")
      } else if (scrollTop < lastScrollTop) {
        html.classList.remove("scrolling-down")
        html.classList.add("scrolling-up")
      }

      if (scrollTop === 0) {
        html.classList.remove("scrolling-up")
      }

      if (window.scrollY > 0) {
        html.classList.add("scrolled")
      }

      if (window.scrollY <= 0) {
        html.classList.remove("scrolled")
      }

      lastScrollTop = scrollTop
    }

    document.addEventListener("scroll", onScroll)

    applyDeviceClasses()

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return null
}

export default Basics
