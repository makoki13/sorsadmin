import { Injectable } from '@angular/core';

import { Region } from '../../clases/region';

@Injectable()
export class RegionesService {
    private regiones: TipoRegion[];

    constructor() {
        console.log('Servicio listo para usarse');

        this.regiones = new Array();
        Region.todos(this.regiones);
    }

    getRegiones(): TipoRegion[] {
        return this.regiones;
    }
}

export interface TipoRegion {
    _id: number;
    nombre: string;
    ordinal: number;
}
