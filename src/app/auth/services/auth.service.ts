import { Auth } from './../interfaces/auth.interface';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth;  //Esta informacion esta en memoria, al recargar debemos mantenerla de alguna manera

  get auth(): Auth {      //Como es un servicio que esta en "root", lo puedo usar donde quiera
    return { ...this._auth }
  }

  constructor( private http: HttpClient ) { }

                          //of(false) se usa para regresar un booleano como Observable, o solo añadir "|" boolean y regresarlo normal
  verificarAutenticacion(): Observable<boolean> {
    if( !localStorage.getItem('token') ) {  //Si no existe token en nuestro localStorage
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(  //map transforma el Auth o lo que sea a lo que es
              map( res => {   //Si tiene valor regresa un true
                console.log("Respuesta del map ",res);
                this._auth = res; //Para que cada que haga "refresh" siga con los datos
                return true;
              })
            );
  }

  login() {             //Auth es nuestra interface utilizada, donde tenemos los datos
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(  //Este tap se hace antes del "subscribe" en el modulo de login
              tap( res => {
                console.log("RESPUESTA DEL TAP EN SERVICIO ", res);
                this._auth = res;
              }),
              tap( res => localStorage.setItem('token', res.id) )  //Para almacenar en nuestro localStorage el id y cuando se recargue la aplicacion no nos quite informacion
            );
  }

}
