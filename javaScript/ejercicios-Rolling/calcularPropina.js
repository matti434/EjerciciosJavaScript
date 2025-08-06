let cuenta = parseFloat(prompt("Ingrese el total de la cuenta:"));
let porcentajePropina = parseFloat(prompt("Ingrese el porcentaje de propina que desea dejar:"));
let propina = cuenta * porcentajePropina / 100;
let totalPagar = cuenta + propina;

alert("Propina: $" + propina.toFixed(2) + "\nTotal a pagar: $" + totalPagar.toFixed(2));
