'use strict';
module.exports = function (app) {
    let studentCollection = require('./studentCollectionController');
    app.route('/students').get(studentCollection.obtener_estudiantes).post(studentCollection.agregar_estudiante);
    app.route('/students/:matricula').get(studentCollection.obtener_estudiante);
    app.route('/students/busqueda/:palabraClave').get(studentCollection.buscar_palabra_clave);
    app.route('/students/materias/:matricula').get(studentCollection.obtener_materias_estudiante);
    app.route('/students/materiasag/:palabraClave').get(studentCollection.obtener_materias_aggregate);
};

