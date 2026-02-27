/* Verificar si una persona puede votar (edad ≥ 18). */


const edad = parseInt(process.argv[2]);

if(edad >= 18){
    console.log("La persona puede votar");
}
else{
    console.log("La persona no puede votar");
}