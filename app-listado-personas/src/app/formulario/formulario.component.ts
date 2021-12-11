import { Persona } from './../presona.module';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  @Output() personaCreada = new EventEmitter<Persona>()

  nombreInput:string = '';

  apellidoInput:string = '';


agregarPersona(){
  let persona = new Persona(this.nombreInput, this.apellidoInput);

  //this.personas.push(persona)

  this.personaCreada.emit(persona);
}


}
