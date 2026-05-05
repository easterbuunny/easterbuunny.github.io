import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projet } from '../models/projet.model';
import { PROJETS } from '../data/mock-projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor() { }

  getProjets(): Observable<Projet[]> {
    return of(PROJETS);
  }
}
