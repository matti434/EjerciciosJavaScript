/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

let ciudad;
let ciudades=[];
do{
    ciudad = prompt("Ingrese el nombre de la ciudad, sino precione cancelar para terminar");
    
    if( ciudad !== null && ciudad.trim()!==""){
       ciudades.push(ciudad);
    }

}while(ciudad!==null);

let longitud=ciudades.length;
document.writeln(`La longitud del arreglo es: ${longitud}`);


document.writeln(`El primer elemento del arreglo es: ${ciudades[0]}, el tercer elemento es: ${ciudades[2]} y el ultimo elemento es ${ciudades[ciudades.length-1]}`);

ciudades.push("Paris");

document.writeln(`El segundo elemento del arreglo es: ${ciudades[1]}`);

ciudades[1]= "Barcelona";

document.writeln("Arreglo final:" +ciudades.join(" - "));





