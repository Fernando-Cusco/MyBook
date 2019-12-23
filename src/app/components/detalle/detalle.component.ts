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
  libros: Libro[] = [];
  constructor(private modalCtrl: ModalController, private service: LibrosService) {
    console.log("Id libro llego: "+this.id);
    
  }

  ngOnInit() {
    this.service.buscar(this.id).subscribe( response => {
      console.log("Libro: "+response.titulo);
    }, (error) => {
      console.log("ERROR: "+error);
      this.regresar();
    });
  }

  buscar() {
    this.service.buscarSimilar('el').subscribe( response => {
      this.libros = response;
      this.libros.forEach(element => {
        console.log(element.titulo);
      });
    }, (error) => {
      console.log('Error '+error);
    });
  }


  regresar() {
    this.modalCtrl.dismiss();
  }

}
