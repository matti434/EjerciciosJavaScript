/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

let numero = parseInt(prompt("ingrese un numero no mayor a 50:"));
do{

    if(numero>50 || numero<1){
        alert("El numero ingresado es mayor a 50 o menor a 1");
        break;
    }
    else{
        for(let i=1;i<=numero;i++){
           linea="";
           for(let j=1;j<=i;j++){
            linea +=j;
           }
           console.log(linea);
        }
        break;
    }
}while(true)