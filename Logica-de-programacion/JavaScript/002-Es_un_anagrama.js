/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(palabra1, palabra2) {
  if (palabra1 === palabra2) {
    return false;
  }

  if (palabra1.leght !== palabra2.leght) {
    return false;
  }

  const ordenaPalabra1 = palabra1.toLowerCase().split("").sort().join("");
  const ordenaPalabra2 = palabra2.toLowerCase().split("").sort().join("");

  return ordenaPalabra1 === ordenaPalabra2;
}

console.log(anagrama("amor", "roma"));
console.log(anagrama("gallo", "gallos"));
console.log(anagrama("roma", "roma"));
