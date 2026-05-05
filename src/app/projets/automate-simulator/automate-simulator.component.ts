import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Projet } from '../../models/projet.model';

interface LogEntry{
  hour: Date;
  action: string;
  newState: string;
}

@Component({
  selector: 'app-automate-simulator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './automate-simulator.component.html',
  styleUrl: './automate-simulator.component.scss'
})
export class AutomateSimulatorComponent implements OnInit{
  currentState: 'Start'| 'Stop'| 'Error' = 'Stop' ;

  history: LogEntry[] = [];

  @Input({ required: true }) projet!: Projet;

  ngOnInit(): void {
      this.currentState = 'Stop';
      console.log("Bienvenu dans le projet : ", this.projet.titre);
  }

  toStart(){
    if (this.currentState==='Stop') {
      this.currentState = 'Start';
      this.addLog("Start button is enable", this.currentState);
    } else {
      this.addLog("Start button is already enable", this.currentState);
    }
  }

  toFail(){
    this.currentState = 'Error';
    this.addLog("Error button is enable", this.currentState);
  }

  toStop(){
    this.currentState = 'Stop';
    this.addLog("Stop button is enable", this.currentState);
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
}
