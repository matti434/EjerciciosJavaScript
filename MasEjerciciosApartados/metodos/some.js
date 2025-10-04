// true si por lo menos 1 cumple la condicion
// false si ningun elemento cumple la condicion

const edades = [18, 21, 25, 30];

const hayAlgunMayor = edades.some((edades) => edades>18);

console.log(hayAlgunMayor);