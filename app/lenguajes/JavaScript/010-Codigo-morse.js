/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

const morseDict = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": " ",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

const textDict = Object.fromEntries(
  Object.entries(morseDict).map((key, value) => (value, key))
);

function revisar(input) {
  if (input.trim()[0] === "." || input.trim()[0] === "-") {
    return morseATexto(input);
  } else {
    return textoAMorse(input);
  }
}

function textoAMorse(texto) {
  return texto
    .toUpperCase()
    .split("")
    .map((caracter) => morseDict[caracter] || "")
    .join(" ");
}

function morseATexto(morse) {
  return morse
    .split("   ")
    .map((palabra) =>
      palabra
        .split(" ")
        .map((simbolo) => textDict[simbolo] || "")
        .join("")
    )
    .join(" ");
}

let texto = "Mi gato maulla";

console.log(revisar(texto));
