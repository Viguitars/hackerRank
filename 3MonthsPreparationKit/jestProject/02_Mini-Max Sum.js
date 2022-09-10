/*
Dados cinco enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. A continuación, imprima los respectivos valores mínimos y máximos como una sola línea de dos enteros largos separados por espacios.

Ejemplo

arr=[1,3,5,7,9]
La suma mínima es1+3+5+7=16 y la suma máxima es 3+5+7+9=24. La función imprime:
  16 24
*/

function miniMaxSum(arr) {
    let sumMax = 0;
    let sumMin = 0;
    const cloneArr1 = arr.slice();
    const cloneArr2 = arr.slice();
    const numMin = cloneArr1.sort().shift();
    const numMax = cloneArr2.sort().pop();
    for (i = 0; i < cloneArr1.length; i++) {
        sumMax += cloneArr1[i];
    }
    for (i = 0; i < cloneArr2.length; i++) {
        sumMin += cloneArr2[i];
    }
    console.log(sumMin + ' ' + sumMax);
}
const arr = [3, 5, 1, 9, 7];
miniMaxSum(arr);