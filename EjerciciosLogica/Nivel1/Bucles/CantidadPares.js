/* Contar cuántos números pares hay del 1 al 50. */


let numerosPares = 0;


for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        console.log("El numero " + i + " es par");
        numerosPares++;
    }
}

console.log("La cantidad de numeros pares es: "+numerosPares);
