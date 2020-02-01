import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../register/usuario';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  image = "../assets/user.png";
  idUser: number;
  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router, private online: CarritoService) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.usuario).subscribe(response => {
      console.log(response, 'aqui');
      
      this.idUser = response.id;
      this.online.usuarioOnline(this.idUser);
      this.router.navigate(['/inicio'], {queryParams: {
        id: this.idUser
      }});
    });
  }


}
