import { MaterialModule } from './../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    AgregarComponent, 
    BuscarComponent, 
    HeroeComponent, 
    HomeComponent, 
    ListadoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
