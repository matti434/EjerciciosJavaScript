/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

function calcularAspectRatio(url) {
  const img = new Image();
  img.src = url;
  img.onload = function () {
    const width = this.naturalWidth;
    const height = this.naturalHeight;
    let a = width;
    let b = height;

    let temporal;
    while (b !== 0) {
      if (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
      }
    }

    const X = width / temporal;
    const Y = height / temporal;

    console.log(`Ratio : ${X}:${Y}`);
  };
}

calcularAspectRatio(
  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Euklid2.jpg"
);
