let precio = parseFloat(prompt("Ingrese el precio de la compra:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (si no hay, ingrese 0):"));
let total;


if (descuento > 0) {
  total = precio - (precio * descuento / 100);
} else {
  total = precio;
}
alert("El total de la compra es: $" + total.toFixed(2));
