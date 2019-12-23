import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionComponent } from './direccion/direccion.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  entryComponents: [DireccionComponent, DetalleComponent, FooterComponent],
  declarations: [DireccionComponent, DetalleComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    DireccionComponent,
    DetalleComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
