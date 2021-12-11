import { Component, } from '@angular/core';
import { PersonaRegister } from './register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  Personas: PersonaRegister[] = [new PersonaRegister('Maria',
  'Cortez','maria.cortez@gmail.com','maria1234')];

}
