'use strict'

const mongoClient = require('mongodb').MongoClient

/* Todo. Url y nombre de la BD */
const url = ""
const dbName = ""

exports.buscarConsola = (req, res) => {
    const consola = req.params.consola

    /* Todo. Búsqueda de consola por id o nombre */
}

exports.listaConsolas = (req, res) => {
    const regex = req.params.regex

    /* Todo. Búsqueda de lista de consolar por regex */
}

exports.listaJuegosPorConsola = (req, res) => {
    const busquedaJuego = req.params.juego_busqueda

    /* Todo. Búsqueda de juego por id o nombre */
}

exports.listaJuegosPorRegex = (req, res) => {
    const regex = req.params.regex

    /* Todo. Búsqueda de lista de juegos por regex */
}

exports.informacionJuego = (req, res) => {
    const {idNombreJuego, idNombreConsola} = req.body

    /* Todo. Búsqueda de información de juego por id o nombre 
        de juego o id o nombre de consola */
}