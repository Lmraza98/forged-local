"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function InteractionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const pointerCleanups: Array<() => void> = [];
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    body.classList.remove("route-pending");

    const beginRouteTransition = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.origin !== window.location.origin) return;
      if (link.pathname === window.location.pathname && link.hash) return;
      body.classList.add("route-pending");
    };
    document.addEventListener("click", beginRouteTransition);

    const initializeMotion = () => {
      root.classList.add("motion-ready");
      body.classList.remove("route-entered");
      frame = requestAnimationFrame(() => body.classList.add("route-entered"));

      const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      if (reducedMotion || !("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      } else {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              (entry.target as HTMLElement).classList.add("is-visible");
              observer?.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
        );
        revealItems.forEach((item) => observer?.observe(item));
      }

      if (!reducedMotion && finePointer) {
        document.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((element) => {
          const move = (event: PointerEvent) => {
            const rect = element.getBoundingClientRect();
            element.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
            element.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
          };
          element.addEventListener("pointermove", move, { passive: true });
          pointerCleanups.push(() => element.removeEventListener("pointermove", move));
        });
      }
    };

    // The small delay keeps DOM decoration behind React's nested hydration work.
    const hydrationTimer = window.setTimeout(initializeMotion, 120);

    return () => {
      window.clearTimeout(hydrationTimer);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      pointerCleanups.forEach((cleanup) => cleanup());
      document.removeEventListener("click", beginRouteTransition);
    };
  }, [pathname]);

  return <div className="route-progress" aria-hidden="true" />;
}
