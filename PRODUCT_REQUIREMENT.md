
## Project Requirements Document for Kingsley's Portfolio

## Site Architecture & Page Structure
    - Hero — Video Trailer Full-screen video autoplays on load. Muted, looping, dark-overlaid. Creates the cinematic first impression.
    - Scroll Prompt Overlay Animated text + arrow at the bottom of the hero. Text: "Scroll to view applications developed by Kingsley". Fades on scroll.
    - App Grid Revealed on scroll. Responsive grid of project cards with thumbnails, descriptions, tech tags, and links.
    - Floating Chat Icon Fixed bottom-right button. Always visible across all scroll positions. Opens the AI chat panel on click.
    - AI Chatbot Panel Slide-in chat UI. Answers questions about Kingsley and captures visitor contact details via email.
    - Footer Minimal: GitHub, LinkedIn links. Copyright line. Optional short bio snippet.

## Detailed Feature Requirements
    1. Hero — Cinematic Video Trailer: The hero is the most important section. It must create an immediate, high-quality first impression within the first five seconds of arrival.
        - Video Playback
            • Full-viewport display: 100vw × 100vh, covering the entire screen on load.
            • Autoplay on page load, muted by default. This is required for all modern browser autoplay policies.
            • Seamlessly looping — the clip restarts without any visible flash or jump cut.
            • The video should be a compiled montage of Kingsley's built applications: screen recordings of working UIs, animated transitions between apps, and brief code snapshots. A cinematic, professionally edited feel is the target.
            • A semi-transparent dark overlay (approximately rgba 0,0,0,0.45) sits above the video to ensure any text is legible and to reinforce the cinematic tone.
            • Fallback: a high-quality static screenshot or gradient renders for users on slow connections or with prefers-reduced-motion enabled in their OS settings.

        - Scroll Prompt Overlay
            • Positioned at the bottom-center of the hero, always visible above the fold on any screen size.
            • Exact copy: "Scroll to view applications developed by Kingsley"
            • Typography: sans-serif, white, medium weight, with generous letter-spacing for an elegant feel.
            • A small animated chevron-down icon appears directly below the text with a gentle, repeating bounce animation.
            • Both the text and icon animate in with a fade-up on page load (roughly 0.8s after the video begins playing).
            • On scroll start, both the text and arrow fade out smoothly and do not reappear.

    2. App Grid: The app grid is the core of the portfolio — the primary way all three visitor types discover and assess Kingsley's work. It must be visually striking, quickly scannable, and informative on both desktop and mobile.
        - Layout & Scroll Animation
            • Responsive CSS grid: 3 columns on desktop (≥ 1024px), 2 columns on tablet (≥ 640px), 1 column on mobile.
            • Cards animate into view using the IntersectionObserver API with a staggered fade-up effect approximately 80ms delay between each card. This creates a satisfying cascade as the user scrolls.
            • A section heading sits above the grid: "Applications Built by Kingsley" in large, bold, white typography.

        - Project Card — Required Elements
            • Project thumbnail: a screenshot, video preview, or branded placeholder with the app name.
            • Project title: prominent and bold — the first thing the eye lands on.
            • Short description: 1–2 sentences, outcome-focused where possible (e.g., 'Served 200+ internal users at Expedia').
            • Technology stack tags: pill-shaped badges for each tech used (e.g., React, Spring Boot, PostgreSQL).
            • Action links: Live Demo and/or GitHub Repository — clearly labeled buttons or icon links.
            • Hover state: card lifts with an elevated box-shadow, the border shifts to the primary accent color, and the thumbnail subtly scales to 1.03x. All transitions at 250ms ease.
        
        - Filter Bar (Recommended for Launch)
            • A horizontally scrollable filter bar above the grid allows visitors to filter by technology or category: 'All', 'React', 'Spring Boot', 'Data Engineering', 'TypeScript', etc.
            • Active filter is visually indicated. Non-matching cards fade to lower opacity rather than disappearing abruptly.
            • Filter transitions are smooth — cards reflow without jumping.

    3. AI Chatbot — Floating Icon & Panel: The chatbot is the most differentiating feature of the redesign. It performs two roles: representing Kingsley conversationally in real time, and capturing visitor contact intent through a smart, embedded lead form.
        - Floating Chat Icon
            • Fixed at the bottom-right corner of the viewport: 24px from the right edge, 24px from the bottom.
            • Circular button, 60px in diameter. Icon: a chat bubble or a stylized 'K' monogram.
            • On first page visit, a pulse-ring animation runs for ~3 seconds to draw attention, then stops.
            • Tooltip on hover: "Chat with Kingsley's AI Assistant"
            • Click toggles the chat panel open and closed. The icon transitions smoothly to a close (×) icon when the panel is open.

        - Chat Panel UI
            • Slides in from the bottom-right. Dimensions: 380px wide × 540px tall on desktop. Full-screen on mobile.
            • Header: Kingsley's avatar or initials, his name, a green online status indicator, and a close button.
            • Message thread: user messages right-aligned, AI messages left-aligned with a subtle avatar. Independent scroll within the thread area.
            • Typing indicator: three animated dots appear while the AI is processing a response.
            • Text input at the bottom with placeholder text: "Ask me anything about Kingsley..." and a Send button.
            • Conversation history is preserved within the session. A page reload resets the chat.

        -  AI Knowledge Base — What the Chatbot Must Know
            • Professional background: all roles at Expedia Group (two tenures: Data Eng 2022–2023, Full-Stack Loyalty 2023–present) and Goldman Sachs (2021–2022), with key achievements per role.
            • Education: MS Big Data Systems at Arizona State University (2021), BSc Computer Science at Ashesi University (2020).
            • Technical skills: Java, Python, TypeScript, React, Spring Boot, gRPC, Airflow, PostgreSQL, Docker, Spinnaker, and more.
            • Portfolio projects: name, description, tech stack, outcome, and links for every project in the app grid.
            • Availability and work preferences: open to new roles, preferred engagement types, time zone and location.
            • Tone and voice: responses must feel like Kingsley himself — professional, direct, warm, and technically confident.

       - Contact via Chatbot — Email Integration
            • When a visitor expresses interest in working with or hiring Kingsley, the chatbot proactively collects: full name, email address, and a brief message describing the opportunity or inquiry.
            • Before sending, the bot asks for confirmation: "Got it — shall I send this to Kingsley for you?"
            • On confirmation, a formatted email is sent to Kingsley's inbox via EmailJS, Resend, or SendGrid.
            • Email content: visitor name, email address, their message, a summary of the chat conversation, and a timestamp.
            • Chat confirmation message: "Done! Kingsley will be in touch soon. You can also reach him directly at [email address]."
            • Graceful fallback: if the email service fails, the bot provides Kingsley's email address directly so no lead is lost.

