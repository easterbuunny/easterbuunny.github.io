package com.strbnn.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.strbnn.domain.model.ExperienceDTO;
import com.strbnn.domain.service.ExperienceService;

@RestController
@RequestMapping("/api/experiences")
@CrossOrigin(origins = "${app.cors.origins}")
public class ExperienceController {

    private final ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @GetMapping
    public List<ExperienceDTO> getExperiences() {
        return experienceService.getAllExperiences();
    }

}
