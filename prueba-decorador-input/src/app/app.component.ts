import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Productos } from './productos.model';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'prueba-decorador-input';

  productos: Productos [] = [];

  constructor (private productoService:ProductosService){}

  ngOnInit(): void {
   this.productos = this.productoService.productos
  }

  

}
