import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../pages/register/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = 'http://localhost:8080/Libreria/rest/usuario'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private hhtp: HttpClient) { }

  login(usuario: Usuario): Observable<Usuario> {
    return this.hhtp.post<Usuario>('http://localhost:8080/Libreria/rest/usuario/login', usuario, {headers: this.httpHeaders});
  }


}
