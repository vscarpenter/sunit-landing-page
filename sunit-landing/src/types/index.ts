export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  graduationYear: number;
  location?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: number;
  expirationYear?: number;
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'technical' | 'programming' | 'tools' | 'cloud' | 'soft';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: number;
  organization?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
}