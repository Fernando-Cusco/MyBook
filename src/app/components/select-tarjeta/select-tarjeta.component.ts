import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController, PopoverController, LoadingController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Tarjeta } from '../../pages/register/tarjeta';
import { CarritoService } from '../../services/carrito.service';
import { ConfirmarPagoComponent } from '../confirmar-pago/confirmar-pago.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-tarjeta',
  templateUrl: './select-tarjeta.component.html',
  styleUrls: ['./select-tarjeta.component.scss'],
})
export class SelectTarjetaComponent implements OnInit {
  @Input() usuario;
  @Input() detalles;
  idTarjeta: number;

  tarjeta: Tarjeta = new Tarjeta;

  tarjetas: Tarjeta[] = [];

  constructor(private loading: LoadingController, private popCtrl: PopoverController,private modal: ModalController, private service: UsuarioService,  private serviceCar: CarritoService, private toast: ToastController, private router: Router) { }

  ngOnInit() {
    this.cargarTarjetas();
  }

  seleccionar(id: number) {
    for(let i in this.detalles) {
      this.detalles[i].idTarjeta = id
    }
    console.log(this.detalles);
    
  }

  agregarTarjeta() {
    this.tarjeta.idUser = this.usuario;
    this.service.agregarTarjeta(this.tarjeta).subscribe(res => {
      console.log(res);
      
    });
  }

  cerrar() {
    this.modal.dismiss();
  }

  pagar() {
    this.confirmarPago();
   
  }

  realizarPago() {
     this.serviceCar.realizarPago(this.detalles).subscribe(res => {
      console.log('Total', res);
    });
    this.vaciarCarrito();

  }

  async vaciarCarrito() {
    this.serviceCar.vaciarCarrito();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.tarjetas = [];
      this.cargarTarjetas();
      event.target.complete();
    }, 2500);
  }

  async confirmarPago() {
    const pop = await this.popCtrl.create({
      component: ConfirmarPagoComponent,
      mode: 'ios',
      cssClass: 'pop-over-style',
      backdropDismiss: false,
      translucent: true
    });
    await pop.present();
    const { data } = await pop.onDidDismiss();
    if(data.ok === 'ok') {
      this.pagando();
     
    }
  }

  pagoRealizado() {
    this.loading.dismiss().then(() => {
      this.msj();
    });
    this.modal.dismiss();
  }

  async msj() {
    const t = await this.toast.create({
      message: 'Pago realizado correctamente',
      duration: 1000,
      position: 'middle',
    });
    t.present();
    this.router.navigate(['/inicio']);
    this.modal.dismiss();

  }

  async pagando() {
    const l = await this.loading.create({
      message: 'Espera estamos realiazando el pago',
      duration: 2500,
      translucent: true
    });
    l.present();
    this.realizarPago();

    const { role, data } = await l.onDidDismiss();
    this.msj();
  }

  cargarTarjetas() {
    this.service.tarjetas(this.usuario).subscribe(res => {
      for (let t in res) {
        this.tarjetas.push(res[t]);
      }
    });
  }
}
