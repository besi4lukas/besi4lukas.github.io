'use client';

import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { workExperienceData } from '@/data/workExperience';

interface WorkSectionProps {
  onNavigate: () => void;
}

export function WorkSection({ onNavigate }: WorkSectionProps) {
  return (
    <section className="py-14 bg-surface/40">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Career</p>
            <h3 className="text-3xl font-heading font-semibold text-white">Work Experience</h3>
          </div>
          <Button variant="secondary" onClick={onNavigate} className="px-4 py-2 text-sm">
            Education
            <i className="fa fa-arrow-right text-xs"></i>
          </Button>
        </div>

        {/* Work experience cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workExperienceData.map((work, index) => (
            <Card key={`${work.company}-${index}`}>
              <div className="flex items-center justify-between">
                <h6 className="text-lg font-semibold text-white">{work.company}</h6>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {work.dateRange}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {work.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
