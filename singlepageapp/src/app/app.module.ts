import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EncabezadoComponent} from './componentes/comunes/encabezado/encabezado.component';
import {PrincipalComponent} from './componentes/principal/principal.component';
import {AcercadeComponent} from './componentes/acercade/acercade.component';
import {ConsolasComponent} from './componentes/consolas/consolas.component';
import { Ps4Component } from './componentes/ps4/ps4.component';
import { NswitchComponent } from './componentes/nswitch/nswitch.component';
import {APP_ROUTING} from './app.routes';
import { JuegosSwitchComponent } from './componentes/juegos-switch/juegos-switch.component';
import { JuegosPs4Component } from './componentes/juegos-ps4/juegos-ps4.component';
import { SsbComponent } from './componentes/ssb/ssb.component';
import { SsComponent } from './componentes/ss/ss.component';
import { ACrossingComponent } from './componentes/a-crossing/a-crossing.component';
import { BloodbourneComponent } from './componentes/bloodbourne/bloodbourne.component';
import { FifaComponent } from './componentes/fifa/fifa.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    AcercadeComponent,
    ConsolasComponent,
    Ps4Component,
    NswitchComponent,
    JuegosSwitchComponent,
    JuegosPs4Component,
    SsbComponent,
    SsComponent,
    ACrossingComponent,
    BloodbourneComponent,
    FifaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
