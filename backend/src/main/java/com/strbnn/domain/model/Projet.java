package com.strbnn.domain.model;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class Projet {
    private Long id;
    private String titre;
    private String description;
    private List<String> technologies;
    private String application;
    private String type;
}
