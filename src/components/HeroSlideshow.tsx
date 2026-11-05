/* eslint-disable @next/next/no-img-element -- ローカルの静的写真を配信するため。 */
"use client";

import { useEffect, useRef, useState } from "react";
import { heroPhotos } from "@/src/data/heroPhotos";

export function HeroSlideshow() {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(heroPhotos.map(() => false));
  const [paused, setPaused] = useState(false);
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
    if (paused || reduced || interacting || !inView || !tabVisible) return;
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
  }, [loaded, paused, reduced, interacting, inView, tabVisible]);

  return <div
    ref={container}
    className="hero-photo hero-slideshow"
    role="region"
    aria-roledescription="カルーセル"
    aria-label="送電鉄塔の写真"
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
    <div className="slide-controls">
      <span className="slide-count" aria-hidden="true">0{active + 1} / 0{heroPhotos.length}</span>
      <div className="slide-dots" role="group" aria-label="写真を選ぶ">
        {heroPhotos.map((photo, index) => <button
          type="button" key={photo.src} aria-label={`${index + 1}枚目の写真を表示`}
          aria-pressed={active === index} disabled={!loaded[index]}
          onClick={() => { setActive(index); setPaused(true); }}
        ><span /></button>)}
      </div>
      {!reduced && <button className="slide-pause" type="button" aria-label={paused ? "写真の自動切替を再生" : "写真の自動切替を停止"} aria-pressed={paused} onClick={() => setPaused(value => !value)}><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span></button>}
    </div>
  </div>;
}
