import { Estado } from './estado';
import { POI } from './poi';
import { Coordenadas } from './coordenadas';
import { Carretera } from './carretera';
import { BaseDeDatos } from './basededatos';

export class Segmento {
  private static oBD: BaseDeDatos = new BaseDeDatos('segmentos');

  carretera: Carretera;
  id: number;
  longitud: number;
  metros_subida: number;
  metros_bajada: number;
  maxima_altura: number;
  estado: Estado;
  fecha_ultima_revision_estado: string;
  en_obras: boolean;
  inicio_obras: string;
  fin_obras: string;
  inicio: Coordenadas;
  fin: Coordenadas;
  pois: Array<POI>;

  private static __guardaRegistro(idCarretera: string, id: string, inicio: Coordenadas, fin: Coordenadas,
    longitud: number, metros_subida: number, metros_bajada: number, maxima_altura: number, estado: number, fecha_ultima_revision: string,
    en_obras: boolean, inicio_obras: string, fin_obras: string, ) {
    const registro = {
      '_id': id,
      'idCarretera': idCarretera,
      'id': id,
      'inicio_x': inicio.getX(),
      'inicio_y': inicio.getY(),
      'fin_x': fin.getX(),
      'fin_y': fin.getY(),
      'longitud': longitud
    };
    Segmento.oBD.insert(registro);
  }

  public static getRegistro(id) {
    return Segmento.oBD.select(id.toString());
  }

  constructor(carretera: Carretera, inicio: Coordenadas, fin: Coordenadas) {
    this.carretera = carretera;
    this.id = 1;

    this.inicio = inicio;
    this.fin = fin;

    this.pois = new Array<POI>();
  }

  public get_inicio(): Coordenadas { return this.inicio; }
  public get_fin(): Coordenadas { return this.fin; }

  public setEstado( estado: Estado) { this.estado = estado; }
  public getEstado(): Estado { return this.estado; }

  public addPOI(poi: POI) {
    this.pois.push(poi);
  }

  public getPOIs(): Array<POI> { return this.pois; }

  public guarda() {
    Segmento.__guardaRegistro(this.carretera.id.toString(), this.id.toString(), this.get_inicio(), this.get_fin(),
      this.longitud, this.metros_subida, this.metros_bajada,
      this.maxima_altura, this.estado.id, this.fecha_ultima_revision_estado, this.en_obras, this.inicio_obras, this.fin_obras);
  }
}
