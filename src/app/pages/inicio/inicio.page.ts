import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from './libro';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  libros: Libro[] = [];
  poster = 'http://es.web.img2.acsta.net/pictures/210/521/21052107_20131023133923735.jpg';
  slideOpt = {
    slidesPerView: 1.6,
    freeMode: true
  }

  constructor(private service: LibrosService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.service.todas().subscribe(response => {
      this.libros = response;
      this.libros.forEach(element => {
        console.log(element);
      }); 
    },(error) => {
      console.log(error);
      
    })
  }

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });
    modal.present();
  }
}