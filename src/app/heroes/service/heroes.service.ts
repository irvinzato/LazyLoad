//OJO ! El import de environment debe ser el de desarrollo A MENOS que ya lo usemos en produccion ".prod"
import { environment } from './../../../environments/environment';
import { Heroe } from './../interfaces/heroes.interface';
import { HttpClient } from '@angular/common/http';  //Para poder utilizar el modulo importado en "app.modulo.ts"
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

              //": Observable<Heroe[]>" Esta parte no es necesaria pero sirve para ser mucho mas especificos
  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)  //Esta Url la podemos verificar en POSTMAN
  }

  getHeroePorId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${ id }`)
  }

}
