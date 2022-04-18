import { Heroe } from './../interfaces/heroes.interface';
import { HttpClient } from '@angular/common/http';  //Para poder utilizar el modulo importado en "app.modulo.ts"
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

              //": Observable<Heroe[]>" Esta parte no es necesaria pero sirve para ser mucho mas especificos
  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')  //Esta Url la podemos verificar en POSTMAN
  }

}
