import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LibrosService } from '../../services/libros.service';
import { Libro } from 'src/app/pages/inicio/libro';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  constructor(private modalCtrl: ModalController, private service: LibrosService) {

  }

  ngOnInit() {
    this.service.buscar(this.id).subscribe( response => {
      console.log("Libro: "+response.titulo);
    }, (error) => {
      console.log("ERROR: "+error);
      this.regresar();
    });
  }

  


  regresar() {
    this.modalCtrl.dismiss();
  }

}
