import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';
import { Projet } from '../models/projet.model';
import { Observable } from 'rxjs';
import { AutomateSimulatorComponent } from './automate-simulator/automate-simulator.component';
import { ApiSimulatorComponent } from './api-simulator/api-simulator.component';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, AutomateSimulatorComponent, ApiSimulatorComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss'
})
export class ProjetsComponent implements OnInit {
  private readonly projetService = inject(ProjetService);

  projets$!: Observable<Projet[]>;

  @Input() projetActif: Projet | null = null;

  ngOnInit(): void {
      this.projets$ = this.projetService.getProjets();
  }

  runDemo(projet: Projet) :void {
    this.projetActif = projet;
    console.log('Lancement de la Demo pour le projet : ', projet.titre);
  }

  stopDemo(): void {
    this.projetActif=null;
  }
}
