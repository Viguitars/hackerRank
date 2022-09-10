/*
Hay una colección de cadenas de entrada y una colección de cadenas de consulta. Para cada cadena de consulta, determine cuántas veces aparece en la lista de cadenas de entrada. Devuelve un array con los resultados.

Ejemplo

cadenas=['ab','ab',abc']
consultas=['ab','abc','be']

Hay 2 instancias de 'ab', 1 de 'abc' y 0 de 'bc'. Para cada consulta, añade un elemento a la matriz de retorno, resultados = [2, 1, 0].

Descripción de la función

Complete la función matchingStrings en el editor de abajo. La función debe devolver un array de enteros que representen la frecuencia de aparición de cada cadena de consulta en las cadenas.

matchingStrings tiene los siguientes parámetros:

string strings[n] - una matriz de cadenas a buscar
string queries[q] - una matriz de cadenas de consulta

Devuelve

int[q]: una matriz de resultados para cada consulta

Formato de entrada

La primera línea contiene un número entero n, el tamaño de strings[] .
Cada una de las siguientes n líneas contiene una cadena strings[i].
La siguiente línea contiene q, el tamaño de queries[].
Cada una de las siguientes q líneas contiene una cadena queries[i].
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
}
*/
/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    let result = [];
    let countQueries = 0;
    for (let i = 0; i < queries.length; i++) {
        countQueries = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                countQueries++;
            }
            result[i] = countQueries;
        }
    }
    return result;
}
console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));
/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
*/
