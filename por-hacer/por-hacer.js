const fs = require('fs');

let listadoTareasPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareasPorHacer);
    fs.writeFile('db/data.json', data, (error) => {
        if (error) throw new Error(" No se pudo grabar", error);
    });
};

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoTareasPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};


const getListado = () => {

    cargarDB();
    return listadoTareasPorHacer;
};


const cargarDB = () => {

    try {

        listadoTareasPorHacer = require('../db/data.json');

    } catch (error) {
        listadoTareasPorHacer = [];
    }
};


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {

    cargarDB();
    let listaNueva = listadoTareasPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (listadoTareasPorHacer.length === listaNueva.length) {
        return false;
    } else {
        listadoTareasPorHacer = listaNueva;
        guardarDB();
        return true;
    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};