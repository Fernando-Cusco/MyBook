import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../pages/register/usuario';
import { Observable } from 'rxjs';
import { Respuesta } from '../pages/register/respuesta';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = 'http://localhost:8080/Libreria/rest/usuario'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  login(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/Libreria/rest/usuario/login', usuario, {headers: this.httpHeaders});
  }


  registro(usuario: Usuario): Observable<Respuesta> {
    
    return this.http.post<Respuesta>('http://localhost:8080/Libreria/rest/usuario/registro', usuario, {headers: this.httpHeaders});
  }



}
