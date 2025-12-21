"use client";

import { useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disableOnMobile?: boolean;
};

export default function AOSProvider({
  children,
  disableOnMobile = true,
}: Props) {
  useEffect(() => {
    let aos: any;

    const initAOS = async () => {
      const AOS = (await import("aos")).default;

      AOS.init({
        duration: 1200,
        once: true,
        offset: 100,
        delay: 0,
        disable: () => window.innerWidth < 1024,
        startEvent: "DOMContentLoaded", // verhindert frühes Blocking
      });

      AOS.refresh();
      aos = AOS;
    };

    // ⏱️ erst nach Paint / Idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(initAOS);
    } else {
      setTimeout(initAOS, 200);
    }

    return () => {
      aos?.refreshHard?.();
    };
  }, [disableOnMobile]);

  return <>{children}</>;
}
