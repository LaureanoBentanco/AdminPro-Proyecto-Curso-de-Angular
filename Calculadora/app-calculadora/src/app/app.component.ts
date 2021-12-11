import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora ';
  subtitle = 'Sumá entre dos Numeros con está Web-App de Forma Sencilla';

  resultadoPadre: number;

  procesarResultado(resultado:number){

    this.resultadoPadre = resultado;

  }

}
