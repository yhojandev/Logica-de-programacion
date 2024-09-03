/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - usar la imagen de: ../../img/gallo.jpg
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

const sharp = require("sharp");
const path = require("path");

async function cargarImagen(rutaLocal) {
  try {
    const img = await sharp(rutaLocal).metadata();
    return img;
  } catch (error) {
    console.error("No se puede cargar la imagen", error);
    return null;
  }
}

function mcd(a, b) {
  if (!b) {
    return a;
  }
  return mcd(b, a % b);
}

async function relacionDeAspecto(rutaLocal) {
  const img = await cargarImagen(rutaLocal);
  if (img) {
    const width = img.width;
    const height = img.height;
    const aspecto = mcd(width, height);
    const aspectoAncho = width / aspecto;
    const aspectoAlto = height / aspecto;

    console.log(`La relación de aspecto es => ${aspectoAncho}:${aspectoAlto}`);
  } else {
    console.log("No se pudieron obtener las dimensiones");
  }
}

// Usa la ruta del archivo local que has subido
const rutaImagen = path.resolve(__dirname, "../../img/gallo.jpg");

relacionDeAspecto(rutaImagen);
