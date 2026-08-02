import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../services/experience.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
    private readonly experienceService = inject(ExperienceService);

    experiences$!:Observable<Experience[]>;

  ngOnInit(): void {
    this.experiences$ = this.experienceService.getExperiences();
  }

  badgeClass(type: Experience['type']): string {
    switch (type) {
      case 'cdi': return 'bg-success';
      case 'alternance': return 'bg-primary';
      case 'stage': return 'bg-warning text-dark';
      case 'formation': return 'bg-secondary';
      default: return 'bg-secondary';
    }
  }

  badgeLabel(type: Experience['type']): string {
    switch (type) {
      case 'cdi': return 'CDI';
      case 'alternance': return 'Alternance';
      case 'stage': return 'Stage';
      case 'formation': return 'Formation';
      default: return type;
    }
  }
}