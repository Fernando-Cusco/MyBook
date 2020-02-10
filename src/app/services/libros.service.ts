import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../pages/inicio/libro';
import { Observable } from 'rxjs';
import { Respuesta } from '../pages/register/respuesta';
import { CompartirTMP } from '../pages/inicio/compartir';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  todas():Observable <Libro[]> {
    return this.http.get<Libro[]>('http://34.95.200.214/Libreria/faces/rest/libros/todos');
  }

  buscar(id: number):Observable<Libro> {
    return this.http.get<Libro>(`http://34.95.200.214/Libreria/faces/rest/libros/buscar/${id}`);
  }

  buscarSimilar(key: string):Observable<Libro[]> {
    return this.http.get<Libro[]>(`http://34.95.200.214/Libreria/faces/rest/libros/similar?&key=${key}`);
  }

  votar(idu: number, idl: number):Observable<Respuesta>{
    return this.http.get<Respuesta>(`http://34.95.200.214/Libreria/faces/rest/votos/votar?usuario_id=${idu}&libro_id=${idl}`);
  }

  compartir(compartir: CompartirTMP): Observable<Respuesta> {
    return this.http.post<Respuesta>('http://34.95.200.214/Libreria/faces/rest/compartir/compatir', compartir, {headers: this.httpHeaders});
  }

  compartidosMe(id: number):Observable<CompartirTMP> {
    return this.http.get<CompartirTMP>(`http://34.95.200.214/Libreria/faces/rest/compartir/compartidos?id=${id}`);
  }
}