/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { Cable, Check, RadioTower, UtilityPole } from "lucide-react";
import type { Service } from "@/src/data/services";

const iconMap = {
  radioTower: RadioTower,
  cable: Cable,
  utilityPole: UtilityPole,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article className="overflow-hidden rounded-lg bg-[#242426] shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
      <img alt={service.imageAlt} className="aspect-[16/9] w-full object-cover" height="675" src={service.image} width="1200" />
      <div className="p-6 md:p-8">
        <div className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-[#f97316] text-white">
          <Icon aria-hidden="true" className="size-6" />
        </div>
        <h3 className="text-2xl font-extrabold tracking-normal text-white">{service.title}</h3>
        <p className="mt-4 leading-8 text-zinc-300">{service.description}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.examples.map((example) => (
            <li className="flex items-start gap-2 text-sm font-semibold text-zinc-200" key={example}>
              <Check aria-hidden="true" className="mt-0.5 size-4 flex-none text-[#f97316]" />
              <span>{example}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg bg-white/[0.06] px-4 py-3 text-sm leading-7 text-zinc-300">
          {service.note}
        </p>
      </div>
    </article>
  );
}
