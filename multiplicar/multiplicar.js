// Required
const fs = require('fs');
var colors = require('colors');

let data = ''

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log('//======================'.green);
        console.log(`// Tabla de ${base}  `.green);
        console.log('//======================'.green);

        if (!Number(base)) {
            reject('No es un base valida');
            return;
        }

        if (!Number(limite)) {
            reject('No es un limite valido');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);
    })


}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es una base valida');
            return;
        }

        if (!Number(limite)) {
            reject('No es un limite valido');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla -${ base }.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}