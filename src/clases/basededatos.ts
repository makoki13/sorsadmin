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

  select_all(): Promise<any> {
    return this.db.allDocs({include_docs: true});
  }

  select_sync(clave: string): Object {
    let miObjeto = new Object;

    miObjeto = null;

    this.db.get(clave, function (error, doc) {
      if (error) {
        console.log('error BaseDeDatos::select_sync', error);
        return error;
      } else {
        miObjeto = doc;
        console.log('datos dentro BaseDeDatos::select_sync', doc);
      }
    });
    return miObjeto;
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



