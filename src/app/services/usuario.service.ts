import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../pages/register/usuario';
import { Observable } from 'rxjs';
import { Respuesta } from '../pages/register/respuesta';
import { Tarjeta } from '../pages/register/tarjeta';
import { Direccion } from '../pages/register/direccion';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = 'http://34.95.200.214/Libreria/faces/rest/usuario'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  login(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('http://34.95.200.214/Libreria/faces/rest/usuario/login', usuario, {headers: this.httpHeaders});
  }


  registro(usuario: Usuario): Observable<Respuesta> {
    
    return this.http.post<Respuesta>('http://34.95.200.214/Libreria/faces/rest/usuario/registro', usuario, {headers: this.httpHeaders});
  }

  direcciones(id: number): Observable<Direccion[]>{
    return this.http.get<Direccion[]>(`http://34.95.200.214/Libreria/faces/rest/compras/direcciones?id=${id}`);

  }

  tarjetas(id: number): Observable<Tarjeta[]>{
    return this.http.get<Tarjeta[]>(`http://34.95.200.214/Libreria/faces/rest/compras/tarjetas?id=${id}`);

  }

  agregarTarjeta(tarjeta: Tarjeta): Observable<Respuesta> {
    console.log('Enviando '+tarjeta);
    
    return this.http.post<Respuesta>(`http://34.95.200.214/Libreria/faces/rest/compras/agregarTarjeta`, tarjeta, {headers: this.httpHeaders});
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://34.95.200.214/Libreria/faces/rest/usuario/usuarios');
  }

  misCompras(id: number):Observable<any[]> {
    return this.http.get<any[]>(`http://34.95.200.214/Libreria/faces/rest/usuario/miscompras?id=${id}`);
  }

}
