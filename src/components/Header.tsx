"use client";
import { useState } from "react";
import { company, navLinks } from "@/src/data/company";
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#top" onClick={() => setOpen(false)}><span className="brand-caption">山口県岩国市・鉄塔送電線工事</span><span>{company.name}</span></a>
    <nav className="desktop-nav" aria-label="主要ナビゲーション">{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}<a className="header-contact" href="#contact">お問い合わせ <span aria-hidden="true">↗</span></a></nav>
    <button className="menu-toggle" aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "メニューを閉じる" : "メニューを開く"} onClick={() => setOpen(!open)} type="button">{open ? "閉じる ×" : "メニュー ☰"}</button>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="モバイルナビゲーション" hidden={!open}>{[...navLinks, { href: "#contact", label: "お問い合わせ" }].map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></a>)}</nav>
  </header>;
}
