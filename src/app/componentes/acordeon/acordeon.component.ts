import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent  {
  albumes = [
    {
      titulo: 'Smile',
      artista: 'Charles Ans',
      fecha: 'Octubre 2017'
    },
    {
      titulo: 'California',
      artista: 'Blink 182',
      fecha: 'Abril 2015'
    },
    {
      titulo: 'Entre puentes',
      artista: 'Camiches',
      fecha: 'Noviembre 2016'
    }
  ]
}
