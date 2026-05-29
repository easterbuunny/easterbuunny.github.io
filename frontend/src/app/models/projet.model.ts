export interface Projet {
  id: number;
  titre: string;
  description?: string;
  technologies: string[];
  application: string;
  type: string;
  sourceUrl?: string;
}
