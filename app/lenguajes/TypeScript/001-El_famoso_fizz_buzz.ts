/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function multiplo(numero: number, divisor: number): boolean {
  return numero % divisor === 0;
}

for (let i = 1; i < 101; i++) {
  if (multiplo(i, 3) && multiplo(i, 5)) {
    console.log("fizzbuzz");
    continue;
  }
  if (multiplo(i, 3)) {
    console.log("fizz");
    continue;
  }
  if (multiplo(i, 5)) {
    console.log("buzz");
    continue;
  }
  console.log(i);
}
