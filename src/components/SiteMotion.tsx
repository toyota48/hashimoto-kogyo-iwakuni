"use client";

import { useEffect } from "react";

/** Content stays visible without JavaScript or when reduced motion is preferred. */
export function SiteMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopMotion = () => {};

    function configureMotion() {
      stopMotion();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }, { threshold: 0, rootMargin: "0px 0px -28px 0px" });

      for (const element of elements) {
        // Avoid hiding content already on screen, including an initial hash target.
        if (element.getBoundingClientRect().top < window.innerHeight - 28) continue;
        element.classList.add("motion-pending");
        observer.observe(element);
      }

      const hero = document.getElementById("top");
      const photo = document.querySelector<HTMLElement>(".hero-slides");
      let frame = 0;
      function updatePhoto() {
        frame = 0;
        if (!hero || !photo) return;
        const rect = hero.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
        const maxOffset = Math.min(18, photo.clientHeight * 0.025);
        const offset = Math.min(maxOffset, Math.max(0, -rect.top * 0.045));
        photo.style.setProperty("--hero-shift", `${offset.toFixed(2)}px`);
      }
      function onScroll() {
        if (!frame) frame = window.requestAnimationFrame(updatePhoto);
      }
      function showFocusedContent(event: FocusEvent) {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const parent = target.closest("[data-reveal]");
        if (parent) {
          parent.classList.add("is-visible");
          observer.unobserve(parent);
        }
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("focusin", showFocusedContent);
      updatePhoto();
      stopMotion = () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("focusin", showFocusedContent);
        window.cancelAnimationFrame(frame);
        frame = 0;
        photo?.style.removeProperty("--hero-shift");
        for (const element of elements) element.classList.remove("motion-pending", "is-visible");
      };
    }

    configureMotion();
    preference.addEventListener("change", configureMotion);
    return () => {
      preference.removeEventListener("change", configureMotion);
      stopMotion();
    };
  }, []);

  return null;
}
