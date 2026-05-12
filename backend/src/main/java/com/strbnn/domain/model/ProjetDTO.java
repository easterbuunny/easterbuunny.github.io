package com.strbnn.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ProjetDTO {
  private Long id;
  private String titre;
  private String description;
  private List<String> technologies;
  private String application;
  private String type;
}
