import { environment } from './../../../../environments/environment.prod';
import { HeroesService } from './../../service/heroes.service';
import { Heroe } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim())
    .subscribe(res => this.heroes = res);
  }

  opcionSeleccionada(event: any) {
    //console.log(event.option.value);
    if(!event.option.value){
      console.log("NO TIENE VALOR LA SELECCION");
      return;
    }


    const heroe: Heroe = event.option.value;    //Estoy extrayendo todo el objeto en mi variable
    console.log(heroe);
    this.termino = heroe.superhero;             //Sustituyo el valor que se muestra en mi input

    this.heroesService.getHeroePorId(heroe.id)
    .subscribe(res => this.heroeSeleccionado = res);
  }

}
