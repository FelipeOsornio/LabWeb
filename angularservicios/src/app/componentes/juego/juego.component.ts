import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsolasService} from "../../servicios/consola.service";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juego: any = {}

  constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['consola'], params['id']);
      this.juego = this.consolasService.obtieneJuego(params['consola'], params['id']);
    });
  }

  ngOnInit() {
  }

}
