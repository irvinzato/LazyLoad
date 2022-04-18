import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 



@NgModule({
  //Todo lo que sea exportado de este modulo sera parte de "heroes.module" en este caso
exports: [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
  ]
})
export class MaterialModule { }
