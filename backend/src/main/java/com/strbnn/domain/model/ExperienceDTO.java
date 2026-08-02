package com.strbnn.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ExperienceDTO {
    private Long id;
    private String poste;
    private String entreprise;
    private String client;
    private String lieu;
    private String dateDebut;
    private String dateFin;
    private String description;
    private List<String> missions;
    private List<String> technologies;
    private String type;
}
