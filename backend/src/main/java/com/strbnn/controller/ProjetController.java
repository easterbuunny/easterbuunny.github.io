package com.strbnn.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.strbnn.domain.model.ProjetDTO;
import com.strbnn.domain.service.ProjetService;

@RestController
@RequestMapping("/api/projets")
@CrossOrigin(origins = "${app.cors.origins}") // Port du container Angular
public class ProjetController {

  private final ProjetService projetService;

  public ProjetController(ProjetService projetService) {
    this.projetService = projetService;
  }

  @GetMapping
  public List<ProjetDTO> getProjets() {
    return projetService.getAllProjets();
  }

}
