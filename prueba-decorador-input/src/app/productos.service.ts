import { loginservice } from "./loginservice.sevice";
import { Productos } from "./productos.model";

export class  ProductosService{

  constructor(private loginService: loginservice){

  }

  productos: Productos [] = [
    new Productos ("Sony","NT34-L","Resitentes al agua y al polvo Auriculares Bluetooht",5600),
    new Productos ("xiaomi","Mi A2", "exelente calidad Precio del Mercado Con USB-C Carga Rapida Usado", 20000)
  ];

  agregarProducto(producto:Productos){


    this.productos.push(producto);
    this.loginService.enviarMensaje("que?");

  }

}

