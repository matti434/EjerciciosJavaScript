/*
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/


do {
    let aleatorio = Math.floor(Math.random() * 99) + 1;
    console.log("Número generado:", aleatorio);
    
    let continuar = confirm("¿Quieres generar otro número?");
    if (!continuar) {
        break; // Sale del bucle si el usuario cancela
    }
} while (true);

console.log("Fin del programa");