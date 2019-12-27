import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  idsLibro: number[] = [];
  constructor(private storage: Storage) { }


  agregarCarrito(id: number) {
    this.idsLibro.push(id);
    this.storage.set('libros', this.idsLibro);
  }

  async cargarCarrito() {
    const id = await this.storage.get('libros');
    this.idsLibro = id || [];
    this.idsLibro = this.idsLibro.filter((valor, i, array) => array.indexOf(valor) === i);
    return this.idsLibro;
  }

}
