import { Persona } from './persona.model';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginServices } from './login/login.services';
require('firebase/auth');

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient,
                private loginServices: LoginServices){}

    // tslint:disable-next-line: typedef
    cargarPersonas(){
      const token = this.loginServices.getIdToken();

      return this.httpClient.get('https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    // tslint:disable-next-line: typedef
    guardarPersonas(personas: Persona[]){

      const token = this.loginServices.getIdToken();

      this.httpClient.put('https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos.json?auth =' + token, personas).subscribe(
      response =>  console.log( ' resultado de Guardar Personas' + response),
      error => console.log('error al guardar Persona' + error)
    );

    }

    // tslint:disable-next-line: typedef
    modificarPersona(index: number, personas: Persona[]){

      const token = this.loginServices.getIdToken();

      let url: string;
      url = ' https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos' + (index) + '.json?auth=' + token;

      this.httpClient.put (url, personas).subscribe(response => console.log('respuesta de Modificar Persona' + response),
                                                    error => console.log('error al modificar Persona' + error));
    }

    // tslint:disable-next-line: typedef
    eliminarPersona(index: number){

      const token = this.loginServices.getIdToken();

      let url: string;
      url = ' https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos' + (index) + '.json?auth=' + token;

      this.httpClient.delete (url).subscribe(respuesta => console.log('respuesta de borrar Persona' + respuesta),
                                             error => console.log('error al borrar Persona' + error));

    }
}
