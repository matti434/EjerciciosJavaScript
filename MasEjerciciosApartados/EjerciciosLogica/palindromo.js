// ingreso palabra
// recorro con un for de atras a adelante
// comparo con la palabra origin

let palabra = "anilina";

if (!isNaN(palabra) || palabra.trim() === "") {
    alert("No ingrese valores numericos y vacios");
    return;
}

if (palabra === undefined || palabra === null) {
    alert("No se ingreso ninguna palabra");
    return;
};

// compara el tipo de dato
if (typeof palabra !== "string") {
    alert("El valor ingresado no es una palabra");
    return;
}

/*
 // 5. Normalizar la palabra (eliminar acentos, caracteres especiales, espacios y convertir a minúsculas)
    const palabraNormalizada = palabra
        .toLowerCase()
        .normalize("NFD") // Separar caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Eliminar diacríticos
        .replace(/[^a-z0-9]/g, ""); // Eliminar todo lo que no sea alfanumérico
    
    // 6. Validar longitud después de normalizar
    if (palabraNormalizada.length < 2) {
        console.error("Error: La palabra debe tener al menos 2 caracteres válidos");
        return false;
    }
*/


let palabraAlrevez = "";
for (let i = palabra.length - 1; i >= 0; i--) {
    palabraAlrevez += palabra[i];
}
if (palabraAlrevez === palabra) {
    console.log("La palabra: " + palabra + " es palindroma");
}
else {
    console.log("La palabra: " + palabra + " no es palindroma");
}
console.log(palabraAlrevez);