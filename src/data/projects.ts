import { Project } from '@/types';

/**
 * All portfolio projects shown in the App Grid.
 * Add `url` for live demos, `github` for repo links.
 * `gradient` drives the CSS thumbnail placeholder.
 */
export const projectsData: Project[] = [
  // ── Showcase projects ──────────────────────────────────────────────────────
  {
    id: 'jobric-ai',
    title: 'Jobric AI',
    description:
      'AI automated job application Tracking platform for analyzing detecting applications and tracking the status of applications.',
    tech: ['TypeScript', 'Next.js', 'Fastify', 'Supabase', 'OpenAI', 'Tailwind CSS', 'Vercel', 'Railway'],
    year: 2026,
    gradient: 'from-emerald-900/70 via-green-900/50 to-slate-900',
  },
  {
    id: 'anchor-ai',
    title: 'Anchor AI',
    description:
      'The simplest interactive AI journal. A private AI chat app that acts as a grounding guide.',
    tech: ['TypeScript', 'Next.js', 'Fastify', 'Anthropic API', 'Redis','Supabase'],
    year: 2026,
    url: 'https://anchor-one-umber.vercel.app/',
    isExternal: true,
    gradient: 'from-sky-900/70 via-blue-900/50 to-slate-900',
  },

  // ── Existing applications ──────────────────────────────────────────────────
  {
    id: 'cloud-recommendation',
    title: 'Cloud Recommendation System',
    description:
      'Recommends the best cloud provider based on a customer\'s technical and cost requirements.',
    tech: ['AngularJs','HTML', 'CSS', 'JavaScript', 'Python', 'Google Cloud Platform'],
    year: 2021,
    url: 'https://cse546proj2.uc.r.appspot.com/',
    isExternal: true,
    gradient: 'from-sky-900/70 via-blue-900/50 to-slate-900',
  },
  {
    id: 'tennis-interactive',
    title: 'Tennis Interactive',
    description:
      'Interactive D3.js visualization of break-point statistics for top tennis players across 2009–2012.',
    tech: ['D3.js', 'TypeScript', 'Next.js'],
    year: 2020,
    url: '/tennis',
    isExternal: false,
    gradient: 'from-lime-900/70 via-green-900/50 to-slate-900',
  },
];

/** All unique tech tags used across projects – drives the filter bar */
export const allTechTags: string[] = [
  'All',
  ...Array.from(new Set(projectsData.flatMap((p) => p.tech))).sort(),
];
