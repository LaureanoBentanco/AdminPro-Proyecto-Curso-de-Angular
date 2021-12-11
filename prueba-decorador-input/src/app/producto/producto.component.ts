import { Component, Input} from '@angular/core';
import { Productos } from '../productos.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input() producto: Productos;

  constructor() { }


}
