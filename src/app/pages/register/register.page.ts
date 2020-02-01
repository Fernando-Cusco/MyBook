import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Direccion } from './direccion';
import { PopoverController } from '@ionic/angular';
import { DireccionComponent } from 'src/app/components/direccion/direccion.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: Usuario = new Usuario();

  direcciones: Direccion[] = [];
  constructor(private service: UsuarioService,
              private popCtrl: PopoverController,
              private router: Router) { }
  ngOnInit() {
    
  }

  registrar() {
    console.log(this.usuario);
    
    this.service.registro(this.usuario).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    },(error) => {
      console.log("ERRRORRR "+error.message);
      
    });
  }

  async direccion() {
    const popover = await this.popCtrl.create({
      component: DireccionComponent,
      translucent: true,
      backdropDismiss: false
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    this.direcciones.push(data)
    this.usuario.direcciones =  this.direcciones;
    console.log(this.usuario.direcciones);
    
  }
}
