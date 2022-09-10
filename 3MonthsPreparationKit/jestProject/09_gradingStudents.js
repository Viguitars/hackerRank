/*
La Universidad HackerLand tiene la siguiente política de calificaciones:

- Cada estudiante recibe una calificación en el rango inclusivo de 0 a 100.
- Cualquier nota inferior a 40 es un suspenso.

Sam es un profesor de la universidad y le gusta redondear la nota de cada estudiante según estas reglas:

- Si la diferencia entre la nota y el siguiente múltiplo de 5 es inferior a 3, redondea la nota al siguiente múltiplo de 5.
- Si el valor de la nota es inferior a 38, no se redondea, ya que el resultado seguirá siendo un suspenso.

Ejemplos

- nota = 84 redondear a 85 (85 - 84 es menor que 3)
- nota = 29 no redondear (el resultado es inferior a 40)
- nota = 57 no redondear (60 - 57 es 3 o más)

Dado el valor inicial de la calificación para cada uno de los n estudiantes de Sam, escriba el código para automatizar el proceso de redondeo.

Descripción de la función

Complete la función gradingStudents en el editor de abajo.

gradingStudents tiene los siguientes parámetros:

- int calificaciones[n]: las calificaciones antes del redondeo

Devuelve

- int[n]: las calificaciones después del redondeo, según corresponda

Formato de entrada

La primera línea contiene un único número entero, n, el número de estudiantes.

Cada línea i de las n siguientes contiene un único entero, grades[i].
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
function gradingStudents(grades) {
    if (grades < 38) {
        return grades;
        console.log(grades);
    } else {
        const multipleOfFive = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        for (let i = 0; i < multipleOfFive.length; i++) {
            if (multipleOfFive[i] - grades === 1 || multipleOfFive[i] - grades === 2) {
                return multipleOfFive[i];
            } else if (multipleOfFive[i] - grades === 3) {
                return grades;
            }
        }
    }
}

module.exports = gradingStudents;

console.log(gradingStudents(84));
//85
console.log(gradingStudents(29));
//29
console.log(gradingStudents(57));
//57
console.log(gradingStudents(4));
//4
console.log(gradingStudents(73));
//75
console.log(gradingStudents(38));
//40
console.log(gradingStudents(33));
//33
/*
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
*/