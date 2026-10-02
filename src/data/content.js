// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Tooba Shaikh',
  initials: 'TS',
  role: 'Software Engineering student',
  location: 'Karachi, Pakistan',
  email: 'toobashaikh2803@gmail.com',
  linkedin: 'https://linkedin.com/in/tooba5haikh',
  github: 'https://github.com/toobashaikh28',
  resume: '/Tooba_Shaikh_Resume.pdf',
  resumeFilename: 'Tooba_Shaikh_Resume.pdf',
};

// Nav order. "Resume" is rendered separately as the call-to-action button.
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

// Social links, shared by the hero, footer and terminal. `icon` maps to src/components/Icons.jsx.
export const socials = [
  { id: 'github', label: 'GitHub', icon: 'github', url: profile.github },
  { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', url: profile.linkedin },
  { id: 'email', label: 'Email', icon: 'mail', url: `mailto:${profile.email}` },
];

export const hero = {
  status: 'Open to internships',
  headline: 'I build full-stack apps and LLM features',
  primaryCta: 'View Projects',
  secondaryCta: 'Download Resume',
};

export const sectionTitles = {
  about: 'About',
  experience: 'Experience and education',
  skills: 'Skills',
  projects: 'Projects',
  certificates: 'Certificates',
  contact: 'Contact',
};

export const skillsNote = 'Highlighted: the stack I use most.';

export const contact = {
  heading: 'Looking for a full-stack or AI engineering internship',
  intro: 'If you are hiring, or you want to talk about a project, event or idea, write to me.',
  availability: 'Open to internships. I usually reply within 2 days.',
  resumeCta: 'Download resume',
};

export const about = {
  intro:
    'I build full-stack applications and ship them. I like backends with sensible data models, interfaces that explain themselves, and features that use LLMs on real data.',
  facts: [
    { label: 'Studying', value: 'BS Software Engineering, Sir Syed University of Engineering & Technology (2024 – present), CGPA 3.79 / 4.0' },
    { label: 'Work with', value: 'Java, Spring Boot, React, Node.js, MongoDB' },
    { label: 'Learning', value: 'RAG pipelines, system design' },
    { label: 'Enjoy building', value: 'Full-stack web apps, data-driven features, LLM-powered tools' },
    { label: 'Looking for', value: 'A full-stack or AI engineering internship' },
  ],
};

// The stack I use most. These skills are highlighted in the Skills section.
export const coreSkills = ['Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB'];

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'C++', 'C', 'JavaScript'] },
  { group: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend and databases', items: ['Spring Boot', 'Node.js', 'REST API design', 'JWT authentication', 'OOP and design patterns', 'MongoDB', 'MySQL'] },
  { group: 'AI and data', items: ['LLM APIs and prompt engineering', 'RAG fundamentals', 'Data analysis and visualization', 'Excel', 'Tableau'] },
  { group: 'Tools', items: ['Git and GitHub', 'Docker', 'Postman', 'IntelliJ IDEA', 'VS Code'] },
  { group: 'Fundamentals', items: ['Data structures and algorithms', 'System design', 'MVC / REST architecture'] },
];

