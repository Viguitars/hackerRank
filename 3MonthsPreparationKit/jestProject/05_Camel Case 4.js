/*
Camel Case es un estilo de nomenclatura común en muchos lenguajes de programación. En Java, los nombres de los métodos y las variables suelen empezar con una letra minúscula, y todas las palabras siguientes comienzan con una letra mayúscula (ejemplo: startThread). Los nombres de las clases siguen el mismo patrón, excepto que comienzan con una letra mayúscula (ejemplo: BlueCar).

Su tarea es escribir un programa que cree o divida los nombres de variables, métodos y clases en Camel Case.

Formato de entrada

- Cada línea del archivo de entrada empezará con una operación (S o C) seguida de un punto y coma, seguida de M, C o V, seguida de un punto y coma y de las palabras sobre las que tendrá que operar.
- La operación será S (dividir) o C (combinar) 
- M indica método, C indica clase y V indica variable
- En el caso de una operación de división, las palabras serán un método en mayúsculas, una clase o un nombre de variable que necesitas dividir en una lista de palabras delimitadas por espacios que comienzan con una letra minúscula.
- En el caso de una operación de combinación, las palabras serán una lista delimitada por espacios de palabras que comienzan con letras minúsculas y que necesita combinar en la cadena apropiada en mayúsculas. Los métodos deben terminar con un conjunto vacío de paréntesis para diferenciarlos de los nombres de las variables.

Formato de salida

- Para cada línea de entrada, su programa debe imprimir la lista de palabras delimitada por espacios (en el caso de una operación de división) o la cadena apropiada en camel case (en el caso de una operación de combinación).

S;M;plasticCup()                            plastic cup

C;V;mobile phone                            mobilePhone

C;C;coffee machine                          CoffeeMachine

S;C;LargeSoftwareBook                       large software book

C;M;white sheet of paper                    whiteSheetOfPaper()

S;V;pictureFrame                            picture frame
*/
function processData(input) {
    let inputArr = input.split(';');
    console.log(inputArr);
    if (inputArr[0] == 'S' && inputArr[1] == 'M') {
        let nameArr = inputArr[2].replace('()', '').split('');
        console.log(nameArr);
        for (let i = 0; i < nameArr.length; i++) {
            if (nameArr[i] >= 'A' && nameArr[i] <= 'Z') {
                nameArr.splice(nameArr[i], 0, ' ');
            }
        }
    }
    console.log(nameArr);
}
console.log(processData("S;M;LargeSoftwareBook"));
/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
*/
//let input = "S;M;plasticCup()";
//console.log(processData(input));
