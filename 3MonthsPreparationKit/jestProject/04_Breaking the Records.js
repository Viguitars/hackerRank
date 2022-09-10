/*
María juega al baloncesto universitario y quiere ser profesional. Cada temporada lleva un registro de su juego. Cuenta el número de veces que rompe su récord de temporada de más puntos y menos puntos en un partido. Los puntos anotados en el primer partido establecen su récord de la temporada, y empieza a contar a partir de ahí.

Ejemplo:
scores = [12,24,10,24]

Las puntuaciones están en el mismo orden que los partidos jugados. Ella tabula sus resultados de la siguiente manera:

                                          Cuenta
Game     Score    Minimum    Maximum     Min  Max
 0        12        12         12         0    0
 1        24        12         24         0    1
 2        10        10         24         1    1
 3        24        10         24         1    1  

Dados los resultados de una temporada, determina el número de veces que María rompe sus récords de mayor y menor puntuación durante la temporada.
*/

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let countMin = 0;
    let countMax = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            countMin++;
        }
        if (scores[i] > max) {
            max = scores[i];
            countMax++;
        }
    }
    const result = [countMax, countMin];
    return console.log(result);
}
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(scores);