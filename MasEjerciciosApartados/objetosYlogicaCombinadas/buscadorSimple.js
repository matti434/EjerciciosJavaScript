/*
Buscador simple: Filtrar en un array de strings los elementos que contengan cierta palabra.
*/

// Array de ejemplo con strings
const datos = [
    "JavaScript es un lenguaje de programación",
    "Python es muy popular para ciencia de datos",
    "HTML y CSS son para desarrollo web",
    "Java es un lenguaje orientado a objetos",
    "Los frameworks de JavaScript son muy útiles",
    "Base de datos SQL y NoSQL",
    "Desarrollo frontend con React y Vue",
    "Desarrollo backend con Node.js y Python",
    "Programación funcional en JavaScript",
    "Machine learning con Python"
];

function buscarPalabra(array, palabra) {
    // Validaciones
    if (!Array.isArray(array)) {
        console.error("El primer parámetro debe ser un array");
        return [];
    }
    
    if (typeof palabra !== 'string' || palabra.trim() === "") {
        console.error("La palabra a buscar debe ser un texto válido");
        return [];
    }
    
    // Convertir a minúsculas para búsqueda case-insensitive
    const palabraLower = palabra.toLowerCase().trim();
    
    // Filtrar los elementos que contengan la palabra
    const resultados = array.filter(elemento => {
        return elemento.toLowerCase().includes(palabraLower);
    });
    
    return resultados;
}

// Ejemplos de uso:
console.log("Buscando 'JavaScript':");
const resultadosJS = buscarPalabra(datos, "JavaScript");
console.log(resultadosJS);
console.log(`Encontrados: ${resultadosJS.length} resultados\n`);

console.log(" Buscando 'Python':");
const resultadosPython = buscarPalabra(datos, "Python");
console.log(resultadosPython);
console.log(`Encontrados: ${resultadosPython.length} resultados\n`);

console.log(" Buscando 'web':");
const resultadosWeb = buscarPalabra(datos, "web");
console.log(resultadosWeb);
console.log(`Encontrados: ${resultadosWeb.length} resultados\n`);

console.log(" Buscando 'base de datos':");
const resultadosBD = buscarPalabra(datos, "base de datos");
console.log(resultadosBD);
console.log(`Encontrados: ${resultadosBD.length} resultados\n`);

// Búsqueda con palabra que no existe
console.log(" Buscando 'php':");
const resultadosPHP = buscarPalabra(datos, "php");
console.log(resultadosPHP);
console.log(`Encontrados: ${resultadosPHP.length} resultados\n`);

// Versión alternativa que devuelve también el índice
function buscarPalabraConIndice(array, palabra) {
    if (!Array.isArray(array) || typeof palabra !== 'string' || palabra.trim() === "") {
        return [];
    }
    
    const palabraLower = palabra.toLowerCase().trim();
    
    const resultados = array
        .map((elemento, index) => ({ elemento, index }))
        .filter(item => 
            item.elemento.toLowerCase().includes(palabraLower)
        );
    
    return resultados;
}

console.log(" Búsqueda con índices - 'desarrollo':");
const resultadosConIndice = buscarPalabraConIndice(datos, "desarrollo");
resultadosConIndice.forEach(resultado => {
    console.log(`[${resultado.index}] ${resultado.elemento}`);
});