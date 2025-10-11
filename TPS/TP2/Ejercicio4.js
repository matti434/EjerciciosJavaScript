/*

4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/


let sumaTotal=0;

do{
  let numero=parseInt(prompt("Ingrese un numero"));

  if(isNaN(numero)){
    alert("Lo ingresado no es un numero");
  }
  else{
    sumaTotal+=numero
  }

  let confirmacion = confirm("Desea seguir sumando?");
  if(!confirmacion){
    break;
  }
}while(true)


alert("La suma total es:" + sumaTotal);