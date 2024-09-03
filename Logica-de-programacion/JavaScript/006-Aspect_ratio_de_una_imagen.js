/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

function calculateAspectRatio(url) {
  const img = new Image();
  img.src = url;

  img.onload = function () {
    const width = img.width;
    const height = img.height;

    // Calculamos el máximo común divisor (GCD) para simplificar el ratio
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    const divisor = gcd(width, height);
    const aspectRatio = `${width / divisor}:${height / divisor}`;

    console.log(`Aspect Ratio: ${aspectRatio}`);
  };

  img.onerror = function () {
    console.log("Error al cargar la imagen.");
  };
}

// Ejemplo de uso
calculateAspectRatio(
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FGallus_gallus_domesticus&psig=AOvVaw3C0JrOYv3N1g16lGUriaRi&ust=1722738213314000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjz4I3i14cDFQAAAAAdAAAAABAE"
);
