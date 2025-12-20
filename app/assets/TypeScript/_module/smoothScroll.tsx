"use client";

import { useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';
import Lenis from "lenis";

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

export default function SmoothScroll() {
  const pathname = usePathname();
  const rafIdRef = useRef<number | null>(null);
  const anchorHandlersRef = useRef<Map<HTMLAnchorElement | HTMLButtonElement, EventListener>>(
    new Map()
  );
  const textareaHandlersRef = useRef<Map<HTMLTextAreaElement, EventListener>>(new Map());

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!lenis) {
      lenis = new Lenis({
        duration: 1.35,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      // RAF Loop - nur einmal starten
      const raf = (time: number) => {
        lenis?.raf(time);
        if (rafIdRef.current !== null) {
          rafIdRef.current = requestAnimationFrame(raf);
        }
      };
      rafIdRef.current = requestAnimationFrame(raf);
    }

    // Cleanup alte Handler
    anchorHandlersRef.current.forEach((handler, el) => {
      el.removeEventListener("click", handler);
    });
    anchorHandlersRef.current.clear();

    textareaHandlersRef.current.forEach((handler, el) => {
      el.removeEventListener("input", handler);
    });
    textareaHandlersRef.current.clear();

    // Neue Anchor-Scroll Handler
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const handler = (e: Event) => {
        const href = a.getAttribute("href");
        if (!href || href === "#") return;

        const targetEl = document.querySelector(href);
        if (!targetEl) return;

        e.preventDefault();

        const rootStyles = getComputedStyle(document.documentElement);
        const navHeightVar = rootStyles.getPropertyValue("--navigation-height").trim();
        const navHeight = parseFloat(navHeightVar) || 0;

        lenis?.scrollTo(targetEl as HTMLElement, {
          offset: -navHeight,
          duration: 1.45,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          onComplete: () => history.replaceState(null, "", href),
        });
      };

      a.addEventListener("click", handler);
      anchorHandlersRef.current.set(a, handler);
    });

    // Textarea Scroll-Prevention
    document.querySelectorAll<HTMLTextAreaElement>("textarea").forEach((t) => {
      const handler = () => {
        if (t.scrollHeight > t.clientHeight) {
          t.setAttribute("data-lenis-prevent", "");
        } else {
          t.removeAttribute("data-lenis-prevent");
        }
      };
      handler();
      t.addEventListener("input", handler);
      textareaHandlersRef.current.set(t, handler);
    });

    // Back-to-top Button
    const btt = document.querySelector<HTMLButtonElement>(".back-to-top");
    if (btt) {
      const bttHandler = (e: Event) => {
        e.preventDefault();
        lenis?.scrollTo(0, { duration: 2.25, easing: (t) => 1 - Math.pow(1 - t, 4) });
      };
      btt.addEventListener("click", bttHandler);
      anchorHandlersRef.current.set(btt, bttHandler);
    }

    return () => {
      anchorHandlersRef.current.forEach((handler, el) => {
        el.removeEventListener("click", handler);
      });
      textareaHandlersRef.current.forEach((handler, el) => {
        el.removeEventListener("input", handler);
      });
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return null;
}
