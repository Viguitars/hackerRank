/*
Dada una matriz de enteros, calcular los cocientes de sus elementos que son positivos, negativos y cero. Imprima el valor decimal de cada fracción en una nueva línea con 6 lugares después del decimal.
Nota: Este reto introduce problemas de precisión. Los casos de prueba están escalados a seis decimales, aunque se aceptan respuestas con un error absoluto de hasta 10-4.

Ejemplo

arr = [ 1 , 1 , 0 , 1 , -1 ]

Hay n= 5 elementos, dos positivos, dos negativos y un cero. Sus relaciones son 2/5 = 0,400000 , 2/5 = 0,400000 y = 1/5 = 0,200000. Los resultados se imprimen como:
  0.400000
  0.400000
  0.200000

Descripción de la función

Complete la función plusMinus en el editor de abajo .
plusMinus tiene el siguiente parámetro (s) :
- int arr [n]: un array de enteros

Imprimir

Imprime las proporciones de los valores positivos, negativos y cero en el array. Cada valor debe imprimirse en una línea separada con 6 dígitos después del decimal. La función no debe devolver ningún valor.

Formato de entrada

La primera línea contiene un número entero , n , el tamaño de la matriz.
La segunda línea contiene n enteros separados por espacios que describen arr[n].

Formato de salida

Imprime las siguientes 3 líneas ,cada una con 6 decimales:
1. proporción de valores positivos
2. proporción de valores negativos
3. proporción de ceros
*/
/*
'use strict';

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
}
*/
function plusMinus(arr) {
    let positiveCounter = 0;
    let negativeCounter = 0;
    let zeroCounter = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCounter += 1;
        } else if (arr[i] < 0) {
            negativeCounter += 1;
        } else {
            zeroCounter += 1;
        }
    }
    let proportionsPositive = positiveCounter / arrLength;
    let proportionsNegative = negativeCounter / arrLength;
    let proportionsZero = zeroCounter / arrLength;

    console.log(proportionsPositive.toFixed(6));
    console.log(proportionsNegative.toFixed(6));
    console.log(proportionsZero.toFixed(6));
}
let arr = [1, 1, 0, -1, -1];
plusMinus(arr);

module.exports = plusMinus;
/*
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
*/