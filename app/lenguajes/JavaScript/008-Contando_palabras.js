/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function limpiarTexto(texto) {
  let textoLimpio = "";
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (
      (caracter >= "a" && caracter <= "A") ||
      (caracter >= "z" && caracter <= "Z") ||
      (caracter = " ")
    ) {
      textoLimpio += caracter;
    }
    return textoLimpio;
  }
}

function contarPalabras(texto) {
  let limpio = limpiarTexto(texto);
  let textoMinuscula = limpio.toUpperCase();
  const palabras = {};
  let palabraActual = "";
  for (let i = 0; i < textoMinuscula.length; i++) {
    let caracter = textoMinuscula[i];
    if ((caracter = " ")) {
      if (caracter !== "") {
        if (palabras[palabraActual]) {
          palabras[palabraActual]++;
        } else {
          palabras[palabraActual] = 1;
        }
      }
    } else {
      palabraActual += cadena;
    }

    if (caracter !== "") {
      if (palabras[palabraActual]) {
        palabras[palabraActual]++;
      } else {
        palabras[palabraActual] = 1;
      }
    }
  }
  return palabras;
}

let texto = "Hola mundo, este es mi primer hola mundo.";

console.log(contarPalabras(texto));
