import { MaterialModule } from './../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ConfirmarBorradoComponent } from './components/confirmar-borrado/confirmar-borrado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';




@NgModule({
  declarations: [
    AgregarComponent, 
    BuscarComponent, 
    HeroeComponent, 
    HomeComponent, 
    ListadoComponent, 
    HeroeTarjetaComponent, 
    ImagenPipe, 
    ConfirmarBorradoComponent
  ],
  entryComponents: [      //Solucion al apartado de components para dialogos
    ConfirmarBorradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
