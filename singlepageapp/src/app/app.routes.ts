import {RouterModule, Routes} from '@angular/router';

// Se tienen que importar todas las rutas que vamos a utilizar
import {PrincipalComponent} from './componentes/principal/principal.component';
import {AcercadeComponent} from './componentes/acercade/acercade.component';
import {ConsolasComponent} from './componentes/consolas/consolas.component';
import {Ps4Component} from './componentes/ps4/ps4.component';
import {NswitchComponent} from './componentes/nswitch/nswitch.component';

const APP_ROUTES: Routes = [

  // Se inicializan todas las rutas que vamos a utilizar.
  {path: 'principal', component: PrincipalComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'consolas', component: ConsolasComponent},
  {path: 'consolas/nswitch', component: NswitchComponent},
  {path: 'consolas/ps4', component: Ps4Component},
  {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];

// Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
// y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
