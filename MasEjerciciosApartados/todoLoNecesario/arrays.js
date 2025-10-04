const frutas = ["manzana", "banana", "pera"];

// Agregar y quitar elementos
frutas.push("naranja");      // Agrega al final
frutas.pop();                 // Quita el último
frutas.unshift("kiwi");       // Agrega al inicio
frutas.shift();               // Quita el primero

// Buscar elementos
frutas.indexOf("banana");     // Devuelve índice (o -1 si no está)
frutas.includes("pera");      // Devuelve true si existe

// Combinar y dividir
frutas.concat(["mango"]);     // Une arrays
frutas.join(", ");             // Une en un string
frutas.slice(1, 3);             // Crea un subarray sin modificar el original
frutas.splice(1, 1, "uva");     // Modifica el array: quitar/agregar en posición dada

// Recorrer elementos
frutas.forEach(f => console.log(f));  // Recorre sin devolver nada
const mayus = frutas.map(f => f.toUpperCase()); // Transforma y devuelve nuevo array
const soloConA = frutas.filter(f => f.includes("a")); // Filtra
const encontrada = frutas.find(f => f.startsWith("p")); // Encuentra el primer elemento que cumpla condición
const indice = frutas.findIndex(f => f === "banana"); // Devuelve el índice del que cumple

// Otras operaciones
const ordenadas = frutas.sort();       // Ordena alfabéticamente (modifica el original)
const invertidas = frutas.reverse();   // Invierte el orden (modifica el original)
const total = frutas.reduce((acc, f) => acc + f.length, 0); // Reduce a un solo valor
