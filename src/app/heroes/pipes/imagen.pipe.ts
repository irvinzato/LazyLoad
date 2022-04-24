import { Heroe } from './../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';
import { publishReplay } from 'rxjs/operators';

@Pipe({
  name: 'imagen'
  // pure: false  //Con pure en false, el pipe se ejecuta cada que hay algun cambio, puede funcionar para actualizar la imagen pero consume mas recursos
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if(!heroe.id && !heroe.alt_img){
      return `assets/no-image.png`;
    } else if(heroe.alt_img) {
      return heroe.alt_img;
    }
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
