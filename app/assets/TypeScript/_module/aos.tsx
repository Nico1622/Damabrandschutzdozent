"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import type { easingOptions } from "aos";

type Props = {
  children: ReactNode;
  duration?: number;
  once?: boolean;
  offset?: number;
  easing?: easingOptions;
  delay?: number;
  // Wir behalten die Prop, falls du sie mal von außen steuern willst, 
  // setzen sie aber standardmäßig auf true.
  disableOnMobile?: boolean; 
};

export default function AOSProvider({
  children,
  duration = 1200,
  once = true,
  offset = 120,
  easing = "ease-out-cubic",
  delay = 0,
  disableOnMobile = true, // Standardmäßig jetzt auf TRUE
}: Props) {
  useEffect(() => {
    // AOS Initialisierung
    AOS.init({
      duration,
      once,
      offset,
      easing,
      delay,
      // "mobile" erkennt Handys und Tablets. 
      // Wenn disableOnMobile true ist, wird AOS auf diesen Geräten abgeschaltet.
      disable: disableOnMobile ? "mobile" : false,
    });

    // Wichtig: AOS erkennt neu gerenderte Elemente nach dem Route-Wechsel
    AOS.refresh();

    return () => {
      // Entfernt alle AOS-Klassen und Listener beim Unmount
      AOS.refreshHard();
    };
  }, [duration, once, offset, easing, delay, disableOnMobile]);

  return <>{children}</>;
}