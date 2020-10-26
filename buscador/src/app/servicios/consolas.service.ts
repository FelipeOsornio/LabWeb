import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable()
export class ConsolasService {

  private consolas: Consola[];

  async inicializarConsolas() {
    try {
      const response = await Axios.get('http://localhost:8080/consolas');

      const formatJuego = (juego: any): {
        imagen: string;
        nombre: string;
        developer: string;
        lanzamiento: string;
      } => {
        return {
          imagen: juego.imagen,
          nombre: juego.nombre,
          developer: juego.developer,
          lanzamiento: new Date(juego.fecha_lanzamiento).toLocaleDateString()
        }
      };

      const formatConsola = (consola: any): {
        nombre: string;
        descripcion: string;
        caracteristicas: string;
        imagen: string;
        juegos: any
      } => {
        return {
          nombre: consola.nombre,
          descripcion: consola.ficha,
          caracteristicas: consola.ficha,
          imagen: consola.imagen,
          juegos: consola.juegos.map((juego: any) => formatJuego(juego))
        }
      }

      this.consolas = response.data.map((item: any) => formatConsola(item));
    } catch (e) {
      console.log(e);
      this.consolas = [];
    }
  }

  constructor() {
    this.inicializarConsolas();
  }

  async obtieneConsolas() {
    return this.consolas;
  }

  obtieneConsola(id: string) {
    return this.consolas[id];
  }

  obtieneJuegosConsola(idConsola: string) {
    return this.consolas[idConsola].juegos;
  }

  obtieneJuego(idConsola: string, idJuego: string) {
    return this.consolas[idConsola].juegos[idJuego];
  }

  buscarConsolas(palabras: string): Consola[] {
    let resultadoConsolas: Consola[] = [];
    palabras = palabras.toLowerCase();

    for (let consola of this.consolas) {
      let nombreConsola = consola.nombre.toLowerCase();
      if (nombreConsola.indexOf(palabras) >= 0) {
        resultadoConsolas.push(consola);
      }
    }

    return resultadoConsolas;
  }

  buscarJuegos(palabras: string): Juego[] {
    let resultadoJuegos: Juego[] = [];

    this.consolas.forEach((consola) => {
      consola.juegos.forEach((juego) => {
        let nombreJuego = juego.nombre.toLowerCase();
        if (nombreJuego.indexOf(palabras) >= 0) {
          resultadoJuegos.push(juego);
        }
      })
    })

    return resultadoJuegos;
  }

}

export interface Consola {
  nombre: string;
  descripcion: string;
  caracteristicas: string;
  imagen: string;
  juegos: any;
}

export interface Juego {
  imagen: string;
  nombre: string;
  developer: string;
  lanzamiento: string;
}
