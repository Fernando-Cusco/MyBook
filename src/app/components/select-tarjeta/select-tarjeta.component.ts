import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Tarjeta } from '../../pages/register/tarjeta';
import { CarritoService } from '../../services/carrito.service';

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

  constructor(private modal: ModalController, private service: UsuarioService,  private serviceCar: CarritoService, private toast: ToastController) { }

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
  }

  doRefresh(event) {
    setTimeout(() => {
      this.tarjetas = [];
      this.cargarTarjetas();
      event.target.complete();
    }, 2500);
  }

  async confirmarPago() {
    const t = await this.toast.create({
      header: 'Seguro quieres realizar el pago?',
      message: 'Click to close',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'add',
          text: 'Realizar Pago',
          handler: () => {
            this.realizarPago();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    t.present();
  }

  cargarTarjetas() {
    this.service.tarjetas(this.usuario).subscribe(res => {
      for (let t in res) {
        this.tarjetas.push(res[t]);
      }
    });
  }
}
