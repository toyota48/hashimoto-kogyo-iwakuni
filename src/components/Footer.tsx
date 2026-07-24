import { company, navLinks, verificationNote } from "@/src/data/company";

export function Footer() {
  return (
    <footer className="bg-[#081a31] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-2xl font-black tracking-normal">{company.name}</p>
          <p className="mt-4 leading-7 text-slate-300">{company.location}</p>
          <a className="mt-3 inline-flex text-xl font-extrabold text-orange-200 transition hover:text-white" href={company.phoneHref}>
            {company.phone}
          </a>
          <p className="mt-4 text-sm leading-7 text-slate-400">{verificationNote}</p>
        </div>
        <div>
          <nav aria-label="フッターナビゲーション" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {navLinks.map((link) => (
              <a className="text-sm font-bold text-slate-300 transition hover:text-[#fb923c]" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
            <a className="text-sm font-bold text-slate-300 transition hover:text-[#fb923c]" href="#privacy">
              プライバシーポリシー
            </a>
          </nav>
          <div className="mt-8 border-t border-white/10 pt-6" id="privacy">
            <p className="text-sm font-bold text-white">プライバシーポリシー</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              お問い合わせで取得した個人情報は、回答および連絡の目的で利用する想定です。公開時には正式な個人情報保護方針を確認してください。
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {company.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
