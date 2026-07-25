"use client";

import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { company, navLinks } from "@/src/data/company";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a className="group flex items-center gap-3" href="#top" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-lg bg-[#0f2747] text-base font-black text-white transition group-hover:bg-[#f97316]">
            橋
          </span>
          <span>
            <span className="block text-base font-extrabold tracking-normal text-[#0f2747]">{company.name}</span>
            <span className="block text-xs font-semibold text-slate-500">Iwakuni, Yamaguchi</span>
          </span>
        </a>

        <nav aria-label="主要ナビゲーション" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a className="text-sm font-bold text-slate-700 transition hover:text-[#f97316]" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0f2747] px-4 text-sm font-bold text-white transition hover:bg-[#f97316]" href={company.phoneHref}>
            <PhoneCall aria-hidden="true" className="size-4" />
            {company.phone}
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="grid size-10 place-items-center rounded-full border border-slate-300 text-[#0f2747] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden" id="mobile-navigation">
          <nav aria-label="モバイルナビゲーション" className="mx-auto grid max-w-7xl px-5 py-4">
            {navLinks.map((link) => (
              <a
                className="border-b border-slate-100 py-4 text-base font-bold text-[#0f2747] last:border-b-0"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
