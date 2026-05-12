package com.strbnn.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import com.strbnn.application.service.ProjetService;
import com.strbnn.domain.model.ProjetDTO;

@RestController
@RequestMapping("/api/projets")
@CrossOrigin(origins = "http://localhost:4000") // Port du container Angular
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
