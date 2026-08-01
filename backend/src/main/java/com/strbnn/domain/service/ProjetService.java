package com.strbnn.domain.service;

import com.strbnn.domain.model.ProjetDTO;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProjetService {
    public List<ProjetDTO> getAllProjets() {
        return Arrays.asList(
                new ProjetDTO(
                        1L,
                        "Gestionnaire de projet",
                        "Exemple 1 : Conception d'une API REST pour et créer des requetes et chercher des objets sur le sites.",
                        Arrays.asList("Angular", "TypeScript", "Java"),
                        "backend",
                        "example",
                        ""),
                new ProjetDTO(
                        2L,
                        "Simulateur d'Automates",
                        "Exemple 2 : Interface visuelle permettant de dessiner et tester des machines à états finis.",
                        Arrays.asList("Angular", "TypeScript", "Bootstrap"),
                        "frontend",
                        "example",
                        ""),
                new ProjetDTO(
                        3L,
                        "Projet Interface Graphique",
                        "Projet universitaire Java...",
                        Arrays.asList("Java", "Swing"),
                        "desktop",
                        "universite",
                        "https://github.com/easterbuunny/projet_interfaces_graphiques"),
                new ProjetDTO(
                        4L,
                        "Wordle",
                        "Le jeu wordle en anglais",
                        Arrays.asList("C#"),
                        "backend",
                        "personel",
                        "https://github.com/easterbuunny/Wordle"));
    }
}
