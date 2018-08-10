// import PouchDB from 'pouchdb';
import * as PouchDB from 'pouchdb/dist/pouchdb';
// import * as PouchDBUpsert from 'pouchdb-upsert/dist/pouchdb.upsert';

export class BaseDeDatos {
  private db;

  constructor(tabla) {
    this.db = new PouchDB(tabla);
  }

  select(clave: string): Promise<any> {
    return this.db.get(clave);
  }

  insert(datos: Object): number {
    this.db.put(datos);
    return 0;
  }

  update(sql: string): number {
    return 0;
  }

  delete(sql: string): number {
    return 0;
  }

}



