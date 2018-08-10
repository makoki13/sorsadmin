import { TipoPOI } from './../clases/poi';
import { Carretera } from './../clases/carretera';
import { Coordenadas } from './../clases/coordenadas';
import { Component } from '@angular/core';
import { Segmento } from '../clases/segmento';
import { POI } from '../clases/poi';
import { Estado } from '../clases/estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorsadmin';

  constructor() {
    let miCarretera: Carretera ;

    Carretera.getRegistro('1').then( function(o) {
        const inicio = new Coordenadas(0, 1, 2);
        const fin = new Coordenadas(10, 11, 12);
        miCarretera = new Carretera(inicio, fin);
        console.log('etiqueta interior', o.etiqueta);
        miCarretera.setEtiquetaRegion(o.etiqueta);
        console.log('En main', miCarretera);
    });


    /*
    const inicioCarretera = new Coordenadas(10, 10, 10);
    const finCarretera = new Coordenadas(100, 100);

    const miCarretera = new Carretera(inicioCarretera, finCarretera);
    miCarretera.setEtiquetaRegion('Italia');
    miCarretera.guarda();
    */


    /*
    const coordenadasInicio = miCarretera.inicio();
    const coordenadasFin = miCarretera.fin();

    const segmentos = miCarretera.listaSegmentos();

    const coordenadasPOI = new Coordenadas(50, 50);
    const tipoPOI: TipoPOI = { id: 1, nombre: 'POI Nùmero 1'};
    const miPOI = new POI(coordenadasPOI, tipoPOI);

    segmentos[0].addPOI(miPOI);
    const pois = segmentos[0].getPOIs();

    pois.forEach( function (e) {
      const coordenadas = e.getCoordenadas();
      const nombre = e.getNombre();

      console.log('Posicion', coordenadas.getX(), coordenadas.getY());
      console.log('Nombre POI', nombre);
    });

    */

    // const estadoActual = new Estado();
    // estadoActual.loadEstado(1);

    /*
    segmentos.forEach( function (s) {
      s.setEstado(estadoActual);
      console.log('estado', s.getEstado().getNombre());

      const inicio = s.get_inicio();
      const fin = s.get_fin();

      console.log('inicio X:', inicio.getX());
      console.log('inicio y:', inicio.getY());
      console.log('inicio z:', inicio.getZ());

      console.log('inicio X:', fin.getX());
      console.log('inicio y:', fin.getY());
      console.log('inicio z:', fin.getZ());

    });
    */

  }
}
