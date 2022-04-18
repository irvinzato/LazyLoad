import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];
 

              //Aqui inyectamos el servicio que queremos utilizar
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    console.log("Estas inicializando el modulo de listado, tengo el siguiente servicio, RECUERDA PRENDER TU BACK END");
    this.heroesService.getHeroes().subscribe(res => {
      this.heroes = res;
      console.log("heroes tiene ", res);
      this.heroes.pop();
      this.heroes.pop();
    });
  }

  
}
