import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from './libro';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

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
    slidesPerView: 2.9,
    freeMode: false
  }

  constructor(private service: LibrosService,
              private online: CarritoService,
              private modalCtrl: ModalController,
              private router: ActivatedRoute,
              private route: Router) { 
  }

  ngOnInit() {
    this.usuarioOnline();
    // this.router.queryParams
    // .subscribe(params => {
    //   this.idUser = params.id
    // });
    this.service.todas().subscribe(response => {
      this.libros = response;
      this.libros.forEach(element => {
        console.log(element.autores);
      }); 
    },(error) => {
      console.log(error);
      
    })
    
  }

  async usuarioOnline() {
    this.idUser = await this.online.online();
    console.log('USUARIO ING', this.idUser);
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


  cerrarSesion() {
    this.online.offline();
    this.route.navigate(['/login']);
  }

  carrito() {
    this.route.navigate(['/carrito'], {queryParams: {
      id: this.idUser
    }});
    // const modal = await this.modalCtrl.create({
    //   component: CarritoComprasComponent,
    //   componentProps: {
    //     idUser: this.idUser
    //   }
    // });
    // modal.present();
  }


}
