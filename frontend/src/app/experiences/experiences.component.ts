import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Experience } from '../models/experience.model';
import { EXPERIENCES } from '../data/mock-experiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experiences: Experience[] = EXPERIENCES;

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