'use strict';

import * as controller from './controller.js'

const routes = (app) => {

    /* Listado de consolas */
    app.route('/consolas').get(controller.listaConsolas)

    /* Obtiene consola por id */
    app.route('/consolas/:id').get(controller.obtenerConsolar)

    /* Obtiene juegos de una consola por id */
    app.route('/consolas/:idconsola/juegos').get(controller.obtenerJuegosPorConsola)

    /* Obtiene juego de una consola por id */
    app.route('/consolas/:idconsola/juegos/:idjuego').get(controller.obtenerJuegoPorConsola)
    
}

export default routes