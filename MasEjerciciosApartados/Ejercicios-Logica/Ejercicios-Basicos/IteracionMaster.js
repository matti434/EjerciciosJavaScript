/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log(contador);

  if (contador >= 100) {
    clearInterval(intervalo);
    console.log("¡Llegamos a 100! Intervalo detenido.");
  }
}, 1000);

function contar() {
  contador = 0;
  r = 0;
  for (let i = 1; i <= 100; i++) {
    contador++;
    console.log(contador);
  }

  while (r <= 100) {
    r++;
    console.log(r);
  }

  do {
    r++;
    console.log(r);
  } while (r <= 100);

}

function contarRecursivo(numero=1){
    if(numero>100)return;
    console.log(numero);
    contarRecursivo(numero+1);
}

contar();
contarRecursivo();