// To add a preview, save a screenshot as src/assets/previews/<id>.png (see README).
export const projects = [
  {
    id: 'splitly',
    name: 'Splitly',
    tagline: 'Smart expense splitter with receipt scanning',
    host: 'splitly-lac.vercel.app',
    summary: 'Expense splitter that divides a bill item by item, shares tax proportionally, scans receipts with AI and simplifies who pays whom.',
    problem: 'Splitting a group bill evenly is unfair when people ordered different things, and tracking who owes whom gets messy fast.',
    role: 'Designed and built the full application, including the API and the debt-simplification logic.',
    highlights: [
      'Greedy debt-simplification algorithm that reduces the number of payments needed to settle a group.',
      'Receipt scanning with the Gemini API and a pending-to-cleared settlement flow.',
      'More than 25 REST endpoints, budgets and a Recharts dashboard.',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'Gemini API'],
    live: 'https://splitly-lac.vercel.app',
    github: 'https://github.com/toobashaikh28/splitly',
  },
  {
    id: 'smartinvest',
    name: 'SmartInvest',
    tagline: 'Stock market simulator',
    host: 'smartinvestpk.me',
    summary: 'Stock market simulator with auto-updating prices, portfolio tracking, a net-worth leaderboard and a Learning Hub.',
    problem: 'Beginners learn investing best by doing it, but trading with real money is a costly way to make first mistakes.',
    role: 'Built the platform end to end: React front end, Node.js API and MongoDB transaction storage.',
    highlights: [
      'Chart.js dashboard showing net worth and transaction history.',
      'Persistent MongoDB transaction system, so portfolios survive across sessions.',
      'JWT authentication from sign-up through every trade.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Chart.js', 'JWT'],
    live: 'https://smartinvestpk.me/',
    github: null,
  },
  {
    id: 'eduevent',
    name: 'EduEvent',
    tagline: 'Event platform used for real IEEE events',
    host: 'eduevent-rfgx.onrender.com',
    summary: 'Event management platform for educational communities: registration, proctored quizzes, hackathon teams and certificates. In live use for real IEEE events.',
    problem: 'Student events involve registration, online quizzes, hackathon teams and certificates, usually handled by hand across several tools, with no way to keep an online quiz honest.',
    role: 'Architected the platform and led a team of four through the full software development lifecycle.',
    highlights: [
      'Live face-detection and eye-gaze monitoring that invalidates a quiz session when the participant leaves the frame.',
      'Certificates are generated automatically when a verified participant completes a quiz.',
      'Separate Admin, User and Judge roles, secured with JWT.',
    ],
    stack: ['Java', 'Spring Boot', 'MongoDB Atlas', 'REST API', 'Docker', 'JWT'],
    live: 'https://eduevent-rfgx.onrender.com/',
    github: null,
  },
  {
    id: 'bus-path',
    panel: { label: 'Backend project', title: '1st place', caption: 'University Project Exhibition' },
    name: 'Bus Path Navigator',
    tagline: 'Shortest-path route engine for a city bus network',
    host: null,
    summary: 'Shortest-path route engine that computes optimal bus routes across a city-wide stop network.',
    problem: null,
    role: null,
    highlights: [
      'Dijkstra and BFS graph algorithms in a Spring Boot backend.',
      'Route-mapping data structures designed for query performance.',
    ],
    stack: ['Java', 'Spring Boot', 'MongoDB', 'Graph algorithms'],
    live: null,
    github: null,
  },
];

// Images live in src/assets/certificates/<id>.jpg and are picked up automatically. Newest first.
export const certificates = [
  { id: 'full-stack-web-development', title: 'Full Stack Web Development', issuer: 'UIT University, Center for Continuing Education', date: 'Jan 18, 2026', note: 'Five-month program', url: null, urlFallback: 'Certificate of participation' },
  { id: 'intro-generative-ai', title: 'Introduction to Generative AI', issuer: 'Google Cloud, via Coursera', date: 'Oct 30, 2025', url: 'https://coursera.org/verify/JF8XM08D5I6G' },
  { id: 'intro-data-analysis-excel', title: 'Introduction to Data Analysis using Microsoft Excel', issuer: 'Coursera Project Network', date: 'Aug 25, 2025', url: 'https://coursera.org/verify/6V7O4KYXY79H' },
  { id: 'ask-questions-data-driven-decisions', title: 'Ask Questions to Make Data-Driven Decisions', issuer: 'Google, via Coursera', date: 'Aug 24, 2025', url: 'https://coursera.org/verify/4WB5X773ILKT' },
  { id: 'foundations-data-data-everywhere', title: 'Foundations: Data, Data, Everywhere', issuer: 'Google, via Coursera', date: 'Aug 10, 2025', url: 'https://coursera.org/verify/9ZCKQAV64F2H' },
];

export const experience = [
  {
    role: 'AI Intern',
    org: 'Al Rahim Group of Companies',
    dates: 'Aug 2026 – Sep 2026',
    points: [
      'Built conversational chatbots and Retrieval-Augmented Generation pipelines during a two-month internship.',
      'Used LLM APIs and prompt engineering to produce context-aware responses grounded in domain-specific data.',
    ],
  },
  {
    role: 'Student Branch Relations Coordinator',
    org: 'IEEE Karachi Section SAC',
    dates: '2026',
    points: [
      'Selected as the liaison between the IEEE Karachi Section and university student branches.',
      'Coordinate communication across branches on student-led technical initiatives.',
    ],
  },
  {
    role: 'Chairperson',
    org: 'IEEE SSUET Student Branch',
    dates: '2025 – Present',
    points: [
      'Organized 30+ workshops, seminars and hackathons on software development and emerging technologies, with 75+ attendees at the largest events.',
      'Lead planning for a technical community of 50+ members and build partnerships with IEEE regional bodies and industry professionals.',
    ],
  },
];

export const education = {
  degree: 'BS Software Engineering',
  school: 'Sir Syed University of Engineering & Technology',
  dates: 'Oct 2024 – Present',
  details: 'CGPA 3.79 / 4.0',
};
