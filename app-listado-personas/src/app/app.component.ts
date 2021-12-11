import { Component } from '@angular/core';
import { Persona } from './presona.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Listado de Personas';

  personas: Persona[] = [new Persona('Jose', 'Cerberos'),
  new Persona('Mariah', 'Carey'),
  new Persona('Jimmy', 'Carrey')]


personaAgregada(persona:Persona){
  this.personas.push(persona);
}

}
