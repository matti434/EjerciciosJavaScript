/*
Arrays
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

let listaMeses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];
for (let i=0; i<=listaMeses.length-1;i++) {
  let mes = listaMeses[i];
  document.writeln(`<ul> <li>${mes}</li> </ul>`);
}
