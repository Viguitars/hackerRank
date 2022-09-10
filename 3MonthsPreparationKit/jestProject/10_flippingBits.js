/*
Se le dará una lista de enteros sin signo de 32 bits. Invierta todos los bits (1 → 0 y 0 → 1) y devuelve el resultado como un entero sin signo.
Ejemplo
n = 9**10
9**10 = 1001**2. Estamos trabajando con 32 bits, por lo que:
00000000000000000000000000001001₂ = 910
11111111111111111111111111110110₂ = 429496728610
Devuelve 4294967286.

Descripción de la función

Complete la función flippingBits en el editor de abajo.
flippingBits tiene el siguiente parámetro (s):

- int n : un entero

Devuelve

- int : el resultado entero decimal sin signo

Formato de la entrada

La primera línea de la entrada contiene q ,el número de consultas.
Cada una de las siguientes q líneas contiene un entero, n ,para procesar.
*/
/*
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}*/

function flippingBits(n) {
    let nBinary = [];
    for (let i = n; i === 1 || i === 0; i = n / 2) {
        let newN = n % 2;
    }

}



module.exports = flippingBits;

const n = 2147483647;

console.log(flippingBits(2147483647));
//21474883648
console.log(flippingBits(1));
//4294967294
console.log(flippingBits(0));
//4294967295

/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}*/
