import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../components/carrito-compras/detalle';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  idsLibro: number[] = [];
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private storage: Storage, private http: HttpClient) { }


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


  enviarDetalles(detalles: Detalle[]): Observable<any> {
    return this.http.post('http://localhost:8080/Libreria/rest/compras/detalles', detalles, {headers: this.httpHeaders});
  }

}
