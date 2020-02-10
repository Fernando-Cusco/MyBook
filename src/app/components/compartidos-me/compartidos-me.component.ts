import { Component, OnInit, Input } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from 'src/app/pages/inicio/libro';
import { UsuarioService } from '../../services/usuario.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-compartidos-me',
  templateUrl: './compartidos-me.component.html',
  styleUrls: ['./compartidos-me.component.scss'],
})
export class CompartidosMeComponent implements OnInit {
  @Input("idUser") idUser;
  libros: Libro[] = [];
  usuarios: string[] = []


  constructor(private service: LibrosService, private serviceL: LibrosService, private _modal: ModalController) {



  }

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.service.compartidosMe(this.idUser).subscribe(res => {
      for (let id in res) {
        this.consultarLibro(res[id].libro);
        this.usuarios.push(res[id].nombreUsuario)
      }
    });
  }
  consultarLibro(id: number) {
    this.serviceL.buscar(id).subscribe(res => {
      this.libros.push(res);
    });
  }

  cerrar() {
    this._modal.dismiss();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.libros = [];
      this.usuarios = [];
      this.cargar();
      event.target.complete();
    }, 2500);
  }


  async verDetalle(id: number) {
    const m = await this._modal.create({
      component: DetalleComponent,
      componentProps: {
        id: id,
        idUser: this.idUser
      }
    });
    m.present();
  }

}
