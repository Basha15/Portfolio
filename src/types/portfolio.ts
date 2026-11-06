export type ProficiencyLevel = 'Proficient' | 'Working Knowledge' | 'Foundational';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Backend & Web' | 'Databases & ORM' | 'Data & ML' | 'Tools & Practices';
  level: ProficiencyLevel;
  iconName?: string;
  description?: string;
}

export interface ExperienceItem {
  organization: string;
  designation: string;
  location: string;
  period: string;
  isCurrent: boolean;
  statusText: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationDate: string;
  score: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  badge?: string;
}

export interface AwardItem {
  title: string;
  event: string;
  year: string;
  description: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  is_featured?: boolean;
}

export interface FeaturedProjectConfig {
  repoName: string;
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Backend & ML' | 'Data & Analytics' | 'Web & Tools';
  accuracy?: string;
  teamSize?: string;
}

export interface ContactFormData {
  recruiterName: string;
  companyName: string;
  workEmail: string;
  opportunityType: string;
  subject: string;
  message: string;
  honeypot?: string;
}
