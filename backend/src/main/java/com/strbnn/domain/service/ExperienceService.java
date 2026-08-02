package com.strbnn.domain.service;

import java.util.Arrays;
import java.util.List;
import com.strbnn.domain.model.ExperienceDTO;

import org.springframework.stereotype.Service;

@Service
public class ExperienceService {
    public List<ExperienceDTO> getAllExperiences() {
        return Arrays.asList(
                new ExperienceDTO(
                        1L,
                        "Ingénieure Consultante Sécurité",
                        "Synetis",
                        "CNAV - Carsat",
                        "Paris, France",
                        "Octobre 2025",
                        "Juillet 2026",
                        "TODO",
                        Arrays.asList(
                                "Rédaction document de formation Sailpoint IdentityIQ",
                                "Correction d'anomalie lors de la bascule",
                                "Evolution de l'application",
                                "Participer au réunion de l'équipe"),
                        Arrays.asList("Java", "XML", "SQL", "Sailpoint IdentityIQ"),
                        "cdi"),
                new ExperienceDTO(
                        2L,
                        "Ingénieure Full Stack Technico Fonctionnel",
                        "Sopra Steria",
                        "Moorganium - EDF",
                        "Saint-Denis, France",
                        "Février 2025",
                        "Octobre 2025",
                        "TODO",
                        Arrays.asList(
                                "Mise en production de l'application",
                                "Réalisation des évolutions",
                                "Documentation de l'application",
                                "Application de la méthode Agile",
                                "Aider le PO à réaliser les tests en recette"),
                        Arrays.asList("Java", "Angular", "SQL"),
                        "cdi"),
                new ExperienceDTO(
                        3L,
                        "Ingénieure Full Stack",
                        "Sopra Steria",
                        "Maffias - Enedis",
                        "Courbevoie, France",
                        "Mai 2024",
                        "Janvier 2025",
                        "TODO",
                        Arrays.asList(
                                "Refonte IHM: mise à niveau charte graphique",
                                "CI/CD migration de l'application vers Gitlab CI",
                                "Backup Scrum Master ",
                                "Mise en production de l'application ",
                                "Mise à jour de la documentation ",
                                "Réalisation d'évolution backend et frontend"),
                        Arrays.asList("Java", "Angular", "SQL", "Gitlab"),
                        "cdi"),
                new ExperienceDTO(
                        4L,
                        "Ingénieure Full Stack",
                        "Sopra Steria",
                        "Sequoia - Enedis",
                        "Montreuil, France",
                        "Septembre 2023",
                        "Mai 2024",
                        "TODO",
                        Arrays.asList(
                                "Analyse et correction des anomalies ",
                                "Réalisation d'évolution ",
                                "Participer aux campagnes de tests",
                                "Extraction de documents donnés à archiver",
                                "Préparation du décommissionnement",
                                "Mise en production avec le client"),
                        Arrays.asList("Java", "PHP", "SQL", "Shell"),
                        "cdi"));
    }
}
