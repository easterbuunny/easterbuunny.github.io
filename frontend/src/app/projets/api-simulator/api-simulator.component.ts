import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Projet } from '../../models/projet.model';
import { PROJETS } from '../../data/mock-projets';

@Component({
  selector: 'app-api-simulator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-simulator.component.html',
  styleUrl: './api-simulator.component.scss',
})
export class ApiSimulatorComponent {
  @Input({ required: true }) projet!: Projet;

  isDarkMode = false;
  isLoading = false;

  jsonResponse:any = null;
  statusCode: number | null = null;

  endpoints = [
    { method: 'GET', url: '/api/v1/projetUniversite', desc: 'Lister les projets université' },
    { method: 'GET', url: '/api/v1/projetPersonnel', desc: 'Lister les projets personels' },
    { method: 'GET', url: '/api/v1/projetExample', desc: 'Lister les exemples du tutoriel' },
    { method: 'POST', url: '/api/v1/emprunts', desc: 'Créer un nouvel emprunt' }
  ]

  activeEndpoint = this.endpoints[0];

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  selectEndpoint(endpoint : any) {
    this.activeEndpoint = endpoint;
    this.jsonResponse = null;
    this.statusCode = null;
  }

  sendRequest() {
    this.isLoading = true;
    this.jsonResponse = null;
    this.statusCode = null;

    setTimeout(() => {
      this.isLoading = false;
      this.statusCode = this.activeEndpoint.method === 'POST' ? 201 : 200;
      if(this.activeEndpoint.url === '/api/v1/projetUniversite') {
        this.jsonResponse = PROJETS.filter((p) => p.type==='universite');
      } else if (this.activeEndpoint.url === '/api/v1/projetPersonnel') {
        this.jsonResponse = PROJETS.filter((p) => p.type==='personnel');
      }  else if (this.activeEndpoint.url === '/api/v1/projetExample') {
        this.jsonResponse = PROJETS.filter((p) => p.type==='example');
      } else {
        this.jsonResponse = {
          status: 'SUCCESS',
          message: 'Emprunt enregistré avec succès dans la base',
          date : new Date().toISOString()
        };
      }
    },1200); //1.2 secondes de réflexion du serveur
  }

}
