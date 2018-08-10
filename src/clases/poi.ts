import { Coordenadas } from './coordenadas';
import { Segmento } from './Segmento';

export interface TipoPOI {
  id: number;
  nombre: string;
}

interface ImagenPOI {
  id: number;
  nombre: string;
}

export class POI {
  private id: number;
  private coordenadas: Coordenadas;
  private nombre: string;
  private tipo: TipoPOI;
  private imagenes: Array<ImagenPOI>;

  constructor(coordenadas: Coordenadas, tipo: TipoPOI) {
    this.id = 1;
    this.coordenadas = coordenadas;
    this.tipo = tipo;
  }

  getCoordenadas(): Coordenadas { return this.coordenadas; }
  getNombre(): string { return this.tipo.nombre; }
}
