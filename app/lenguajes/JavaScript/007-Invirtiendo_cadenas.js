/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertir(texto){
    let cadenainvertida = "";

    for (let i = texto.length - 1; i>= 0; i--) {
        cadenainvertida += texto[i];
    }
    return cadenainvertida;
}

let cadena = "hola mundo";

console.log(invertir(cadena));
