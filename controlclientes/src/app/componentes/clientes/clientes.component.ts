import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientesServicio } from 'src/app/servicios/cliente.services';
import { Cliente } from '../../modelo/cliente.model';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  Clientes: Cliente[] | undefined;

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0

  }

  constructor(private clienteservicio: ClientesServicio, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
    this.clienteservicio.getCliente().subscribe(
      Clientes => {
        this.Clientes = Clientes
      }
    )
  }

  getSaldoTotal(){
    let saldototal:number  = 0;
    if(this.Clientes){
      this.Clientes.forEach(
        cliente =>{
          saldototal += cliente.saldo
        }
      )
    }
    return saldototal;

  }

  agregar({value, valid}: {value: Cliente, valid: boolean}){

    if(!valid){
      this.flashMessages.show('Llena el Formulario Correctamente',{
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else {
      // Agegamos el nuevo Cliente //

    }

  }


}
