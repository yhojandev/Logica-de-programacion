/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligono(poligono) {
  switch (poligono.tipo) {
    case "triangulo":
      return (poligono.base * poligono.altura) / 2;
      break;
    case "cuadrado":
      return poligono.lado * poligono.lado;
      break;
    case "rectangulo":
      return poligono.base * poligono.altura;
      break;
    default:
      break;
  }
}

const triangulo = { tipo: "triangulo", base: 10, altura: 10 };
const cuadrado = { tipo: "cuadrado", lado: 10 };
const rectangulo = { tipo: "reactangulo", base: 10, altura: 10 };

console.log(areaPoligono(triangulo));
console.log(areaPoligono(cuadrado));
console.log(areaPoligono(rectangulo));
