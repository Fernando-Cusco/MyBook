import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarritoService } from '../../services/carrito.service';
import { Libro } from 'src/app/pages/inicio/libro';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {

  cantidad:number = 1;
  total:number = 10;
  idsLibro: number[] = [];

  libros: Libro[] = [];

  constructor(private modalCtrl: ModalController, private serviceCar: CarritoService, private service: LibrosService) {
    this.cargar();
    
   }

   async cargar() {
    this.idsLibro = await this.serviceCar.cargarCarrito();
    for( let id in this.idsLibro) {
      this.buscar(this.idsLibro[id]);
    }
   }

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

  buscar(id: number) {
    this.service.buscar(id).subscribe(response => {
      this.libros.push(response);
    });
  }
}
