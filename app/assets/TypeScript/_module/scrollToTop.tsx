"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "../_module/smoothScroll";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.5, easing: (t) => t });
    }
  }, [pathname]);

  return null;
}
