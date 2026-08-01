import { Experience } from '../models/experience.model';

// Personnalisez librement cette liste avec votre propre parcours.
// L'ordre d'affichage suit l'ordre du tableau (mettez le plus récent en premier).
export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    poste: 'Ingénieure Consultant Sécurité',
    entreprise: 'Synetis',
    client: "CNAV - Carsat",
    lieu: 'Paris, France',
    dateDebut: 'Octobre 2025',
    dateFin: 'Juillet 2026',
    description: 'TODO',
    missions: [
      'TODO',
    ],
    technologies: ['Java', 'XML', 'Sailpoint - IdentityIQ', 'SQL'],
    type: 'cdi'
  },
  {
    id: 2,
    poste: 'Ingénieure Full Stak',
    entreprise: 'Sopra Steria',
    client: 'Morganium - EDF',
    lieu: 'Saint-Denis, France',
    dateDebut: 'Février 2025',
    dateFin: 'Octobre 2025',
    description: 'TODO',
    missions: [
      'TODO'
    ],
    technologies: ['Angular', 'TypeScript', 'Java', 'SQL'],
    type: 'cdi'
  },
  {
    id: 3,
    poste: 'Ingénieure Full Stack ',
    entreprise: 'Sopra Steria',
    client: 'Maffias - Enedis',
    lieu: 'Courbevoie, France',
    dateDebut: 'Mai 2024',
    dateFin: 'Janvier 2025',
    description: 'TODO',
    technologies: ['Java', 'Angular', 'SQL', 'Git', 'YAML'],
    type: 'cdi'
  },
  {
    id: 4,
    poste: 'Ingénieure Full Stack ',
    entreprise: 'Sopra Steria',
    client: 'Sequoia - Enedis',
    lieu: 'Montreuil, France',
    dateDebut: 'Septembre 2023',
    dateFin: 'Mai 2024',
    description: 'TODO',
    technologies: ['Java', 'PHP', 'SQL'],
    type: 'cdi'
  },
  {
    id: 4,
    poste: 'Ingénieure Full Stack ',
    entreprise: 'Sopra Steria',
    client: 'Sequoia - Enedis',
    lieu: 'Montreuil, France',
    dateDebut: 'Avril 2023',
    dateFin: 'Août 2023',
    description: 'TODO',
    technologies: ['Java', 'PHP', 'SQL'],
    type: 'stage'
  }
];