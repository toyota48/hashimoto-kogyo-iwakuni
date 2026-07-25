import { CheckCircle2 } from "lucide-react";

type FeatureCardProps = {
  title: string;
  text: string;
};

export function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <article className="rounded-lg bg-[#f5f5f7] p-7 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(15,39,71,0.12)]">
      <CheckCircle2 aria-hidden="true" className="mb-5 size-7 text-[#f97316]" />
      <h3 className="text-lg font-bold tracking-normal text-[#0f2747]">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
