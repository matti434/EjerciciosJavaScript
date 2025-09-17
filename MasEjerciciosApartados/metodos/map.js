const nombres = ["ana", "juan", "maria"];

//map() creates a new array from calling a function for every array element
//map() crea una nueva matriz al llamar a una función para cada elemento de la matriz
const mayuscula = nombres.map((n) =>{
    return n.toUpperCase();
});

console.log("nombres mayus: "+mayuscula);