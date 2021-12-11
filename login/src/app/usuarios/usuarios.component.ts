import { Component, Input} from '@angular/core';
import { PersonaRegister } from '../registration/register.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  @Input() persona: PersonaRegister;

  constructor() { }



}
