import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'aplicacion-basica';

  album:string = 'Rattle That Lock';
  artista:string = 'David Gilmour';
  lanzamiento:string = 'Septiembre 2015';
}
