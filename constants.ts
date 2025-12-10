
import { HeroData, Project, NavigationItem, SocialLink, ExperienceItem } from './types';

export const HERO_DATA: HeroData = {
  headline: "Designing user-focused digital products with precision.",
  subHeadline: "I am Priyanshu Shaw, a generic-defying self-taught UI/UX Designer passionate about wireframing, prototyping, and solving complex problems.",
  primaryCta: "View Work",
  secondaryCta: "Resume"
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "UI/UX Designer Intern",
    company: "URLWEBALA",
    period: "Jul 2025 – Sep 2025",
    description: "Designed a real estate website from scratch (User Research to High-fidelity), collaborated with developers for seamless handoff."
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Real Estate Platform",
    category: "Client Project",
    year: "2025",
    layoutStyle: "featured_large",
    imageUrl: "https://picsum.photos/1200/800?random=101",
    description: "A comprehensive digital platform designed to streamline the property buying and renting process for modern urban dwellers.",
    challenge: "The real estate market is flooded with complex, data-heavy interfaces that overwhelm users. The challenge was to simplify property discovery while maintaining robust filtering capabilities.",
    solution: "We designed a map-centric interface that puts location context first. By utilizing progressive disclosure, advanced filters are hidden until needed, keeping the UI clean and approachable.",
    outcome: "Increased user engagement by 40% and reduced bounce rate on property listing pages significantly.",
    behanceUrl: "https://www.behance.net/",
    prototypeUrl: "https://www.figma.com/"
  },
  {
    id: '2',
    title: "SpendSync",
    category: "Mobile App",
    year: "2024",
    layoutStyle: "grid_square",
    imageUrl: "https://picsum.photos/800/800?random=102",
    description: "An intuitive expense tracking application focused on behavioral finance to help millennials save more effectively.",
    challenge: "Most expense trackers are tedious to use manually. Users drop off after a few days of logging.",
    solution: "SpendSync uses AI to auto-categorize SMS transaction alerts and provides one-tap verification. The UI uses gamification elements to reward consistent tracking.",
    outcome: "Achieved a 4.8-star rating on the App Store with over 10,000 active monthly users.",
    behanceUrl: "https://www.behance.net/",
    prototypeUrl: "https://www.figma.com/"
  },
  {
    id: '3',
    title: "MindMesh",
    category: "AI Web Design",
    year: "2024",
    layoutStyle: "grid_square",
    imageUrl: "https://picsum.photos/800/800?random=103",
    description: "A conceptual landing page for a neural interface startup, blending futuristic aesthetics with accessible information architecture.",
    challenge: "Conveying abstract, high-tech concepts without alienating non-technical investors and early adopters.",
    solution: "Used WebGL interactions and 3D typography to create an immersive storytelling experience that visually explains the technology as the user scrolls.",
    outcome: "Featured in several design galleries for excellence in creative web typography.",
    behanceUrl: "https://www.behance.net/",
    prototypeUrl: "https://www.figma.com/"
  },
  {
    id: '4',
    title: "Fiverr Landing Page",
    category: "Redesign",
    year: "2024",
    layoutStyle: "grid_square",
    imageUrl: "https://picsum.photos/800/800?random=104",
    description: "A strategic redesign of the Fiverr freelancer profile page to improve trust and conversion rates.",
    challenge: "Users often found it difficult to gauge the quality of a freelancer quickly due to cluttered information hierarchy.",
    solution: "Restructured the profile to highlight portfolio work and verified reviews immediately. Introduced a 'Quick Hire' workflow for repeat clients.",
    outcome: "A practice project that received commendation from senior designers for its clarity and focus on conversion metrics.",
    behanceUrl: "https://www.behance.net/",
    prototypeUrl: "https://www.figma.com/"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "#", label: "LinkedIn" },
  { platform: "Behance", url: "#", label: "Behance" },
  { platform: "Instagram", url: "#", label: "Instagram" }
];

export const SKILLS = [
  "Figma", "Framer", "Photoshop", "Wireframing", "Prototyping", "User Research", "Next.js", "Tailwind CSS"
];

export const AI_TOOLS = [
  "ChatGPT", "Gemini"
];

export const CONTACT_INFO = {
  email: "priyanshushaw8204@gmail.com",
  phone: "+91 7003775627",
  location: "Kolkata, India"
};
