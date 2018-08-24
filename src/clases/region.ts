import { BaseDeDatos } from './basededatos';

export class Region {
  private id: number;
  private nombre: string;
  private ordinal: number;
  private $key: string;

  /** ESTATICAS PRIVADAS */
  private static get(id: number): Promise<Object> {
    const oBD: BaseDeDatos = new BaseDeDatos('regiones');
    return oBD.select(id.toString());
  }

  /** ESTATICAS PUBLICAS */
  /**
   *
   * @param nombre
   * @param ordinal
   *
   * Pendiente determinar el siguiente id. Determinar el ordinal si no es dado.
   */

  private static pad(num, size) {const s = '000000000' + num; return s.substr(s.length - size); }

  public static crea(nombre: string, ordinal?: number) {
    const oBD: BaseDeDatos = new BaseDeDatos('regiones');
    const registro = {
      '_id': Region.pad(ordinal, 5),
      'nombre': nombre,
      'ordinal': Region.pad(ordinal, 5),
    };
    oBD.insert(registro);
  }

  public static todos(vector) {
    const oBD: BaseDeDatos = new BaseDeDatos('regiones');
    oBD.select_all().then( function (o: any) {
      o.rows.forEach(element => {
        const me = new Region();
        me.id = element.doc._id;
        me.nombre = element.doc.nombre;
        me.ordinal = parseInt(element.doc.ordinal, 10);
        vector.push(me);
      });
    });
  }

  constructor() {

  }

  public get_id(): number { return this.id; }
  public get_nombre(): string { return this.nombre; }
  public get_ordinal(): number { return this.ordinal; }
}
