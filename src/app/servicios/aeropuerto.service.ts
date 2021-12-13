import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';
 import { UsuarioModelo } from '../interfaces/usuario';
import { AeropuertoModelo } from '../interfaces/aeropuerto';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  url = "https://apiloopbackequipo20mintic.herokuapp.com"
  token: string = ''
  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) { 
    this.token = this.seguridadService.getToken();
  }
  store(aeropuerto: AeropuertoModelo): Observable<AeropuertoModelo> {
    //Hacer una solicitud http por el metodo post, pasandome el usuario modelo, llamo lo que tenga la variabl url/aeropuertos
    return this.http.post<AeropuertoModelo>(`${this.url}/aeropuertos`, {
      nombre: aeropuerto.nombre,
      ciudad: aeropuerto.ciudad,
      telefono: aeropuerto.pais,
      coordx: aeropuerto.coordx,
      coordy:aeropuerto.coordy
    });
  }
  //Array de aeropuertos
  getAll(): Observable<AeropuertoModelo[]>{
    return this.http.get<AeropuertoModelo[]>(`${this.url}/aeropuertos`, {
      headers: new HttpHeaders({
        //Dentro del metodo bearer le paso para la autorización
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  update(aeropuerto: AeropuertoModelo): Observable<AeropuertoModelo> {
    return this.http.patch<AeropuertoModelo>(`${this.url}/aeropuertos/${aeropuerto.id}`, {
      nombre: aeropuerto.nombre,
      ciudad: aeropuerto.ciudad,
      telefono: aeropuerto.pais,
      coordx: aeropuerto.coordx,
      coordy:aeropuerto.coordy
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  delete(id: string): Observable<AeropuertoModelo[]>{
    return this.http.delete<AeropuertoModelo[]>(`${this.url}/aeropuertos/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<AeropuertoModelo>{
    return this.http.get<AeropuertoModelo>(`${this.url}/aeropuertos/${id}`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

}
