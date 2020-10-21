'use strict';

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'videojuegos2';

exports.buscarConsola = function (req, res) {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, mdbclient) {
        if (err) {
            throw err;
        }
        var id = req.params.consola;
        const db = mdbclient.db(dbName);//Solamente obtenemos el nombre y la matricula
        db.collection("plataforma").find({nombre: id}).project({nombre: 1, imagen: 1, ficha:1}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};


exports.listaConsolas = function (req, res) {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var palabraClave = req.params.regex;
        db.collection("plataforma").find({nombre: new RegExp(palabraClave, 'i')}).project({nombre: 1, imagen: 1, ficha:1}).toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                console.log("Consulta ejecutada...");
                mdbclient.close();
                res.end(JSON.stringify(result));
            }
        );
    });
};

exports.listaJuegosPorConsola = function (req, res) {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var plataforma = req.params.juego_busqueda;
        db.collection("plataforma").findOne({nombre: plataforma}, {
            projection: {
                _id: 0,
                "juegos.nombre": 1,
                "juegos.imagen": 1
            }
        }, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("Consulta ejecutada...");
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.buscarJuegos = function (req, res) {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var col = db.collection('plataforma');
        var palabraClave = req.params.buscar_juegos;
        col.aggregate([{$unwind: '$juegos'}, {$match: {'juegos.nombre': new RegExp(palabraClave, 'i')}}, {
            $project: {
                _id: 0,
                nombre: '$juegos.nombre',
                imagen: '$juegos.imagen'
            }
        }]).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
}
exports.buscarJuegoConsola = function (req, res) {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var col = db.collection('plataforma');
        var juego = req.params.q_juego;
        var consola = req.params.q_consola
        col.aggregate([{$unwind: '$juegos'}, {$match: {'juegos.nombre': juego, nombre: consola}}, {
            $project: {
                _id: 0,
                nombre: '$juegos.nombre',
                imagen: '$juegos.imagen',
                developer: '$juegos.developer',
                lanzamiento: '$juegos.fecha_lanzamiento',
                carousel: "$juegos.carousel",
                ligas: "$juegos.ligas"
            }
        }]).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
}
exports.buscarEntradas = function (req, res) {
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, mdbclient) {
            if (err) {
                throw err;
            }
            const db = mdbclient.db(dbName);
            db.collection("blog").find({}).project({entrada: 1, _id: 0}).toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                console.log("Resultados Obtenidos: " + result.length);
                mdbclient.close();
                res.end(JSON.stringify(result));
            });
        });
};