"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { NavItem } from "@/app/assets/TypeScript/lib/config/site-navigation"
// Import der neuen Scroll-Funktion
import { handleLogoScroll } from "@/app/assets/TypeScript/_essentials/basics" 

interface NavigationBaseProps {
  items: NavItem[]
  variant?: "main" | "footer"
  closeMobileMenuCallback?: () => void
}

export function NavigationBase({ items, variant = "main", closeMobileMenuCallback }: NavigationBaseProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])
  const [isMobileView, setIsMobileView] = useState<boolean | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const NAV_BREAK = 992

  const isMain = variant === "main"

  useEffect(() => {
    setHasMounted(true)
    setIsMobileView(window.innerWidth <= NAV_BREAK)
    const handleResize = () => setIsMobileView(window.innerWidth <= NAV_BREAK)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeAllDropdowns()
    }

    const handleScroll = () => {
      if (window.innerWidth <= NAV_BREAK) return
      const currentY = window.scrollY
      if (Math.abs(currentY - lastScrollY.current) > 250) {
        closeAllDropdowns()
        lastScrollY.current = currentY
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (navRef.current && isMain) {
      document.documentElement.style.setProperty("--navigation-height", `${navRef.current.offsetHeight}px`)
    }
  }, [isMain])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  const toggleDropdown = (href: string) =>
    setOpenDropdowns((prev) => (prev.includes(href) ? prev.filter((i) => i !== href) : [...prev, href]))

  const closeDropdown = (href: string) => setOpenDropdowns((prev) => prev.filter((i) => i !== href))

  const closeAllDropdowns = () => setOpenDropdowns([])

  const closeMobileMenu = () => {
    setIsOpen(false)
    closeAllDropdowns()
    closeMobileMenuCallback?.()
  }

  const focusParent = (href: string) => {
    const selector = isMobileView ? `.navigation__mobile [data-trigger="${href}"]` : `[data-trigger="${href}"]`
    const parent = document.querySelector<HTMLElement>(selector)
    parent?.focus()
  }

  const handleParentKeyDown = (e: React.KeyboardEvent, item: NavItem) => {
    const hasChildren = !!item.children?.length
    if (!hasChildren) return

    const isOpen = openDropdowns.includes(item.href)

    if (["Enter", " "].includes(e.key)) {
      e.preventDefault()
      toggleDropdown(item.href)
    } else if (e.key === "Escape" && isOpen) {
      e.preventDefault()
      closeDropdown(item.href)
    } else if (e.key === "Tab" && isOpen) {
      setTimeout(() => {
        const container = document.querySelector(`[data-parent="${item.href}"]`)
        const first = container?.querySelector<HTMLElement>(".nav-dropdown__link")
        first?.focus()
      }, 0)
    }
  }

  const handleChildKeyDown = (e: React.KeyboardEvent, item: NavItem, isLastChild = false) => {
    const container = document.querySelector(`[data-parent="${item.href}"]`)
    if (!container) return

    const links = Array.from(container.querySelectorAll<HTMLElement>(".nav-dropdown__link"))
    if (!links.length) return

    const current = e.target as HTMLElement
    const idx = links.indexOf(current)
    const isFirst = idx === 0
    const isLast = idx === links.length - 1

    if (
      e.key === "Escape" ||
      (e.key === "Tab" && ((e.shiftKey && isFirst) || (!e.shiftKey && (isLast || (isMobileView && isLastChild)))))
    ) {
      e.preventDefault()
      focusParent(item.href)
      closeDropdown(item.href)
    }
  }

  const handleMobileMenuKeyDown = (e: React.KeyboardEvent) => {
    if (!isMobileView || !isOpen) return

    if (e.key === "Escape") {
      e.preventDefault()
      closeMobileMenu()
      setTimeout(() => document.querySelector<HTMLElement>(".navigation__toggle")?.focus(), 0)
    }

    if (e.key === "Tab" && !e.shiftKey) {
      const items = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".navigation__menu--mobile .nav-link, .navigation__menu--mobile .nav-link--span",
        ),
      )
      if (document.activeElement === items[items.length - 1]) {
        e.preventDefault()
        closeMobileMenu()
        setTimeout(() => document.querySelector<HTMLElement>(".navigation__toggle")?.focus(), 0)
      }
    }
  }

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = !!item.children?.length
    const isDropdownOpen = openDropdowns.includes(item.href)

    return (
      <li key={item.href} className={`nav-item ${level > 0 ? "nav-item--nested" : ""} ${hasChildren ? "sub" : ""}`}>
        <div className="nav-item__wrapper">
          {hasChildren ? (
            <span
              role="button"
              tabIndex={0}
              data-trigger={item.href}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              title={item.description || item.label}
              className={`nav-link nav-link--span ${isActive(item.href) ? "nav-link--active" : ""}`}
              onClick={() => toggleDropdown(item.href)}
              onKeyDown={(e) => handleParentKeyDown(e, item)}
            >
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "nav-link--active" : ""}`}
              title={item.description || item.label}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          )}
        </div>

        {hasChildren && (
          <ul
            className={`nav-dropdown ${isDropdownOpen ? "nav-dropdown--open" : ""}`}
            data-parent={item.href}
            inert={!isDropdownOpen}
          >
            {isMobileView && (
              <li className="nav-dropdown__item nav-dropdown__item--close">
                <button
                  className="nav-dropdown__close"
                  onClick={() => closeDropdown(item.href)}
                  aria-label={`Dropdown ${item.label} schließen`}
                >
                  {"✕ Schließen"}
                </button>
              </li>
            )}

            <li className="nav-dropdown__item nav-dropdown__item--parent">
              <Link
                href={item.href}
                tabIndex={isDropdownOpen ? 0 : -1}
                className={`nav-dropdown__link ${isActive(item.href) ? "nav-dropdown__link--active" : ""}`}
                data-parent={item.href}
                onKeyDown={(e) => handleChildKeyDown(e, item)}
                onClick={closeMobileMenu}
              >
                {"Übersicht"}
              </Link>
            </li>

            {item.children!.map((child, idx, arr) => (
              <li key={child.href} className="nav-dropdown__item">
                <Link
                  href={child.href}
                  tabIndex={isDropdownOpen ? 0 : -1}
                  className={`nav-dropdown__link ${isActive(child.href) ? "nav-dropdown__link--active" : ""}`}
                  data-parent={item.href}
                  onKeyDown={(e) => handleChildKeyDown(e, item, idx === arr.length - 1)}
                  onClick={closeMobileMenu}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  if (!isMain) {
    return (
      <nav role="navigation" aria-label="Footer Navigation" className="footer-navigation">
        <ul className="navigation__menu navigation__menu--footer">{items.map(renderNavItem)}</ul>
      </nav>
    )
  }

  return (
    <div className="navigation__container" ref={navRef}>
      <div className="navigation__header">
        <div className="navigation__logo">
          {/* Logo-Link mit integriertem handleLogoScroll */}
          <Link 
            href="/" 
            className="navigation__logo-link" 
            title="Zur Startseite gelangen"
            onClick={(e) => handleLogoScroll(e, pathname)}
          >
            <img src="/assets/images/layout/icon.svg" alt="Logo" width={60} height="auto" />
          </Link>
        </div>

        <nav role="navigation" aria-label="Hauptnavigation">
          <ul className="navigation__menu navigation__menu--desktop">{items.map(renderNavItem)}</ul>
        </nav>

        <button
          className="navigation__toggle no-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
        >
          <span className={`hamburger ${isOpen ? "hamburger--open" : ""}`}>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </span>
        </button>
      </div>

      {hasMounted && isOpen && isMobileView && <div className="navigation__overlay" onClick={closeMobileMenu} />}

      <div
        className={`navigation__mobile ${isOpen ? "navigation__mobile--open" : ""}`}
        onKeyDown={handleMobileMenuKeyDown}
      >
        <ul className="navigation__menu navigation__menu--mobile">{items.map(renderNavItem)}</ul>
      </div>
    </div>
  )
}