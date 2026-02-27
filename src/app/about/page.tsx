'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { SkillsSection } from '@/components/home/SkillsSection';
import { EducationSection } from '@/components/home/EducationSection';
import { WorkSection } from '@/components/home/WorkSection';
import { ActiveSection } from '@/types';

/**
 * About page – houses Skills, Education, and Work Experience sections.
 * Accessible from the Navbar "About" link and the Hero "About Me" button.
 */
export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('skills');
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-hero-bg">
      <Navbar onChatOpen={() => setChatOpen(true)} />

      {/* Page header */}
      <div className="relative overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0D0B1A] to-[#0A0A0F]" />
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-accent/6 blur-[80px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Software Engineer
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Kingsley
          </h1>
          <p className="mt-3 text-base text-muted max-w-xl mx-auto">
            Full-stack engineer with 4+ years building loyalty platforms, data pipelines,
            and client-facing products at Expedia Group and Goldman Sachs.
          </p>

          {/* Section tabs */}
          <div className="mt-8 inline-flex rounded-xl bg-surface/60 p-1 gap-1 ring-1 ring-white/8">
            {(['skills', 'education', 'work'] as ActiveSection[]).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`rounded-lg px-5 py-2 text-sm font-semibold capitalize transition-all duration-200 ${
                  activeSection === section
                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                    : 'text-muted hover:text-white'
                }`}
              >
                {section === 'work' ? 'Experience' : section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active section content */}
      <main>
        {activeSection === 'skills' && (
          <SkillsSection onNavigate={() => setActiveSection('work')} />
        )}
        {activeSection === 'education' && (
          <EducationSection onNavigate={() => setActiveSection('skills')} />
        )}
        {activeSection === 'work' && (
          <WorkSection onNavigate={() => setActiveSection('education')} />
        )}
      </main>

      {/* Back link */}
      <div className="py-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors duration-200"
        >
          <i className="fa-solid fa-arrow-left text-xs" />
          Back to home
        </Link>
      </div>

      <Footer />
      <ChatWidget open={chatOpen} onToggle={() => setChatOpen((v) => !v)} />
    </div>
  );
}

