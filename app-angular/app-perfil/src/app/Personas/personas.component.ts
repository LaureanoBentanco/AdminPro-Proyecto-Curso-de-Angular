import { Component } from "@angular/core";

@Component({
    selector:"app-personas",
    templateUrl: "personas.component.html"

})
export class PersonasComponent {
desabilitar = false;
mensaje  = "No se a Agregado ninguna persona";
titulo = '';
agregarPersona (){
  this. mensaje = 'persona Agregada';

}
}
