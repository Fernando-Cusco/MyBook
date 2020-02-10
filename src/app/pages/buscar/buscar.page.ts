import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../inicio/libro';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  idUser: number;
  libros: Libro[] = [];
  
  constructor(private service: LibrosService, private modal: ModalController, private online: CarritoService) { }

  ngOnInit() {
    this.usuarioOnline();
  }

  async usuarioOnline() {
    this.idUser = await this.online.online();
    console.log('USUARIO ING', this.idUser);
  }

  async buscar(event) {
    this.service.buscarSimilar(event.target.value).subscribe( response => {
      this.libros = response;
      this.libros.forEach(element => {
        console.log(element.titulo);
      });
    }, (error) => {
      console.log('Error '+error);
    });
  }

  async verDetalle(id: number) {
    const m = await this.modal.create({
      component: DetalleComponent,
      componentProps: {
        id: id,
        idUser: this.idUser
      }
    });
    m.present();
  }





}
