let numero = parseInt(prompt("ingrese el numero:"));
let mensaje = "El " + numero + " es divisible por ";
let hayDivisores = false;

// Vamos a ir construyendo el mensaje segun cada condicion
// == compara valores, permitiendo conversión de tipo (coerción).
// === compara valores y tipos. No hace conversión de tipo.
if (numero % 2 === 0) {
  mensaje += hayDivisores ? ",2" : " 2 ";
  hayDivisores = true;
}
if (numero % 3 === 0) {
  mensaje += hayDivisores ? " ,3" : " 3";
  hayDivisores = true;
}
if (numero % 5 === 0) {
  mensaje += hayDivisores ? " ,5" : " 5 ";
  hayDivisores = true;
}
if (numero % 7 === 0) {
  mensaje += hayDivisores ? " y 7" : " 7";;
  hayDivisores = true;
}
if (hayDivisores) {
  mensaje += ".";
  alert(mensaje);
}
else{
  alert(`El numero ${numero} no es divisible ni en 2,3,5 y 7`);
}
