import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Edades';
  edadUno = 0;
  edadDos = 0;
  promedio = 0;
  suma = 0;

  Calcular() {
    this.promedio = (this.edadUno + this.edadDos) / 2;
    this.suma = this.edadUno + this.edadDos;
  }

  Limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.Calcular();
  }
}
