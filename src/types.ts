export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Concept / Future';
  category: 'Desktop & Python' | 'Web Systems' | 'Full-Stack' | 'Security & Tools';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlightPoints: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    keyAlgorithms?: string[];
  };
  demoAvailable?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Proficient' | 'Familiar';
    highlight?: boolean;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  hours?: string;
  type: 'Internship' | 'Full-Time' | 'Technical' | 'Customer Support' | 'Operations';
  highlights: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  iconName: string;
  details: string;
  verifiedBadge?: string;
}

export type RoleFocus = 'all' | 'it-support' | 'tech-va' | 'junior-python';
