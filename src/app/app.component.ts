import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miMusica';

  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}



