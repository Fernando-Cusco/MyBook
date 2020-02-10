import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.page.html',
  styleUrls: ['./mis-compras.page.scss'],
})
export class MisComprasPage implements OnInit {

  idUser: number;
  compras: any[];
  constructor(private service: CarritoService, private userService: UsuarioService) { }

  ngOnInit() {
    this.cargar();
    

  }

  cargar() {
    this.userOnline();
  }
  async userOnline() {
    this.idUser = await this.service.online();
    this.userService.misCompras(this.idUser).subscribe(res => {
      this.compras = res;
      console.log(this.compras);  
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.compras = [];
      this.cargar();
      event.target.complete();
    }, 2500);
  }

}
