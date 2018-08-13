import { Coordenadas } from './coordenadas';
import { Segmento } from './Segmento';
import { BaseDeDatos } from './basededatos';

interface NombreDeCarretera {
  cardinal: number;
  nombre: string;
}

export class Carretera  {
  private static oBD: BaseDeDatos = new BaseDeDatos('carreteras');
  id: number;
  ordinal: number;
  etiquetaRegion: string;
  nombres: Array<NombreDeCarretera>;
  segmentos: Array<Segmento>;

  private static pad(num, size) {const s = '000000000' + num; return s.substr(s.length - size); }

  private static __guardaRegistro(id: string, ordinal: string, etiqueta: string) {
    const registro = {
      '_id': id,
      'ordinal': ordinal,
      'etiqueta': etiqueta
    };
    Carretera.oBD.insert(registro);
  }

  public static crea(nombre: string, ordinal?: number) {
    const oBD: BaseDeDatos = new BaseDeDatos('carreteras');
    const registro = {
      '_id': Carretera.pad(ordinal, 5),
      'ordinal': Carretera.pad(ordinal, 5),
      'etiquetaRegion': '1',
    };
    oBD.insert(registro);
  }

  public static getRegistro(id) {
    return Carretera.oBD.select(id.toString());
  }

  constructor(inicio: Coordenadas, fin: Coordenadas) {
    this.id = 1;

    const segmentoInicial = new Segmento(this, inicio, fin);
    this.segmentos = new Array<Segmento>();
    this.segmentos.push(segmentoInicial);
  }

  public inicio(): Coordenadas { return this.segmentos[0].get_inicio(); }
  public fin(): Coordenadas { return this.segmentos[this.segmentos.length - 1].get_fin(); }
  public setEtiquetaRegion(etiqueta: string) { this.etiquetaRegion = etiqueta; }

  public listaSegmentos(): Array<Segmento> { return this.segmentos; }

  public guarda() {
    Carretera.__guardaRegistro(this.id.toString(), this.ordinal.toString(), this.etiquetaRegion);
  }
}
