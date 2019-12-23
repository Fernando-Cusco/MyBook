import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../pages/inicio/libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  todas():Observable <Libro[]> {
    return this.http.get<Libro[]>('http://localhost:8080/Libreria/rest/libros/todos');
  }
  
}
