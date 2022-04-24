import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../service/heroes.service';
import { Heroe, Publisher } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publisher = [ {
    id: 'DC Comics',
    desc: 'DC - Comics'
    },{
    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: ''
  }

  constructor(private heroeService: HeroesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    /* Para leer los parametros de la ruta y ver su respuesta
      this.activateRoute.params.subscribe(({id}) => {
      console.log("Respuesta del params ", id);
    }); */
   
    if(!this.router.url.includes('editar')){
      return ;
    }
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroeService.getHeroePorId(id))
    )
    .subscribe( res => {
      this.heroe = res;
    });
  
  }

  guardar() {
    if(this.heroe.superhero.trim().length == 0){
      console.log("Minima validacion");
      return ;
    }

    if( this.heroe.id ) {  //VOY A EDITAR SI EXISTE UN ID

      this.heroeService.actualizarHeroe(this.heroe).subscribe(res => {
        //this.router.navigate(['heroes']);
        console.log("Respuesta del PUT ", res);
        
      });
    } else {              //VOY AGREGAR UN NUEVO REGISTRO SI NO EXISTE UN ID

      this.heroeService.agregarHeroe(this.heroe).subscribe(res => {
        
        this.router.navigate(['heroes/editar', res.id]);    //res.id tiene mi heroe.id
        
        console.log("Respuesta del servicio POST ", res);
    });
    }
    console.log(this.heroe.id);
  } 

  borrar() {
    this.heroeService.borrarHeroe(this.heroe.id)
    .subscribe(res => {
      console.log("Se mando a llamar el servicio DELETE ", res);
      this.router.navigate(['heroes']);
    });
  }

}
