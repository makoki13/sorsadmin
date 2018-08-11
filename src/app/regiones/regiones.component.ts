import { Region } from './../../clases/region';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  nombre = 'REGIONES';

  a: Region | undefined;

  regiones: Region[] = null;

  constructor() {
    this.regiones = new Array();
    Region.todos(this.regiones);
   }

  ngOnInit() {

  }
}
