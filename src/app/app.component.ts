import { Component } from '@angular/core';
import { Region } from '../clases/region'; // Quitar al terminar test
import { Carretera } from '../clases/carretera'; // Quitar al terminar test


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sorsadmin';

  constructor() {
    /*
    Region.crea('Italia', 1);
    Region.crea('Austria', 2);
    Region.crea('Alemania', 3);
    Region.crea('Chequia', 4);
    Region.crea('Polonia', 5);
    Region.crea('Lituania', 6);
    Region.crea('Letonia', 7);
    Region.crea('Estonia', 8);
    Region.crea('Finlandia', 9);
    Region.crea('Noruega', 10);

    Carretera.crea('A1', 1);
    Carretera.crea('A2', 2);
    Carretera.crea('B1', 3);
    Carretera.crea('A1', 4);
    Carretera.crea('B2', 5);
    Carretera.crea('B3', 6);
    Carretera.crea('B4', 7);
    */
  }
}
