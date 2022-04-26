import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
              private authService: AuthService ) { }

  ngOnInit() {
  }

  login() {

    this.authService.login()
    .subscribe(res => {
      console.log("Respuesta del servicio login ", res);
      //Si se tiene una respuesta exitosa hago la navegacion
      if(res.id){
        this.router.navigate(['heroes']);
      } else {
        console.log("NO EXISTE EL ID CON EL QUE QUIERES LOGEAR");
      }
    });
    

  }

}
