/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { Check, Construction, Zap } from "lucide-react";
import type { Service } from "@/src/data/services";

const iconMap = {
  zap: Zap,
  construction: Construction,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_22px_70px_rgba(15,39,71,0.10)]">
      <img alt={service.imageAlt} className="aspect-[16/9] w-full object-cover" height="675" src={service.image} width="1200" />
      <div className="p-6 md:p-8">
        <div className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-[#0f2747] text-white">
          <Icon aria-hidden="true" className="size-6" />
        </div>
        <h3 className="text-2xl font-extrabold tracking-normal text-[#0f2747]">{service.title}</h3>
        <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.examples.map((example) => (
            <li className="flex items-start gap-2 text-sm font-semibold text-slate-700" key={example}>
              <Check aria-hidden="true" className="mt-0.5 size-4 flex-none text-[#f97316]" />
              <span>{example}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg bg-[#f5f5f7] px-4 py-3 text-sm leading-7 text-slate-600">
          {service.note}
        </p>
      </div>
    </article>
  );
}
