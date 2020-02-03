import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionComponent } from './direccion/direccion.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { SelectDireccionComponent } from './select-direccion/select-direccion.component';
import { SelectTarjetaComponent } from './select-tarjeta/select-tarjeta.component';
import { FormsModule } from '@angular/forms';
import { ConfirmarPagoComponent } from './confirmar-pago/confirmar-pago.component';
import { CompartidosMeComponent } from './compartidos-me/compartidos-me.component';



@NgModule({
  entryComponents: [DireccionComponent, DetalleComponent, FooterComponent, CarritoComprasComponent, SelectDireccionComponent, SelectTarjetaComponent, ConfirmarPagoComponent, CompartidosMeComponent],
  declarations: [DireccionComponent, DetalleComponent, FooterComponent, CarritoComprasComponent, SelectDireccionComponent, SelectTarjetaComponent, ConfirmarPagoComponent, CompartidosMeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
    
  ],
  exports:[
    DireccionComponent,
    DetalleComponent,
    FooterComponent,
    CarritoComprasComponent,
    SelectDireccionComponent,
    SelectTarjetaComponent,
    ConfirmarPagoComponent,
    CompartidosMeComponent
  ]
})
export class ComponentsModule { }
