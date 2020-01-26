import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Direccion } from 'src/app/pages/register/direccion';


@Component({
  selector: 'app-select-direccion',
  templateUrl: './select-direccion.component.html',
  styleUrls: ['./select-direccion.component.scss'],
})
export class SelectDireccionComponent implements OnInit {

  @Input('usuario') usuario;
  direcciones: Direccion[] = [];
  constructor(private modal: ModalController, private service: UsuarioService) { }
  

  ngOnInit() {
    this.service.datosPago(this.usuario).subscribe(res => {
      console.log(res);
      
      for (const direccion in res.direcciones) {
          this.direcciones.push(res.direcciones[direccion]);
      }
    });
  }



  tarjetas() {
    this.modal.dismiss({
      idDireccion: 1
    });
  }

  cancelar() {
    this.modal.dismiss();
  }

}
