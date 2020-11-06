const opts = {
    factor: {
        demand: true,
        alias: 'f'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar hasta el límite indicado', opts)
    .help()
    .argv;


module.exports = {
    argv
}