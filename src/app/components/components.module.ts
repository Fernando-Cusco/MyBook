import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionComponent } from './direccion/direccion.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  entryComponents: [DireccionComponent, DetalleComponent],
  declarations: [DireccionComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    DireccionComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
