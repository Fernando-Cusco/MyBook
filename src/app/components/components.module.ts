import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionComponent } from './direccion/direccion.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  entryComponents: [DireccionComponent],
  declarations: [DireccionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    DireccionComponent
  ]
})
export class ComponentsModule { }
