import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../inicio/libro';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  libros: Libro[] = [];
  
  constructor(private service: LibrosService) { }

  ngOnInit() {
  }

  buscar(event) {
    this.service.buscarSimilar(event.detail.value).subscribe( response => {
      this.libros = response;
      this.libros.forEach(element => {
        console.log(element.titulo);
      });
    }, (error) => {
      console.log('Error '+error);
    });
  }

}
