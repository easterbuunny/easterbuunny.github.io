import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plomberie-game',
  imports: [],
  templateUrl: './plomberie-game.component.html',
  styleUrl: './plomberie-game.component.scss',
})
export class PlomberieGameComponent {
  @Input({ required: true }) projet!: Projet;
  isDarkMode = false;
  isLoading = false;

    toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

}
