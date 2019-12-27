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
  libro: Libro;
  @Input() id;
  @Input() idUser;
  poster = 'http://es.web.img2.acsta.net/pictures/210/521/21052107_20131023133923735.jpg';
  constructor(private modalCtrl: ModalController, private service: LibrosService) {

  }

  ngOnInit() {
    this.service.buscar(this.id).subscribe( response => {this.libro = response;
    }, (error) => {
      console.log("ERROR: "+error);
      this.regresar();
    });
  }

  


  regresar() {
    this.modalCtrl.dismiss();
  }

  votar() {
    this.service.votar(this.idUser, this.id).subscribe(response => {
      console.log(response);
      
    });
  }

}
