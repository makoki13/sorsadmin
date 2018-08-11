import { BaseDeDatos } from './basededatos';

export class Region {
  private id: number;
  private nombre: string;
  private ordinal: number;

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
  public static crea(nombre: string, ordinal?: number) {
    const oBD: BaseDeDatos = new BaseDeDatos('regiones');
    const registro = {
      '_id': ordinal.toString(),
      'nombre': nombre,
      'ordinal': ordinal.toString()
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
        me.ordinal = element.doc.ordinal;
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
