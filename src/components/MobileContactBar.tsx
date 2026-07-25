import { Mail, PhoneCall } from "lucide-react";
import { company } from "@/src/data/company";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/25 bg-white/90 p-2 shadow-2xl backdrop-blur-xl md:hidden">
      <a className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f97316] text-sm font-extrabold text-white" href={company.phoneHref}>
        <PhoneCall aria-hidden="true" className="size-4" />
        電話する
      </a>
      <a className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0f2747] text-sm font-extrabold text-white" href="#contact">
        <Mail aria-hidden="true" className="size-4" />
        問い合わせ
      </a>
    </div>
  );
}
