import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Tarjeta } from '../../pages/register/tarjeta';

@Component({
  selector: 'app-select-tarjeta',
  templateUrl: './select-tarjeta.component.html',
  styleUrls: ['./select-tarjeta.component.scss'],
})
export class SelectTarjetaComponent implements OnInit {
  @Input('usuario') usuario;

  tarjeta: Tarjeta = new Tarjeta;

  tarjetas: Tarjeta[] = [];

  constructor(private modal: ModalController, private service: UsuarioService) { }

  ngOnInit() {
    this.service.tarjetas(this.usuario).subscribe(res => {
      console.log(res);
      for (const t in res.tarjetas) {
        this.tarjetas.push(res.tarjetas[t]);
      }
    })
  }

  agregarTarjeta() {
    this.tarjeta.id = 1;
    this.service.agregarTarjeta(this.tarjeta).subscribe(res => {
      console.log(res);
      
    })
  }

  cerrar() {
    this.modal.dismiss();
  }
}
