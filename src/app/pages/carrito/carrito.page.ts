import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarritoService } from '../../services/carrito.service';
import { LibrosService } from '../../services/libros.service';
import { Detalle } from '../../components/carrito-compras/detalle';
import { Libro } from '../inicio/libro';
import { SelectDireccionComponent } from '../../components/select-direccion/select-direccion.component';

import { SelectTarjetaComponent } from '../../components/select-tarjeta/select-tarjeta.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  @Input("idUser") idUser;

  subtotal: number = 0;

  idsLibro: number[] = [];
  libros: Libro[] = [];

  detalles: Detalle[] = [];
  posiciones: number[] = [];
  cantidades: number[] = [];

  constructor(private modalCtrl: ModalController,
    private serviceCar: CarritoService,
    private service: LibrosService,
    private router: ActivatedRoute) {
    this.cargar();

  }

  async cargar() {
    this.idsLibro = await this.serviceCar.cargarCarrito();
    for (let id in this.idsLibro) {
      this.cantidades.push(1);
      this.posiciones.push(parseInt(id));
      this.buscar(this.idsLibro[id]);
    }
  }

  ngOnInit() {
    this.router.queryParams
    .subscribe(params => {
      this.idUser = params.id
    });
    console.log('USUARIO ING', this.idUser);

  }

  ionViewDidEnter() {
    let ct: number[] = [];
    for (let cant in this.idsLibro) {
      ct.push(1);
    }
    this.enviarDetalle(ct);
  }

  regresar() {

    // this.modalCtrl.dismiss();
  }

  sumar(p: number, op: string) {
    if (op === '+') {
      this.cantidades[p]++;
    } else if (op === '-') {
      if (this.cantidades[p] === 1) {

      } else {
        this.cantidades[p]--;
      }
    }
    this.enviarDetalle(this.cantidades);

  }

  quitar(pos, posx, lid) {
    let i = this.libros.indexOf(pos);
    this.libros.splice(i, 1);
    let x = this.cantidades.indexOf(posx);
    this.cantidades.splice(x, 1);
    /*correjir si el libro eliminado es el correcto por su id*/
    let l = this.idsLibro.indexOf(lid);
    this.idsLibro.splice(l, 1);
    this.enviarDetalle(this.cantidades);
  }

  enviarDetalle(cant: number[]) {
    console.log(cant.length, 'cantidades');

    let i = 0;
    for (let id in this.idsLibro) {
      let det: Detalle = new Detalle();
      det.cantidad = cant[i];
      det.idLib = this.idsLibro[id];
      det.idUsuario = this.idUser;
      this.detalles.push(det);
      i++;
    }
    this.serviceCar.enviarDetalles(this.detalles).subscribe(res => {
      console.log('Subtotal', res);
      this.subtotal = res
    });
    this.detalles = [];
  }

  async pago() {
    let i = 0;
    for (let id in this.idsLibro) {
      let det: Detalle = new Detalle();
      det.cantidad = this.cantidades[i];
      det.idLib = this.idsLibro[id];
      det.idUsuario = this.idUser;
      this.detalles.push(det);
      i++;
    }

    this.detalles = [];




    this.serviceCar.realizarPago(this.detalles).subscribe(res => {
    console.log('Total', res);

    });

  }

  buscar(id: number) {
    this.service.buscar(id).subscribe(libro => {
      this.libros.push(libro);
    });
  }

  async tarjeta() {
      const t = await this.modalCtrl.create({
        component: SelectTarjetaComponent,
        componentProps: {
          'usuario': this.idUser
        }
      });
      t.present();
      const { data } = await t.onDidDismiss();
  }

  async direccion() {
    const m = await this.modalCtrl.create({
      component: SelectDireccionComponent,
      componentProps: {
        'usuario': this.idUser
      }
    });
    m.present();
    const { data } = await m.onDidDismiss();
    
  }

}
