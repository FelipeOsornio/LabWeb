import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu.component';
import { AcordeonComponent } from './componentes/acordeon/acordeon.component';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcordeonComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
