/**
 * Kingsley's AI chatbot knowledge base + response engine.
 *
 * This is a deterministic, keyword-matched rule system.
 * To upgrade to a real LLM, replace `getBotResponse` with an API call
 * (e.g. OpenAI Chat Completions) using this file as the system-prompt source.
 */

export const KINGSLEY_BIO = `
Kingsley Besidonne is a Full-Stack Software Engineer with 4+ years of experience
building scalable backend services and intuitive frontend products. He is currently
at Expedia Group (Loyalty Platform) working with React, TypeScript, Spring Boot,
and gRPC. Previously he was at Goldman Sachs building client onboarding tools.

Education:
- MS Big Data Systems, Arizona State University (2021)
- BSc Computer Science, Ashesi University (2020)

Skills: Java, Python, TypeScript, React, Next.js, Spring Boot, gRPC, Airflow,
PostgreSQL, Docker, D3.js.

He is open to new full-time roles, contract work, and consulting engagements.
Preferred stack: React / TypeScript front-end + Spring Boot / Node.js back-end.
Time zone: available to collaborate across US, EU, and Africa time zones.
`.trim();

// ─────────────────────────────────────────────────────────────────────────────

type Intent =
  | 'greet'
  | 'skills'
  | 'experience'
  | 'education'
  | 'projects'
  | 'availability'
  | 'contact'
  | 'hire'
  | 'unknown';

function detectIntent(input: string): Intent {
  const t = input.toLowerCase();

  if (/\b(hi|hello|hey|howdy|yo)\b/.test(t)) return 'greet';
  if (/\b(hire|hiring|work with|opportunity|opportunity|collaborate|bring on|recruit|looking for|need a dev|need a developer)\b/.test(t))
    return 'hire';
  if (/\b(skill|tech|stack|language|framework|tools|use|know|typescript|react|java|python|spring|node|docker|airflow)\b/.test(t))
    return 'skills';
  if (/\b(experience|work|career|job|role|position|expedia|goldman|company)\b/.test(t))
    return 'experience';
  if (/\b(education|degree|school|university|asu|ashesi|study|studied|graduate)\b/.test(t))
    return 'education';
  if (/\b(project|portfolio|built|app|application|demo|showcase)\b/.test(t))
    return 'projects';
  if (/\b(available|availability|open|hire|free|remote|contract|freelance|full.?time)\b/.test(t))
    return 'availability';
  if (/\b(contact|email|reach|get in touch|message|send|talk)\b/.test(t))
    return 'contact';

  return 'unknown';
}

/** Returns a bot reply string for a given user message (non-lead-capture state). */
export function getBotResponse(userMessage: string): string {
  const intent = detectIntent(userMessage);

  switch (intent) {
    case 'greet':
      return "Hey! 👋 Great to have you here. I can tell you about Kingsley's experience, skills, or projects — or help connect you with him. What would you like to know?";

    case 'skills':
      return "Kingsley works across the full stack. His core toolkit:\n\n• **Languages:** Java, Python, TypeScript\n• **Frontend:** React, Next.js, Tailwind CSS\n• **Backend:** Spring Boot, gRPC, Node.js, FastAPI\n• **Data:** Airflow, Spark, PostgreSQL, Trino\n• **DevOps:** Docker, Spinnaker, CI/CD\n\nAnything specific you'd like to dig into?";

    case 'experience':
      return "Kingsley has 4+ years of professional experience:\n\n🏢 **Expedia Group** *(2022 – present)*\nFull-stack features for the Loyalty Platform (React + Spring Boot) and data engineering pipelines (Airflow + Spark).\n\n🏢 **Goldman Sachs** *(2021 – 2022)*\nReact / TypeScript features for a client onboarding platform handling $10M+ accounts.\n\nWant more detail on a specific role?";

    case 'education':
      return "📚 **Arizona State University** — MS Big Data Systems, Computer Science (2021)\n📚 **Ashesi University** — BSc Computer Science (2020)";

    case 'projects':
      return "You can scroll up to browse the full App Grid! Highlights include:\n\n• **Nexus AI Dashboard** — real-time analytics + predictive modeling (React, Python, AWS)\n• **HealthCheck AI** — medical imaging analysis (PyTorch, FastAPI, Docker)\n• **Tennis Interactive** — D3.js break-point visualization\n• **Cloud Recommendation System** — suggests cloud providers based on requirements\n\nWould you like a link to any of them?";

    case 'availability':
      return "Kingsley is **open to new opportunities** — full-time roles, contract work, and consulting. He's flexible on remote work and can collaborate across US, EU, and Africa time zones. Interested in working with him?";

    case 'contact':
      return "You can reach Kingsley directly at **hello@kingsleybesidonne.com**, or I can collect your details and he'll get back to you. Want me to do that?";

    case 'hire':
      return null as unknown as string; // caller switches to lead-capture flow

    default:
      return "That's a great question! I'm best at answering things about Kingsley's work, skills, and projects. You can also ask me to connect you with him directly. What would you like to know?";
  }
}

/** Returns true if the message expresses hiring / collaboration intent. */
export function isHireIntent(userMessage: string): boolean {
  return detectIntent(userMessage) === 'hire';
}

