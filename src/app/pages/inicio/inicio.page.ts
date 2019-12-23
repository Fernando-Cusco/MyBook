import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from './libro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  libros: Libro[] = [];
  poster = 'http://es.web.img2.acsta.net/pictures/210/521/21052107_20131023133923735.jpg';
  slideOpt = {
    slidesPerView: 1.6,
    freeMode: true
  }

  constructor(private service: LibrosService) { }

  ngOnInit() {
    this.service.todas().subscribe(response => {
      this.libros = response;
      this.libros.forEach(element => {
        console.log(element);
      }); 
    },(error) => {
      console.log(error);
      
    })
  }

}