## Color Palette
    Background — Hero #0A0A0F Near-black cinematic canvas
    Background — Grid #0F172A Deep navy slate — distinguishes sections
    Surface — Cards #1E293B Elevated card backgrounds
    Accent — Primary #6366F1 CTAs, links, hover borders, chat icon
    Accent — Secondary #22D3EE Tech tags, highlights, status indicators
    Text — Primary #F8FAFC Headings and key copy
    Text — Secondary #94A3B8 Descriptions, meta info, timestamps
    Success — Sent #10B981 Email sent confirmation in the chatbot

## Typography
    Scroll prompt text Inter, 18–20px Letter-spacing 0.08em, mixed or uppercase.
    Section headings Inter, 36–48px Bold (700 weight), white, tight line-height.
    Card title Inter, 20px Semi-bold (600 weight).
    Card description Inter, 14–15px Regular weight, secondary color, relaxed leading.
    Chatbot messages Inter, 14px Line-height 1.6. Distinct colors: user vs AI.
    Tech stack tags Inter, 12px Pill shape, semi-bold, accent color background.

## Motion & Animation Principles
    • Every animation must serve a purpose — guiding attention, signaling interactivity, or rewarding a scroll action. Animation for its own sake is discouraged.
    • Scroll reveals: 400–600ms duration, ease-out curve. Cards stagger at 80ms intervals.
    • Hover transitions: 200–300ms, smooth ease. Never instant, never sluggish.
    • Chat panel open/close: 300ms slide + fade, ease-in-out.
    • Accessibility first: all animations must have a no-motion fallback (CSS prefers-reduced-motion media query).

## Tech Stack
    Frontend Framework React + Next.js Aligns with Kingsley's existing React expertise at Expedia.
    Styling Tailwind CSS Fast, utility-first — already in Kingsley's current toolkit.
    Animations Framer Motion Best-in-class scroll and transition animations for React.
    AI Chatbot Claude API or OpenAI API Pass a detailed system prompt with Kingsley's full bio and project list.
    Email Service EmailJS or Resend Both are free-tier friendly and easy to integrate from a static site.
    Hosting vercel (free tier)