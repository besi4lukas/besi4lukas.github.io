import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const btnClass =
  'inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:shadow-accent/30';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-3xl bg-surface p-8 shadow-xl shadow-black/30 ring-1 ring-white/10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-heading font-semibold text-white">{project.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">{project.description}</p>
          {/* Tech tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent2/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.url && (
          project.isExternal ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={btnClass}
            >
              View Project
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
            </a>
          ) : (
            <Link href={project.url} className={btnClass}>
              View Project
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
            </Link>
          )
        )}
      </div>
    </div>
  );
}
