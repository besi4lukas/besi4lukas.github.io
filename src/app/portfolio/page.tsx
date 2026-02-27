'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { projectsData } from '@/data/projects';

export default function PortfolioPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-hero-bg">
      <Navbar onChatOpen={() => setChatOpen(true)} />

      {/* Page header */}
      <div className="relative overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0D0B1A] to-[#0A0A0F]" />
        <div className="absolute top-0 right-1/3 h-64 w-64 rounded-full bg-accent2/6 blur-[80px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent2/20 bg-accent2/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent2 animate-pulse" />
            Portfolio
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            KINGSLEY&apos;S PROJECTS
          </h1>
          <p className="mt-3 text-base text-muted max-w-xl mx-auto">
            A selection of applications built across full-stack, data engineering, and AI domains.
          </p>
        </div>
      </div>

      {/* Project list */}
      <section className="py-10 pb-20">
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
      <ChatWidget open={chatOpen} onToggle={() => setChatOpen((v) => !v)} />
    </div>
  );
}
