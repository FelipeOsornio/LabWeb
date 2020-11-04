import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas: Consola[] = [];

  constructor(private consolasService: ConsolasService) { }

  async ngOnInit() {
    try {
      this.consolas = await this.consolasService.inicializarConsolas();
      console.log(this.consolas);
    } catch (e) {
      console.log(e)
    }
  }

}
