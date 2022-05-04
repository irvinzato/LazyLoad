import { Heroe } from './../../interfaces/heroes.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmar-borrado',
  templateUrl: './confirmar-borrado.component.html',
  styleUrls: ['./confirmar-borrado.component.css']
})
export class ConfirmarBorradoComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarBorradoComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Heroe ) { }

  ngOnInit() {
    console.log(this.data);
  }

  borrar() {
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();
  }

}
