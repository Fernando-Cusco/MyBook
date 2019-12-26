import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {

  cantidad:number = 1;
  total:number = 10;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  regresar() {
    this.modalCtrl.dismiss();
  }

  sumar() {
    this.cantidad++;
    this.total = this.cantidad * 12;
  }

  restar() {
    if(this.cantidad > 1) {
      this.cantidad--;
      this.total = this.cantidad * 12;
    }
    
  }

  quitar() {

  }

  pago() {
    
  }
}
