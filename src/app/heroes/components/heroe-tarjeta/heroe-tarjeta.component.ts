import { Heroe } from './../../interfaces/heroes.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit() {
  }

}
