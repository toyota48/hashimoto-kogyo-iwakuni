/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { MapPin } from "lucide-react";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_18px_56px_rgba(15,39,71,0.09)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_74px_rgba(15,39,71,0.14)]">
      <img alt={project.imageAlt} className="aspect-[4/3] w-full object-cover" height="900" src={project.image} width="1200" />
      <div className="p-5">
        <p className="mb-3 inline-flex rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-bold text-[#0f2747]">{project.category}</p>
        <h3 className="text-lg font-extrabold tracking-normal text-[#0f2747]">{project.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-500">
          <MapPin aria-hidden="true" className="size-4 text-[#f97316]" />
          {project.area}
        </p>
        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
      </div>
    </article>
  );
}
