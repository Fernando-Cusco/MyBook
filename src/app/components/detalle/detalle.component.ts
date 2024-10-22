import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LibrosService } from '../../services/libros.service';
import { Libro } from 'src/app/pages/inicio/libro';
import { CarritoService } from '../../services/carrito.service';
import { Autor } from '../../pages/inicio/autor';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../pages/register/usuario';
import { CompartirTMP } from '../../pages/inicio/compartir';
import { Categoria } from '../../pages/inicio/categoria';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  libro: Libro;
  autores: Autor[] = [];
  categorias: Categoria[] = [];
  usuariosIds: Usuario[] = [];
  @Input() id;
  @Input() idUser;
  compar: CompartirTMP = new CompartirTMP;
  poster = 'http://es.web.img2.acsta.net/pictures/210/521/21052107_20131023133923735.jpg';
  constructor(private modalCtrl: ModalController, private usuarioService: UsuarioService, private service: LibrosService, private serviceCar: CarritoService, private toast: ToastController) {

  }

  ngOnInit() {
    this.service.buscar(this.id).subscribe(response => {
      console.log('Found', response);
      this.autores = response.autores;
      this.categorias = response.categorias;
      this.libro = response;
    }, (error) => {
      console.log("ERROR: " + error);
      this.regresar();
    });

    this.usuarioService.listarUsuarios().subscribe(res => {
      console.log('USUARIOS LLEGANDO ',res);
      
      for(let i in res){
        if(this.idUser !== res[i].id) {
          this.usuariosIds.push(res[i]);
        }
      }
      
    });
  }

  compartir(id: number, nombre: string){
    this.compar.libro = this.id;
    this.compar.usuarioComparte = this.idUser;
    this.compar.usuarioRecibe = id;
    this.service.compartir(this.compar).subscribe(res => {
      this.mensaje(res.mensaje+" con: "+nombre);
    });
    
    
  }




  regresar() {
    this.modalCtrl.dismiss();
  }

  votar() {
    this.service.votar(this.idUser, this.id).subscribe(response => {
      this.mensaje(response.mensaje);
    });
  }

  agregarAlCarrito(id: number) {
    //guardar en el storage el id del libro y recuperar en el carrito de compras
    this.serviceCar.agregarCarrito(id);
    //this.mensaje('Agregado al carrito')
    
  }

  async mensaje(msj: string) {
    const t = await this.toast.create({
      message: msj,
      duration: 2000
    });
    t.present();
  }

}
