/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { MapPin } from "lucide-react";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg bg-[#242426] shadow-[0_18px_56px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-1 hover:bg-[#2b2b2e]">
      <img alt={project.imageAlt} className="aspect-[4/3] w-full object-cover" height="900" src={project.image} width="1200" />
      <div className="p-5">
        <p className="mb-3 inline-flex rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold text-orange-200">{project.category}</p>
        <h3 className="text-lg font-extrabold tracking-normal text-white">{project.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-zinc-400">
          <MapPin aria-hidden="true" className="size-4 text-[#f97316]" />
          {project.area}
        </p>
        <p className="mt-3 leading-7 text-zinc-300">{project.description}</p>
      </div>
    </article>
  );
}
