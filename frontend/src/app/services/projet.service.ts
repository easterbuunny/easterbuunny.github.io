import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private readonly apiUrl = `${environment.apiUrl}/api/projets`;

  constructor(private http : HttpClient) { }

  getProjets(): Observable<Projet[]> {
    console.log("API  : ",this.apiUrl)
    return this.http.get<Projet[]>(this.apiUrl);
  }
}
