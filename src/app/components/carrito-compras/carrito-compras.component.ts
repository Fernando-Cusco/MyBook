import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  regresar() {
    this.modalCtrl.dismiss();
  }

  sumar() {

  }

  restar() {

  }

  quitar() {
    
  }
}
