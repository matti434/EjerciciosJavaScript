/*
Reloj en consola
Muestra la hora actual cada segundo en la consola (new Date().toLocaleTimeString()).
*

setInterval(() => {
  console.log(new Date().toLocaleTimeString());
})

/*
new Date(): Crea un nuevo objeto Date con la fecha y hora actual

.toLocaleTimeString(): Convierte la parte de la hora a una cadena 
formateada según la configuración regional del navegador

// con formato personalizado
setInterval(() => {
  //Crea un nuevo objeto date con la fecha y hora en const hora
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString(`es-Es`,{
    hour: `2-digit`,
    minute: `2-digit`,
    second: `2-digit`,
    hour12: false,
  });
  console.log(hora);
},1000);

*/
// Version mas detallada con limpieza

let intervalo;
<<<<<<< HEAD

function iniciarReloj(){
    intervalo=setInterval(() => {
      console.clear();
      console.log('Hora actual: ',new Date().toLocaleTimeString());
    });
=======
function iniciarReloj(){
  invervalo = setInterval(()=>{
    console.clear(); // Limpiar consola
    console.log('Hora actual:', new Date().toLocaleTimeString());
  },1000);
>>>>>>> fe67704ddd3467c4aca0cad69bbc2c7c81879c93
}

iniciarReloj();