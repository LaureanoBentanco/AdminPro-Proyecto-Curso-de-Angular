import { Component, ElementRef, ViewChild} from '@angular/core';
import { Productos } from '../productos.model';
import { loginservice } from '../loginservice.sevice';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[loginservice]

})
export class FormularioComponent  {

  constructor(private productosService: ProductosService){}

  //@Output() productoCreado = new  EventEmitter<Productos>();

  //marcaInput:string ="";
  //modeloInput:string = "";
  //descripcionInput:string = "";
  //precioInput:number = 0;

  @ViewChild('marcaInput') marcaInput: ElementRef;
  @ViewChild('modeloInput') modeloInput: ElementRef;
  @ViewChild('descripcionInput') descripcion: ElementRef;
  @ViewChild('precioInput') precioInput: ElementRef;



agregarProducto(){

   let producto1 = new Productos(this.marcaInput.nativeElement.value,
                                this.modeloInput.nativeElement.value,
                                this.descripcion.nativeElement.value,
                                this.precioInput.nativeElement.value);
   //this.productos.push(producto1);
  // this.productoCreado.emit (producto1);
   //this.loginservice.enviarMensaje( "Todo Bien ")

   this.productosService.agregarProducto(producto1)

}

}
