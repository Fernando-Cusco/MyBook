import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../register/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  image = "../assets/user.png";

  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.usuario).subscribe(response => {
      this.router.navigate(['/inicio'], {queryParams: {
        id: response.id
      }})
    });
  }


}
