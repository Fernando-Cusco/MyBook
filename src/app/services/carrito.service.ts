import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../components/carrito-compras/detalle';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  idsLibro: number[] = [];
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private storage: Storage, private http: HttpClient, private toast: ToastController) { 
    this.cargarCarrito();
  }

  usuarioOnline(id: number) {
   this.offline();
    this.storage.set('id', id);
  }

  online() {
    return this.storage.get('id');
  }


  offline() {
    this.storage.remove('id');
  }

  agregarCarrito(id: number) {
    let existe = false;
    let mensaje = '';
    for(const lib of this.idsLibro) {
      if(this.idsLibro[lib] == id ) {
        existe = true;
      }
    }
    if(existe) {
      this.idsLibro = this.idsLibro.filter(l => l !== id);
      //this.idsLibro.splice(pos,1);
      mensaje = 'Item removido del carrito';
    } else {
      this.idsLibro.push(id);
      mensaje = 'Item agregado al carrito';
    }
    this.presentToast(mensaje);
    this.storage.set('libros', this.idsLibro);
    return existe;
  }

  async cargarCarrito() {
    const id = await this.storage.get('libros');
    this.idsLibro = id || [];
    this.idsLibro = this.idsLibro.filter((valor, i, array) => array.indexOf(valor) === i);
    return this.idsLibro;
  }

  vaciarCarrito() {
    this.storage.remove('libros');
  }
  
  async presentToast(msj: string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }

  enviarDetalles(detalles: Detalle[]): Observable<any> {
    return this.http.post('http://localhost:8080/Libreria/rest/compras/detalles', detalles, {headers: this.httpHeaders});
  }

  realizarPago(detalles: Detalle[]): Observable<any> {
    console.log(detalles,' here');
    
    return this.http.post('http://localhost:8080/Libreria/rest/compras/factura', detalles, {headers: this.httpHeaders});
  }

}
