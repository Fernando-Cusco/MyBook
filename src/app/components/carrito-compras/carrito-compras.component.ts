import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {

  cantidad:number = 1;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  regresar() {
    this.modalCtrl.dismiss();
  }

  sumar() {
    this.cantidad++;
  }

  restar() {
    this.cantidad--;
  }

  quitar() {

  }
}
