/*
Dada una matriz de enteros, en la que todos los elementos menos uno aparecen dos veces, encuentra el único elemento.

Ejemplo

a=[1,2,3,4,3,2,1]
El elemento único es el 4.

Descripción de la función

Completa la función lonelyinteger en el editor de abajo.
lonelyinteger tiene los siguientes parámetros:
  int a[n]: un array de enteros

Devuelve

-int: el elemento que aparece una sola vez

Formato de entrada

La primera línea contiene un único entero, n, el número de enteros de la matriz.
La segunda línea contiene n enteros separados por espacios que describen los valores de a.
*/
/*
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/
function lonelyinteger(a) {
    let aClone = a.slice();
    let aNew = [];
    for (let i = 0; i < a.length; i++) {
        for (let i = 0; i < aClone.length; i++) {
            for (let j = i + 1; j < aClone.length; j++) {
                if (aClone[i] == aClone[j]) {
                    aNew = aClone.splice(j, a.length);
                    console.log(aNew);
                    console.log(aClone.splice(i));
                }

            }

        }
    }
    console.log(aNew);
}
a = [1, 2, 3, 4, 3, 2, 1];

var myArray = [{ id: 1, name: 'Morty' }, { id: 2, name: 'Rick' }, { id: 3, name: 'Anna' }];
var newArray = myArray.filter((item) => item.id !== 1);
console.log(newArray);


console.log(a.splice(1, 1));
console.log(a.splice(6, a.length));
lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
//4
/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}

*/