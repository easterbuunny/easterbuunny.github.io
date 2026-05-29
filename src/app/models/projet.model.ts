export interface Projet {
  id: number;
  titre: string;
  description: string;
  technologies: string[];
  type: 'frontend' | 'backend' | 'fullstack';
  lienGithub?: string;
}
