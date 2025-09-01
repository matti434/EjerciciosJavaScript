/*
Nivel básico

Haz que aparezca un alert("¡Hola!") después de 2 segundos con setTimeout.

Crea un contador en la consola que muestre los números del 1 al 10 cada segundo.

Muestra en la consola "Boom 💥" después de 5 segundos
*/

setTimeout(() => {
  alert("hola");
}, 2000);

let contador = 1;
// setInterval es mas adecuado para contadores
const intervalo = setInterval(() => {
  console.log(`Contador: ${contador}`);
  contador++;

  if (contador > 10) {
    clearInterval(intervalo); // detener cuando llegue a 10
  }
}, 1000);
// setTimeout funciona pero es menos eficiente para contadores
function contar() {
  console.log(contador);
  contador++;
  if (contador <= 10) {
    setTimeout(contar, 1000);
  }
}

setTimeout(contar, 1000);

setTimeout(() => {
  contador++;
  console.log(`Contador: ${contador} `);

  if (contador > 5) {
    console.log("Boom 💥");
  }
}, 5000);

/*
¿Cuándo usar cada uno?
Escenario	                                Mejor opción	    Por qué
Ejecutar algo UNA vez después de un tiempo	setTimeout	     Simple y directo
Repetir algo cada X tiempo	                setInterval	     Diseñado para esto
Contadores	                                setInterval      Más control para detener
Animaciones	                                setInterval      Control de frame rate
*/
