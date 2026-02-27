// ─── Education ──────────────────────────────────────────────────────────────
export interface Education {
  institution: string;
  graduationYear: number;
  degree: string;
}

// ─── Work Experience ─────────────────────────────────────────────────────────
export interface WorkExperience {
  company: string;
  dateRange: string;
  responsibilities: string[];
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface SkillCategory {
  title: string;
  skills: string;
}

// ─── Project (App Grid) ──────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];           // Tech-stack pill badges
  year: number;
  url?: string;             // Live demo or internal route
  github?: string;          // GitHub repo link
  isExternal?: boolean;     // Open url in new tab
  gradient: string;         // Tailwind gradient classes for the thumbnail
}

// ─── Tennis Visualization ────────────────────────────────────────────────────
export interface TennisMatchData {
  player2: string;
  break1: number;
}

export type PlayerName = 'Rafael Nadal' | 'Roger Federer' | 'Novak Djokovic';
export type Year = '2009' | '2010' | '2011' | '2012';

export interface TennisDataMap {
  [player: string]: {
    [year: string]: TennisMatchData[];
  };
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export type ActiveSection = 'skills' | 'education' | 'work';

// ─── Chat ────────────────────────────────────────────────────────────────────
export type ChatRole = 'bot' | 'user';
export type ChatState =
  | 'answering'
  | 'lead_name'
  | 'lead_email'
  | 'lead_message'
  | 'lead_confirm'
  | 'sent';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text?: string;
  isTyping?: boolean;
  isSuccess?: boolean; // "Details Captured" card
}

export interface LeadData {
  name: string;
  email: string;
  message: string;
}
