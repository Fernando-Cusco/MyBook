import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Direccion } from 'src/app/pages/register/direccion';
import { SelectTarjetaComponent } from '../select-tarjeta/select-tarjeta.component';


@Component({
  selector: 'app-select-direccion',
  templateUrl: './select-direccion.component.html',
  styleUrls: ['./select-direccion.component.scss'],
})
export class SelectDireccionComponent implements OnInit {

  @Input() usuario;
  @Input() detalles;
  idDireccion: number;
  direcciones: Direccion[] = [];
  constructor(private _modal: ModalController, private service: UsuarioService) { }
  

  ngOnInit() {
    this.cargarDirecciones();
   
  }



  cancelar() {
    this._modal.dismiss();
  }

  seleccionar(id: number) {
    for(let i in this.detalles) {
      this.detalles[i].idDireccion = id
    }
    this._modal.dismiss({
      idDireccion: id
    });
   this.tarjeta();
    
  }

  async tarjeta() {
    const m = await this._modal.create({
      component: SelectTarjetaComponent,
      componentProps: {
        'usuario': this.usuario,
        'detalles': this.detalles
      }
    });
    m.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.direcciones = [];
      this.cargarDirecciones();
      event.target.complete();
    }, 2500);
  }

  cargarDirecciones() {
    this.service.direcciones(this.usuario).subscribe(res => {
      console.log(res);
      
      for (const direccion in res) {
          this.direcciones.push(res[direccion]);
      }
    });
  }

}

