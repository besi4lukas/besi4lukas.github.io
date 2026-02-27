'use client';

import { Button } from '@/components/common/Button';
import { educationData } from '@/data/education';

interface EducationSectionProps {
  onNavigate: () => void;
}

export function EducationSection({ onNavigate }: EducationSectionProps) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Journey</p>
            <h3 className="text-3xl font-heading font-semibold text-white">Education</h3>
          </div>
          <Button variant="secondary" onClick={onNavigate} className="px-4 py-2 text-sm">
            Skills
            <i className="fa fa-arrow-right text-xs"></i>
          </Button>
        </div>

        {/* Education cards */}
        <div className="mt-8 space-y-4">
          {educationData.map((edu) => (
            <details
              key={edu.institution}
              className="group rounded-2xl bg-card/80 p-5 shadow-xl shadow-black/30 ring-1 ring-white/10"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white marker:hidden list-none">
                <span>{edu.institution}</span>
                <i className="fa fa-chevron-down text-sm text-muted transition duration-200 group-open:rotate-180"></i>
              </summary>
              <div className="mt-3 space-y-1 text-muted">
                <p className="text-sm text-accent">Graduated in: {edu.graduationYear}</p>
                <p>Degree: {edu.degree}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
