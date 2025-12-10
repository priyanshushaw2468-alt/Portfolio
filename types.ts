
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  layoutStyle: 'featured_large' | 'grid_square' | 'tall';
  imageUrl: string;
  description?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  behanceUrl?: string;
  prototypeUrl?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  subHeadline: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
}
