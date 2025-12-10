"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface LazyLoadProps {
  children: React.ReactNode;
  offset?: string;
  threshold?: number;
}

const LazyLoad = ({ children, offset = "200px", threshold = 0.1 }: LazyLoadProps) => {
  const pathname = usePathname(); // Nur im Client verfügbar

  useEffect(() => {
    const loadBackgroundImage = (element: Element) => {
      const bgSrc = element.getAttribute("data-bg-src");
      const bgSrcset = element.getAttribute("data-bg-srcset");

      if (bgSrc || bgSrcset) {
        if (bgSrcset) {
          element.setAttribute("style", `background-image: image-set(url(${bgSrcset}) 1x);`);
        } else if (bgSrc) {
          element.setAttribute("style", `background-image: url(${bgSrc});`);
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const elem = entry.target;
          elem.classList.add("lazy-processing", "is-on-screen");

          if (elem.classList.contains("lazy-bg") || elem.hasAttribute("data-bg-src") || elem.hasAttribute("data-bg-srcset")) {
            loadBackgroundImage(elem);
            elem.classList.add("lazy-loaded");
            observer.unobserve(elem);
            return;
          }

          const loadedCallbackTarget = elem.nodeName !== "PICTURE" ? elem : elem.querySelector("img");

          if (loadedCallbackTarget) {
            const handleLoad = (e: Event) => {
              const target = e.target as HTMLElement;
              target.classList.add("lazy-loaded");
            };

            if (elem.nodeName === "IMG" || elem.nodeName === "IFRAME") {
              loadedCallbackTarget.addEventListener("load", handleLoad);
              loadedCallbackTarget.addEventListener("error", () => {
                loadedCallbackTarget.classList.add("lazy-loaded");
              });
            } else {
              loadedCallbackTarget.classList.add("lazy-loaded");
            }
          }

          if (elem.nodeName === "PICTURE") {
            const childs = elem.querySelectorAll("img, source");
            childs.forEach((child) => {
              if (child.hasAttribute("data-src")) {
                child.setAttribute("src", child.getAttribute("data-src")!);
              }
              if (child.hasAttribute("data-srcset")) {
                child.setAttribute("srcset", child.getAttribute("data-srcset")!);
              }
            });
          } else if (elem.nodeName === "IMG") {
            const imgElem = elem as HTMLImageElement;
            if (imgElem.hasAttribute("data-srcset")) {
              imgElem.srcset = imgElem.getAttribute("data-srcset")!;
            }
            if (imgElem.hasAttribute("data-src")) {
              imgElem.src = imgElem.getAttribute("data-src")!;
            }
          } else if (elem.nodeName === "IFRAME") {
            const iframeElem = elem as HTMLIFrameElement;
            iframeElem.src = iframeElem.getAttribute("data-src")!;
          } else {
            elem.classList.add("lazy-loaded");
          }

          observer.unobserve(elem);
        });
      },
      {
        rootMargin: offset,
        threshold: threshold,
      }
    );

    // Beobachtete Elemente
    const nodes: Element[] = [...document.querySelectorAll(".lazy-image, .lazy-bg, .lazy-iframe, .lazy-content")];

    nodes.forEach((node) => {
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname, offset, threshold]); // Denke daran, dass `pathname` die Router-Informationen enthält.

  return <>{children}</>;
};

export default LazyLoad;
