export interface Experience {
  id: number;
  poste: string;
  entreprise: string;
  client: string;
  lieu?: string;
  dateDebut: string;   // ex: 'Sept. 2023'
  dateFin?: string;    // absent ou vide => 'En cours'
  description: string;
  missions?: string[];
  technologies: string[];
  type: 'cdi' | 'stage' | 'alternance' | 'formation';
}