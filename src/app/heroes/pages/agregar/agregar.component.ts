import { ConfirmarBorradoComponent } from '../../components/confirmar-borrado/confirmar-borrado.component';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../service/heroes.service';
import { Heroe, Publisher } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


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
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog ) { }

  ngOnInit() {
    /* Para leer los parametros de la ruta y ver su respuesta
      this.activateRoute.params.subscribe(({id}) => {
      console.log("Respuesta del params ", id);
    }); */
   
    if(!this.router.url.includes('editar')){  //Para saber cuando entra el usuario a editar o agregar
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
        this.mostrarSnackBar('Actualización exitosa');
        console.log("Respuesta del PUT ", res);
        
      });
    } else {              //VOY AGREGAR UN NUEVO REGISTRO SI NO EXISTE UN ID

      this.heroeService.agregarHeroe(this.heroe).subscribe(res => {
        
        this.router.navigate(['heroes/editar', res.id]);    //res.id tiene mi heroe.id
        this.mostrarSnackBar('Registro creado !');
        console.log("Respuesta del servicio POST ", res);
    });
    }
    console.log(this.heroe.id);
  } 

  borrar() {
    console.log("Entrando a metodo de borrar");

    const resDialog = this.dialog.open(ConfirmarBorradoComponent, {
      width: '400px',
      data: this.heroe
    });

    resDialog.afterClosed().subscribe( res => {
      console.log("Respuesta al cerrar el dialogo ", res);
      if(res) {
        this.heroeService.borrarHeroe(this.heroe.id)
        .subscribe(res => {
          console.log("Se mando a llamar el servicio DELETE ", res);
          this.router.navigate(['heroes']);
        });
      }
    });
    
  }

  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 4000
    });
  }

}
