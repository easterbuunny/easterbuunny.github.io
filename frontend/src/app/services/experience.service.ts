import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  
  private readonly apiUrl = `${environment.apiUrl}/api/experiences`;

  constructor(private http : HttpClient) { }

  getExperiences(): Observable<Experience[]> {
    console.log("API Experience : ", this.apiUrl);
    return this.http.get<Experience[]>(this.apiUrl);
  }
}
