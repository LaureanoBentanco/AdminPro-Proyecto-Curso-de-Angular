import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { loginservice } from './loginservice.sevice';
import { ProductosService } from './productos.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    FormularioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [loginservice, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
