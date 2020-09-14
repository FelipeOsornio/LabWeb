import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsolasService} from "../../servicios/consola.service";

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})

export class JuegosconsolaComponent implements OnInit {
  consola: string;
  juegos: any = {};

  constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['shortcut']);
      this.consola = params['shortcut'];
      this.juegos = this.consolasService.obtieneListaJuegos(params['shortcut']);
    })
  }

  ngOnInit() {
  }

}
