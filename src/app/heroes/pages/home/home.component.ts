import { AuthService } from './../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get auth() {    //Para obtener mi auth del servicio, ahora puedo usarlo en mi HTML
    return this.authService.auth;
  }

  constructor( private router: Router,
               private authService: AuthService ) { }

  ngOnInit() {
  }

  logout() {
    console.log("Diste en logout, limpiare el localStorage ", localStorage);
    localStorage.removeItem('token');   //Para limpiar variable de localStorage
    this.router.navigate(['auth']);
  }

}
