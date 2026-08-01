import { Component, Input } from '@angular/core';
import { Projet } from '../../models/projet.model';

@Component({
  selector: 'app-plomberie-game',
  imports: [],
  templateUrl: './plomberie-game.component.html',
  styleUrl: './plomberie-game.component.scss',
})
export class PlomberieGameComponent {
  @Input({ required: true }) projet!: Projet;

}
