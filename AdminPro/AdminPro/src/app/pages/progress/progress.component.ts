import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;

  constructor() { }

    getPorcentaje(){
      return `${this.progreso}%`;
    }

    cambiarValor(valor: number){
      this.progreso = this.progreso + valor;

      }


  ngOnInit(): void {
  }

}
