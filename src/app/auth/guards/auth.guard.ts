import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private authService: AuthService,
               private router: Router ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificarAutenticacion()
              .pipe( //en "estaAutenticado" tengo el valor booleano de lo que regresa mi servicio
                tap( estaAutenticado => {
                  console.log("estaAtutenticado en canActivate", estaAutenticado);
                  if( !estaAutenticado ){
                    this.router.navigate(['auth/login']);
                  }
                })
              )
      
      /* if(this.authService.auth.id){     //canActive sirve para cuando ya ingreso no guarde cache
        return true;
      }

    console.log("BLOQUEADO pór el authGuard - canActivate");
    return false; */
  } 


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificarAutenticacion()
              .pipe(
                tap( estaAutenticado => {
                  console.log("estaAtutenticado en canLoad", estaAutenticado);
                  if( !estaAutenticado ){
                    this.router.navigate(['auth/login']);
                  }
                })
              )
      
      /* if(this.authService.auth.id){     //Si esto existe dejalo pasar, si no sacalo
        return true;
      }

    console.log("BLOQUEADO pór el authGuard - canLoad");
    return false; */
  } 
}
