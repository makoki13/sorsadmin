import { Component, OnInit } from '@angular/core';

import { RegionesService, TipoRegion } from '../../servicios/regiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {
  public regiones: TipoRegion[] = [];

  constructor(
    private _regionesService: RegionesService,
    private _router: Router) {

   }

  ngOnInit() {
    console.log('on ngOnInit()');
    this.regiones = this._regionesService.getRegiones();
  }

  verCarretera(carretera: number) {
    console.log('carretera:', carretera);
    this._router.navigate(['/carreteras', carretera]);
  }
}
