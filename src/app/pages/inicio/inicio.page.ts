import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from './libro';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { ActivatedRoute } from '@angular/router';
import { CarritoComprasComponent } from '../../components/carrito-compras/carrito-compras.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  idUser: number;
  libros: Libro[] = [];
  poster = 'http://es.web.img2.acsta.net/pictures/210/521/21052107_20131023133923735.jpg';
  slideOpt = {
    slidesPerView: 2.1,
    freeMode: true
  }

  constructor(private service: LibrosService, private modalCtrl: ModalController, private router: ActivatedRoute) { 
  }

  ngOnInit() {
    this.router.queryParams
    .subscribe(params => {
      this.idUser = params.id
    });
    this.service.todas().subscribe(response => {
      this.libros = response;
      this.libros.forEach(element => {
        console.log(element.autores);
      }); 
    },(error) => {
      console.log(error);
      
    })
  }

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id: id,
        idUser: this.idUser
      }
    });
    modal.present();
  }

  async carrito() {
    const modal = await this.modalCtrl.create({
      component: CarritoComprasComponent,
      componentProps: {
        idUser: this.idUser
      }
    });
    modal.present();
  }
}
