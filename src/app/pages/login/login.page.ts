import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../register/usuario';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  image = "../assets/user.png";
  idUser: number;
  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router, private online: CarritoService, private toast: ToastController, private loading: LoadingController) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.usuario).subscribe(response => {
      this.idUser = response.id;
      if(this.idUser > 0) {
        this.online.usuarioOnline(this.idUser);
        this.router.navigate(['/inicio'], {queryParams: {
          id: this.idUser
        }});
      } else if( this.idUser == 0) {
        this.mensaje('Datos Incorrecto');
      }
    });
  }

  async mensaje(msj: string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 1500
    });
    toast.present();
  }

  async iniciar() {
    const l = await this.loading.create({
      message: 'Espera...',
      duration: 1500,
      translucent: true
    });
    l.present();
    this.login()

    const { role, data } = await l.onDidDismiss();
    
  }


}
