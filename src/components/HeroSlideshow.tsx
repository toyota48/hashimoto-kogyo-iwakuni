/* eslint-disable @next/next/no-img-element -- ローカルの静的写真を配信するため。 */
"use client";

import { useEffect, useRef, useState } from "react";
import { heroPhotos } from "@/src/data/heroPhotos";

export function HeroSlideshow() {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(heroPhotos.map(() => false));
  const [reduced, setReduced] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReduced(preference.matches);
    const syncVisibility = () => setTabVisible(!document.hidden);
    syncPreference();
    syncVisibility();
    preference.addEventListener("change", syncPreference);
    document.addEventListener("visibilitychange", syncVisibility);
    // Cached images can finish loading before hydration attaches onLoad.
    if (container.current) {
      setLoaded(Array.from(container.current.querySelectorAll("img")).map(image => image.complete && image.naturalWidth > 0));
    }
    const observer = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting)) : null;
    if (container.current) observer?.observe(container.current);
    return () => {
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", syncVisibility);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduced || interacting || !inView || !tabVisible) return;
    const timer = window.setInterval(() => {
      setActive(current => {
        for (let step = 1; step < heroPhotos.length; step++) {
          const next = (current + step) % heroPhotos.length;
          if (loaded[next]) return next;
        }
        return current;
      });
    }, 5500);
    return () => window.clearInterval(timer);
  }, [active, loaded, reduced, interacting, inView, tabVisible]);

  function advance(direction: -1 | 1) {
    setActive(current => {
      for (let step = 1; step < heroPhotos.length; step++) {
        const next = (current + direction * step + heroPhotos.length) % heroPhotos.length;
        if (loaded[next]) return next;
      }
      return current;
    });
  }

  return <div
    ref={container}
    className="hero-photo hero-slideshow"
    role="region"
    aria-roledescription="カルーセル"
    aria-label="送電鉄塔の写真"
    onKeyDown={event => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        advance(event.key === "ArrowLeft" ? -1 : 1);
      }
    }}
    onMouseEnter={() => setInteracting(true)}
    onMouseLeave={() => setInteracting(false)}
    onFocusCapture={() => setInteracting(true)}
    onBlurCapture={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
    }}
  >
    <div className="hero-slides">
      {heroPhotos.map((photo, index) => <div className={`hero-slide${active === index ? " is-active" : ""}`} key={photo.src} aria-hidden={active !== index}>
        <img
          src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
          style={{ objectPosition: photo.position }}
          fetchPriority={index === 0 ? "high" : "low"}
          onLoad={() => setLoaded(current => current.map((value, i) => i === index ? true : value))}
        />
      </div>)}
    </div>
    <div className="slide-controls" role="group" aria-label="写真の切替">
      <button className="slide-arrow slide-prev" type="button" aria-label="前の写真を表示" disabled={loaded.filter(Boolean).length < 2} onClick={() => advance(-1)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 5-7 7 7 7" /></svg>
      </button>
      <span className="slide-count" aria-live="off">0{active + 1} / 0{heroPhotos.length}</span>
      <button className="slide-arrow slide-next" type="button" aria-label="次の写真を表示" disabled={loaded.filter(Boolean).length < 2} onClick={() => advance(1)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 5 7 7-7 7" /></svg>
      </button>
    </div>
  </div>;
}
