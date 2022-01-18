import { Component, OnInit } from '@angular/core';
import { ClientesServicio } from 'src/app/servicios/cliente.services';
import { Cliente } from '../../modelo/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  Clientes: Cliente[] | undefined;

  constructor(private clienteservicio: ClientesServicio) { }

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


}
