import {Injectable} from '@angular/core';

@Injectable()
export class ConsolasService {
    private consolas: Consola[] = [
        {
            shortcut: "pc",
            nombre: "PC Master Race",
            descripcion: "Juegos para PC",
            caracteristicas: "Texto y listado de las características de la consolaPC Master Race...",
            imagen: "assets/pcmr.jpg"
        },
        {
            shortcut: "ps4",
            nombre: "Playstation 4",
            descripcion: "Juegos para PS4",
            caracteristicas: "Texto y listado de las características de la consolaPlaystation 4...",
            imagen: "assets/ps4.jpg"
        },
        {
            shortcut: "xbox",
            nombre: "Xbox One",
            descripcion: "Juegos para Xbox One",
            caracteristicas: "Texto y listado de las características de la consolaXbox One...",
            imagen: "assets/xboxone.jpg"
        },
        {
            shortcut: "switch",
            nombre: "Nintendo Switch",
            descripcion: "Juegos para Nintendo Switch",
            caracteristicas: "Texto y listado de las características de la consolaNintendo Switch...",
            imagen: "assets/nswitch.jpg"
        }];

    private juegosConsola: JuegoConsola[] = [
        {
            consola: "pc",
            juegos: [
                {
                    nombre: "Dota",
                    developer: "Valve Corporation",
                    lanzamiento: "2003",
                    imagen: "assets/dota.jpg"
                },
                {
                    nombre: "Civilization",
                    developer: "Sid Meier",
                    lanzamiento: "1991",
                    imagen: "assets/civilization.jpg"
                },
                {
                    nombre: "Into the breach",
                    developer: "Subset Games",
                    lanzamiento: "2018",
                    imagen: "assets/intoTheBreach.jpg"
                }
            ]
        },
        {
            consola: "ps4",
            juegos: [
                {
                    nombre: "Spiderman",
                    developer: "Insomniac Games",
                    lanzamiento: "2018",
                    imagen: "assets/spiderman.jpg"
                },
                {
                    nombre: "God of War",
                    developer: "Ready at Dawn Studios",
                    lanzamiento: "2018",
                    imagen: "assets/godOfWar.jpg"
                },
                {
                    nombre: "Horizon: Zero Dawn",
                    developer: "Guerrilla Games",
                    lanzamiento: "2017",
                    imagen: "assets/horizon.jpg"
                }
            ]
        },
        {
            consola: "xbox",
            juegos: [
                {
                    nombre: "Red Dead Redemption",
                    developer: "Rockstar Games",
                    lanzamiento: "2010",
                    imagen: "assets/redDeadRedemption.jpg"
                },
                {
                    nombre: "Grand Theft Auto V",
                    developer: "Rockstar Games",
                    lanzamiento: "2013",
                    imagen: "assets/grandTheftAuto.jpg"
                },
                {
                    nombre: "Halo Wars 2",
                    developer: "Bungie Studios",
                    lanzamiento: "2017",
                    imagen: "assets/haloWars.jpg"
                }
            ]
        },
        {
            consola: "switch",
            juegos: [
                {
                    nombre: "Hollow Knight",
                    developer: "Team Cherry",
                    lanzamiento: "2018",
                    imagen: "assets/hollowKnight.jpg"
                },
                {
                    nombre: "Super Marios Odyssey",
                    developer: "Nintendo",
                    lanzamiento: "2017",
                    imagen: "assets/odyssey.jpg"
                },
                {
                    nombre: "Super Smash Bros.",
                    developer: "Nintendo",
                    lanzamiento: "2018",
                    imagen: "assets/superSmashBros.jpg"
                }
            ]
        }
    ];

    constructor() {
        console.log("ConsolasService Creado...");
    }

    obtieneConsolas(): Consola[] {
        return this.consolas;
    }

    obtieneConsola(id: string): Consola {
        return this.consolas[id];
    }

    obtieneListaJuegos(consola: string): Juego[] {
        return this.juegosConsola.filter((juegos) => juegos.consola === consola)[0].juegos;
    }

    obtieneJuego(consola: string, id: string): Juego {
        const juegos = this.obtieneListaJuegos(consola);
        return juegos[id];
    }
}

export interface Consola {
    shortcut: string
    nombre: string;
    descripcion: string;
    caracteristicas: string;
    imagen: string;
}

export interface Juego {
    nombre: string;
    developer: string;
    lanzamiento: string;
    imagen;
}

export interface JuegoConsola {
    consola: string;
    juegos: Juego[];
}
