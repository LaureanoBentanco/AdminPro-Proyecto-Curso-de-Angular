import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../presona.module';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  @Input() persona: Persona;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
