/* eslint-disable @next/next/no-img-element -- 静的エクスポートとVinextローカル表示で確実に画像を配信するため。 */
import { MapPin } from "lucide-react";
import { projectSampleNotice, type Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#f97316]">
      <img alt={project.imageAlt} className="aspect-[4/3] w-full object-cover" height="900" src={project.image} width="1200" />
      <div className="p-5">
        <p className="mb-3 inline-flex bg-slate-100 px-3 py-1 text-xs font-bold text-[#0f2747]">{project.category}</p>
        <h3 className="text-lg font-extrabold tracking-normal text-[#0f2747]">{project.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-500">
          <MapPin aria-hidden="true" className="size-4 text-[#f97316]" />
          {project.area}
        </p>
        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
        <p className="mt-4 text-xs font-semibold text-slate-500">{projectSampleNotice}</p>
      </div>
    </article>
  );
}
