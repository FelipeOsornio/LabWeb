'use strict'

const routes = (app) => {
    const controller = require('./controller')

    app.route('/consola/:consola').get(controller.buscarConsola)

    app.route('/consola/lista/:regex').get(controller.listaConsolas)

    app.route('/juegos/lista/:juego_busqueda').get(controller.listaJuegosPorConsola)

    app.route('/juego/informacion').post(controller.informacionJuego)
}

export default routes