const texto = "Hola Mundo";

// Información
texto.length;                 // Cantidad de caracteres
texto.charAt(0);               // Carácter en posición dada
texto.charCodeAt(0);           // Código Unicode del carácter

// Buscar
texto.indexOf("Mundo");        // Índice de la subcadena
texto.lastIndexOf("o");         // Última ocurrencia
texto.includes("Hola");         // Devuelve true si existe
texto.startsWith("Hola");        // Comienza con
texto.endsWith("Mundo");         // Termina con

// Modificar
texto.toUpperCase();             // Mayúsculas
texto.toLowerCase();             // Minúsculas
texto.trim();                     // Quita espacios al inicio y final
texto.replace("Mundo", "JS");     // Reemplaza primera coincidencia
texto.replaceAll("o", "a");       // Reemplaza todas las coincidencias
texto.slice(0, 4);                 // Substring desde inicio a fin
texto.substring(0, 4);             // Similar a slice
texto.split(" ");                  // Divide en array usando separador
