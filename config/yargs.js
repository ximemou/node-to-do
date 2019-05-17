const descripcion = {
    demand: true,
    alias: 'd',
    desc: ' Descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: ' Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
};