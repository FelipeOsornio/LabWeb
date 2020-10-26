'use strict';

import * as controller from './controller.js'

const routes = (app) => {

    /* Listado de consolas */
    app.route('/consolas').get(controller.listaConsolas)

}

export default routes