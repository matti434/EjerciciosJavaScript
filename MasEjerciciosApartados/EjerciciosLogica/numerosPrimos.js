// Números primos: Encontrar primos en un rango, verificar si un número es primo

let numero = [2, 4, 5, 7, 12, 64, 7, 45, 32, 53, 6, 78, 41];
let primos = [];
for (let i = 0; i < numero.length; i++) {
  let contador = 0;
  let numeroInt = parseInt(numero[i]);
  // primero los primos tien que ser mayores a 1
  if (numeroInt > 1) {
    for (let j = 1; j <= numeroInt; j++) {
      if (numeroInt % j === 0) {
        contador++;
      }
    }
  }
  if (contador === 2) {
    primos.push(numero[i]);
  }
}

console.log("Primos :" + primos);
