let numero= prompt("ingrese el numero que desea ver si es divisible en 2-3-5 o 7: ");

if(numero % 2 ==0){
  alert(`El ${numero} es divisible por 2`)
}else if(numero % 3 == 0){
  alert(`El ${numero} es divisible por 3`)
}else if(numero % 5 == 0){
  alert(`El ${numero} es divisible por 5`)
}else if(numero % 7 == 0){
  alert(`El ${numero} es divisible por 7`)
}
else{
    alert(`El numero ${numero} no es divisible ni en 2,3,5 y 7`);
}