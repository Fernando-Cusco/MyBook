import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Direccion } from './direccion';
import { PopoverController } from '@ionic/angular';
import { DireccionComponent } from 'src/app/components/direccion/direccion.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: Usuario = new Usuario();


  constructor(private service: UsuarioService, private popCtrl: PopoverController) { }
  ngOnInit() {
    
  }

  registrar() {
    console.log(this.usuario);
    
    this.service.registro(this.usuario).subscribe(response => {
      console.log(response.id);
      console.log(response.mensaje);
    },(error) => {
      console.log("ERRRORRR "+error.message);
      
    });
  }

  async direccion() {
    const popover = await this.popCtrl.create({
      component: DireccionComponent,
      translucent: true
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    this.usuario.direcciones = data;
    console.log(this.usuario.direcciones);
    
  }
}
