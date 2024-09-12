/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function ConvertirABinario(numero) {
  let binario = "";
  while (numero > 0) {
    let residuo = numero % 2;
    binario = residuo + binario;
    numero = Math.floor(numero / 2);
  }
  return binario;
}

console.log(ConvertirABinario(20));
