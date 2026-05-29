import { Projet } from '../models/projet.model';

export const PROJETS: Projet[] = [
  {
    id: 1,
    titre: 'Gestionnaire de Bibliothèque',
    description: 'Exemple 1 :  Conception d\'une API REST pour et créer des requêts pour chercher des objets sur le site.',
    technologies: ['Angular', 'TypeScript'],
    application: 'backend',
    type:'example'

  },
  {
    id: 2,
    titre: 'Simulateur d\'Automates',
    description: 'Exemple 2 : Interface visuelle permettant de dessiner et tester des machines à états finis.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap'],
    application: 'frontend',
    type: 'example'
  },
  {
    id: 3,
    titre: 'Projet Interface Graphique',
    description: 'Projet universitaire Java. Le principe est jeu de plombier et de mettre le bon chemin dans la grille.',
    technologies: ['Java', 'Swing', 'MySQL'],
    application: 'backend',
    type: 'universite'
  },
];
