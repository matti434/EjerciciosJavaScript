/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let contador = 0;
do{
  let texto= prompt("Ingrese la frase:").toLowerCase();

  if(texto === null){
    alert("No se ingreso ningun valor");
    break;
  }
  else{
    for(let letra of texto)
    {
       if("aeiou".includes(letra)){
           contador++;      
        }
    }
  }

  let confirmacion = confirm("Ingrese cancelar si desea terminar.");

  if(!confirmacion){
    break;
  }

}while(true)
    
alert("El total de vocales ingresadas es: " + contador);