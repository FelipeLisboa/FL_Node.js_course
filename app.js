const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js'); //después de const o let y vienen llaves es una destructuración

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.factor, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.factor, argv.limite)
            .then(archivo => console.log(colors.green(`Archivo creado ${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}
//console.log(process.argv); recibe parametros ingresados por consola

//let parametro = argv[2];
//let factor = parametro.split('=')[1]; //split me separa un string por caracteres en este caso ['--base5' = '5']


//  console.log(module); objeto global disponible a lo largo de toda la aplicación