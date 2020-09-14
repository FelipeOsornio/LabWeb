import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConsolasService, Consola} from '../../servicios/consola.service';

@Component({
    selector: 'app-infoconsola',
    templateUrl: './infoconsola.component.html',
    styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {
    consola: any = {};

    constructor(private activatedRoute: ActivatedRoute, private consolasService: ConsolasService) {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.consola = this.consolasService.obtieneConsola(params['id']);
        })
    }

    ngOnInit() {
    }
}
