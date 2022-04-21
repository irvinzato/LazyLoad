import { HeroesService } from './../../service/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

              //Lo inyecto para poder leer el URL
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router ) { }

  ngOnInit() {  //no pongo "res" por que solo me interesa el id, asi hago desestructuracion en el argumento "({"elemento"})"
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id)
    )).subscribe( res => {
      this.heroe = res;
      console.log("Tengo el heroe ", this.heroe);
  });
  }

  regresar() {
    this.router.navigate(['heroes/listado']);
  }

}
