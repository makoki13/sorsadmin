import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { RegionesService } from './servicios/regiones.service';

// Componentes
import { AppComponent } from './app.component';
import { RegionesComponent } from './body/regiones/regiones.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './body/about/about.component';
import { CarreterasComponent } from './body/carreteras/carreteras.component';
import { RegionComponent } from './body/regiones/region.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionesComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    CarreterasComponent,
    RegionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
  ],
  providers: [
    RegionesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
