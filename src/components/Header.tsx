"use client";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/src/data/company";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <>
    <a className="skip-link" href="#main">本文へ移動</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label={company.name} onClick={() => setOpen(false)}><span className="brand-en" lang="en">HASHIMOTO<span className="brand-dot">.</span><br />KOGYO</span><span className="brand-caption">株式会社ハシモト工業</span></a>
      <div className="header-right"><nav className="desktop-nav" aria-label="主要ナビゲーション"><a href="#about">会社を知る</a><a href="#services">事業を見る</a><a className="header-contact" href="#recruit">採用について <span aria-hidden="true">↗</span></a></nav>
      <button className={`menu-toggle${open ? " is-open" : ""}`} aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "メニューを閉じる" : "メニューを開く"} onClick={() => setOpen(!open)} type="button"><span className="menu-lines" aria-hidden="true"><i /><i /></span><span>{open ? "CLOSE" : "MENU"}</span></button></div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="モバイルナビゲーション" hidden={!open}>{[...navLinks, { href: "#contact", label: "お問い合わせ" }].map((link, i) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><span className="nav-number">0{i + 1}</span>{link.label}<span aria-hidden="true">↗</span></a>)}<a className="menu-phone" href={company.phoneHref}>{company.phone}</a></nav>
    </header>
  </>;
}
