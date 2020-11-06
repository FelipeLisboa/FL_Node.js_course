//  requireds
const fs = require('fs'); //filesystem para poder grabar datos en un archivo de texto
//  const fs = require('express'); libreria que no es propia de node, es un paquete que se instala
//  const fs = require(' ./"nombre" '); atchivos propios de nosotros dentro del equipo
const colors = require('colors');

let listarTabla = (factor, limite = 10) => {
    console.log('======================='.green);
    console.log(`======Tabla de ${factor}=======`.yellow);
    console.log('======================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${factor} * ${i} = ${factor * i}\n`);
    }
}

let crearArchivo = (factor, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = ''; //todo el registro del for guardado en data

        if (!Number(factor)) {
            reject(`El valor introducido ${factor} no es válido`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${factor} * ${i} = ${factor * i}\n`; //factor * i = X almacenado en data 'i' veces
        }

        //se llama fs writefile
        //se da el nombre del archivo txt que queremos
        //se da lo que queremos guardar, en este caso data
        //err para controlar los errores del callback
        fs.writeFile(`tablas/Tabla-del-${factor}-con-límite-${limite}.txt`, data, (err) => {
            if (err) reject(err); //error en el callback
            else
                resolve(colors.green(`Tabla-del-${factor}-con-límite-${limite}.txt`))

        });
    });
};

//agregar elementos que quiero usar de forma global
module.exports = {
    crearArchivo, //así el método crear archivo lo puedo usar en toda la aplicación
    listarTabla
}