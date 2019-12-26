import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionComponent } from './direccion/direccion.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';



@NgModule({
  entryComponents: [DireccionComponent, DetalleComponent, FooterComponent, CarritoComprasComponent],
  declarations: [DireccionComponent, DetalleComponent, FooterComponent, CarritoComprasComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    DireccionComponent,
    DetalleComponent,
    FooterComponent,
    CarritoComprasComponent
  ]
})
export class ComponentsModule { }
