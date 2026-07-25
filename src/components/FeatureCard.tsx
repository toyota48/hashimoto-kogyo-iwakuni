import { CheckCircle2 } from "lucide-react";

type FeatureCardProps = {
  title: string;
  text: string;
};

export function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <article className="rounded-lg bg-[#242426] p-7 transition duration-200 hover:-translate-y-1 hover:bg-[#2b2b2e]">
      <CheckCircle2 aria-hidden="true" className="mb-5 size-7 text-[#f97316]" />
      <h3 className="text-lg font-bold tracking-normal text-white">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-300">{text}</p>
    </article>
  );
}
