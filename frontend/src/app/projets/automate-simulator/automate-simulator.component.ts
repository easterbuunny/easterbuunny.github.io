import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Projet } from '../../models/projet.model';

interface LogEntry{
  hour: Date;
  action: string;
  newState: string;
}

type EtatAutomate = 'Marche'| 'Arret'| 'En cours'| 'Erreur';

@Component({
  selector: 'app-automate-simulator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './automate-simulator.component.html',
  styleUrl: './automate-simulator.component.scss'
})
export class AutomateSimulatorComponent implements OnInit{

  history: LogEntry[] = [];
  currentState : EtatAutomate  = "Arret";
  isDarkMode:boolean = false;

  @Input({ required: true }) projet!: Projet;

  ngOnInit(): void {
      this.currentState = 'Arret';
      this.isDarkMode = false;

      console.log("Bienvenu dans le projet : ", this.projet.titre);
  }

  toStart(){
    if (this.currentState==='Arret') {
      this.currentState = 'En cours';
      this.addLog("En cours de démarrage", this.currentState);

      setTimeout(() => {
        if(this.currentState==='En cours') {
          this.currentState = "Marche";
          this.addLog("Démarrage", this.currentState);

        }
      }, 2000)
    }
  }

  toFail(){
    this.currentState = 'Erreur';
    this.addLog("Similation d'erreur", this.currentState);
  }

  toStop(){
    this.currentState = 'Arret';
    this.addLog("Arrêté", this.currentState);
  }

  private addLog(action: string, state: typeof this.currentState) {
    this.history.unshift({
      hour: new Date(),
      action: action,
      newState: state
    });
  }

  cleanLog() {
    this.history = [];
  }

  toggleTheme():void {
    this.isDarkMode = !this.isDarkMode;
  }
}
