import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  constructor(private modalCtrl: ModalController, private service: LibrosService) {
    console.log("Id libro llego: "+this.id);
    
  }

  ngOnInit() {
    this.service.buscar(this.id).subscribe( response => {
      console.log("Libro: "+response.titulo);
    }, (error) => {
      console.log("ERROR: "+error);
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
