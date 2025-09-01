/*
Haz un cronómetro que cuente desde 10 hasta 0 en pantalla y al llegar a 0 muestre "Tiempo terminado".
*/

let contador=10;
const intervalo=setInterval(()=> {
   contador--
   console.log(`Contador: ${contador}`);

   if(contador === 0){
    console.log(`Tiempo terminado`);
    clearInterval(intervalo);
   }   
},1000);