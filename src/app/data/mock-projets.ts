import { Projet } from '../models/projet.model';

export const PROJETS: Projet[] = [
  {
    id: 1,
    titre: 'Gestionnaire de Bibliothèque',
    description: 'Projet universitaire JavaEE. Conception d\'une API REST pour gérer les emprunts et les retours de livres.',
    technologies: ['JavaEE', 'JAX-RS', 'MySQL'],
    type: 'backend'
  },
  {
    id: 2,
    titre: 'Simulateur d\'Automates',
    description: 'Projet d\'algorithmique. Interface visuelle permettant de dessiner et tester des machines à états finis.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap'],
    type: 'frontend'
  }
];
