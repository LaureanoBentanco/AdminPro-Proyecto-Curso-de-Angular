import { HeaderComponent } from './header/header.component';
import { BreadcrubsComponent } from './breadcrubs/breadcrubs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrubsComponent,
    SidebarComponent
  ],
  exports:[
    HeaderComponent,
    BreadcrubsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
