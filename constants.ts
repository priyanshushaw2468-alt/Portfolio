
import { HeroData, Project, NavigationItem, SocialLink, ExperienceItem } from './types';

export const HERO_DATA: HeroData = {
  headline: "Designing user-focused digital products with precision",
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
    company: "URLWEBWALA",
    period: "Jul 2025 – Sep 2025",
    description: "Designed a real estate website from scratch (User Research to High-fidelity), collaborated with developers for seamless handoff."
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Real Estate - Company Website",
    category: "Internship Project",
    year: "2025",
    layoutStyle: "grid_square",
    imageUrl: "https://lh3.googleusercontent.com/d/1CIvDDLEUzaF1h_teq3qy0ndMvb_sOQlV",
    description: "During my internship at URLWEBWALA, I designed a complete real estate website from scratch to help the client establish an online presence and showcase properties.",
    challenge: "Without a website, the client lacked online credibility and had no structured way to showcase their services and properties to potential customers.",
    solution: "Designed a website from scratch using familiar patterns to reduce user confusion. Prioritized basic information, visual clarity, and property showcases suitable for a first-time business website.",
    outcome: "This project shows the designer can build a complete website from scratch while working within real client and internship constraints.",
    behanceUrl: "https://www.behance.net/gallery/233493377/Real-Estate-%28Web-page-design%29",
    prototypeUrl: "https://www.figma.com/proto/nfzbLG4EX4La61h4sjgKqS/Real-Estate?page-id=89%3A1220&node-id=89-1221&p=f&viewport=463%2C174%2C0.03&t=FC78dDoys12PD5ds-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=89%3A1221",
    role: "UI/UX Designer",
    timeline: "1 Month",
    tools: "Figma, Notebook"
  },
  {
    id: '2',
    title: "PawPals — Pet Adoption Platform",
    category: "Web Design",
    year: "2025",
    layoutStyle: "grid_square",
    imageUrl: "https://lh3.googleusercontent.com/d/1H9Qi6dH1g6-DQZh492v5CE-9viSioq5Z",
    description: "PawPals is a pet adoption platform that connects shelters and adopters through clear profiles, smart filters, and emotional storytelling to simplify the adoption journey.",
    challenge: "Pet adoption is often confusing and emotionally overwhelming. Information about pets and shelters is scattered, making it hard for people to confidently adopt animals in need.",
    solution: "Balanced emotional appeal with functional clarity. Created a platform with smart filters, detailed pet profiles, direct messaging, and an AI chatbot to guide first-time adopters.",
    outcome: "This project shows the designer’s ability to design for emotional decision-making while keeping the experience simple and clear.",
    behanceUrl: "https://www.behance.net/gallery/239953769/PawPals-Adoption-Care-%28Website-Landing-page%29",
    prototypeUrl: "https://www.figma.com/proto/UA9uRNC5IZgG4cseKQw4sl/Untitled?page-id=0%3A1&node-id=1-1159&viewport=810%2C209%2C0.16&t=U1e5inSdKF2vyu1u-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A1159",
    role: "UI/UX Designer",
    timeline: "1 Week",
    tools: "Figma"
  },
  {
    id: '3',
    title: "Padosi — Local Store Onboarding",
    category: "Web Design",
    year: "2025",
    layoutStyle: "grid_square",
    imageUrl: "https://lh3.googleusercontent.com/d/1x7OQ6VTCRcTDmmebgw0w7RySoR9UQ_OQ",
    description: "A simple landing page designed to help offline store owners get onboarded to the Padosi platform without requiring them to use complex technology.",
    challenge: "Local shop owners want to sell online but don’t know how to list their stores or use technology. Because of this gap, they continue to lose customers to larger online platforms.",
    solution: "Designed a landing page focusing on non-tech-savvy users. Instead of complex dashboards, it connects owners with human support. Features include simple contact flows and trust-building messaging.",
    outcome: "This project shows the designer understands real local business problems and can design solutions that work even when users are not digitally skilled.",
    behanceUrl: "https://www.behance.net/gallery/240140897/Padosi-Hyperlocal-Grocery-Delivery-Platform",
    prototypeUrl: "https://www.figma.com/proto/UA9uRNC5IZgG4cseKQw4sl/Untitled?page-id=37%3A641&node-id=37-3212&viewport=366%2C166%2C0.16&t=zqJ1C1Q9ydPiS3M8-1&scaling=contain&content-scaling=responsive&starting-point-node-id=37%3A3212",
    role: "UI/UX Designer",
    timeline: "2 Weeks",
    tools: "Figma, Gemini"
  },
  {
    id: '4',
    title: "IRCTC Rail Connect — App Redesign",
    category: "App Redesign",
    year: "2025",
    layoutStyle: "grid_square",
    imageUrl: "https://lh3.googleusercontent.com/d/1wtOwS4uzqOo7J-wu1u1wQmzCX_ia1jo_",
    description: "A modern redesign of the IRCTC app that simplifies the booking process and highlights the most important information, improving clarity and usability.",
    challenge: "Users face information overload during booking and tracking. Important actions are buried under complex navigation in the existing confusing and cluttered interface.",
    solution: "Simplified the booking flow and reduced visual clutter. Introduced a clean blue-and-white interface, AI assistant integration, and clear access to live train tracking.",
    outcome: "This project shows the designer can redesign complex, high-stress systems with a focus on clarity and information hierarchy.",
    behanceUrl: "https://www.behance.net/gallery/235487619/IRCTC-Rail-Connect-App-UIUX-Redesign",
    prototypeUrl: "https://www.figma.com/proto/I6EOIiFXbLBNbLF65oY0HU/IRCTC-App?page-id=0%3A1&node-id=12-105&viewport=-9991%2C3588%2C0.6&t=nf47WjxdAUuTT3rd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=885%3A6879",
    role: "UI/UX Designer",
    timeline: "1.5 Months",
    tools: "Figma, Notebook"
  },
  {
    id: '5',
    title: "TOKO — Waste Selling & Sustainability",
    category: "Mobile App",
    year: "2025",
    layoutStyle: "grid_square",
    imageUrl: "https://lh3.googleusercontent.com/d/1m2gEFbhqfEvDqhDwH8pT056bOXaiMAaK",
    description: "TOKO is a waste management app where users can sell their waste materials at genuine prices instead of throwing them away, promoting a cleaner lifestyle.",
    challenge: "People want to dispose of waste responsibly and earn some extra money, but there is no clear, trustworthy system to sell waste easily.",
    solution: "Designed an app driven by earning motivation. Users can easily list waste for sale and shop for sustainable products. The interface focuses on transparency and simple selling flows.",
    outcome: "This project shows the designer understands economic motivation as a UX driver, not just sustainability as a concept.",
    behanceUrl: "https://www.behance.net/gallery/235926221/TOKO-Waste-App-The-loop-from-Trash-to-Treasure",
    prototypeUrl: "https://www.figma.com/proto/9LUDUEjGHyu02hhZE2siO0/TOKO-WASTE?page-id=129%3A268&node-id=220-366&p=f&viewport=1%2C209%2C0.03&t=rv0Xe2477Gkz3ktJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=207%3A15",
    role: "UI/UX Designer",
    timeline: "2 Months",
    tools: "Figma, Notebook, Gemini"
  },
  {
    id: '6',
    title: "Finora — Finance Dashboard",
    category: "Dashboard Practice",
    year: "2025",
    layoutStyle: "grid_square",
    imageUrl: "https://lh3.googleusercontent.com/d/1S4lW8KAYzFoPNTeW80jzESvgTnyr82bV",
    description: "Many finance dashboards fail because they overwhelm users with numbers and poor hierarchy. As a practice exercise, I designed Finora to improve my skills in structuring complex financial information in a clear and readable way.",
    challenge: "Financial data is dense. If hierarchy and spacing are weak, users struggle to understand their own money at a glance. The challenge was to avoid creating a busy interface that lacks clarity.",
    solution: "Designed a clean, card-based layout focusing on clarity. Prioritized total balance and cash flow, applied consistent spacing and typography, and kept colors minimal to avoid distracting from the data.",
    outcome: "This project shows that the designer understands how to organize complex data into a clear, usable dashboard, demonstrating strong layout sense and attention to hierarchy.",
    behanceUrl: "https://www.behance.net/gallery/240632585/Finora-Finance-Dashboard",
    prototypeUrl: "https://www.figma.com/proto/UA9uRNC5IZgG4cseKQw4sl/Untitled?page-id=89%3A2951&node-id=94-1925&viewport=426%2C190%2C0.28&t=79drDh2TJAbJ9PRL-1&scaling=contain&content-scaling=responsive&starting-point-node-id=94%3A1925",
    role: "UI/UX Designer",
    timeline: "2 Weeks",
    tools: "Figma, Notebook, Gemini"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/priyanshu-shaw-032862303", label: "LinkedIn" },
  { platform: "Behance", url: "https://www.behance.net/priyanshushaw/projects", label: "Behance" },
  { platform: "Instagram", url: "https://www.instagram.com/priyanshuix.design/", label: "Instagram" }
];

export const DESIGN_TOOLS = [
  "Figma", "Framer", "Photoshop", "Wix Studio", "Canva"
];

export const DESIGN_SKILLS = [
  "UI Design", "UX Fundamentals", "Visual Hierarchy", "Layout & Grids", "Typography", "User Flows", "Wireframing", "Prototyping", "Interaction Design"
];

export const AI_TOOLS = [
  "ChatGPT", "Gemini"
];

export const CONTACT_INFO = {
  email: "priyanshushaw8204@gmail.com",
  phone: "+91 7003775627",
  location: "Kolkata, India"
};
