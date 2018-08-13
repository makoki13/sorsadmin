import { RouterModule, Routes} from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './body/about/about.component';
import { RegionesComponent } from './body/regiones/regiones.component';
import { CarreterasComponent } from './body/carreteras/carreteras.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent},
    { path: 'about', component: AboutComponent},
    { path: 'regiones', component: RegionesComponent},
    { path: 'carreteras/:region', component: CarreterasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
