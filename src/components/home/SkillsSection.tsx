'use client';

import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { skillsData } from '@/data/skills';

interface SkillsSectionProps {
  onNavigate: () => void;
}

export function SkillsSection({ onNavigate }: SkillsSectionProps) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Toolkit</p>
            <h3 className="text-3xl font-heading font-semibold text-white">Skills</h3>
          </div>
          <Button variant="secondary" onClick={onNavigate} className="px-4 py-2 text-sm">
            Work Experience
            <i className="fa fa-arrow-right text-xs"></i>
          </Button>
        </div>

        {/* Skills cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.title}>
              <h6 className="text-lg font-semibold text-white">{category.title}</h6>
              <p className="mt-4 text-sm text-muted">{category.skills}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
