'use strict';
module.exports = function (app) {
    let controller = require('./controller')

    app.route('/consola/:consola').get(controller.buscarConsola)

    app.route('/consola/lista/:regex').get(controller.listaConsolas)

    app.route('/juego/lista/:juego_busqueda').get(controller.listaJuegosPorConsola)

    app.route('/juego/buscar/:buscar_juegos').get(controller.buscarJuegos)

    app.route('/consola/:q_consola/juego/:q_juego').get(controller.buscarJuegoConsola)

    app.route('/blog/entradas/').get(controller.buscarEntradas)

}
