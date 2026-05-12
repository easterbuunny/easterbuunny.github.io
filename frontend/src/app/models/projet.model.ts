export interface Projet {
  id: number;
  titre: string;
  description: string;
  technologies: string[];
  application: 'frontend' | 'backend' | 'fullstack';
  type: 'universite' | 'personnel' | 'example';
  lienGithub?: string;
}
