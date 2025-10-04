/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */


function cuantosDias(string1,string2){

    const fecha1=String(string1.split('/'));
    const fecha2=String(string2.split('/'));

    if(fecha1[0]>31 || fecha1[0]<1){
        console.log("fecha dia invalida");
    }
    else{
        const diaFecha1=fecha1[0];
    }
    if(fecha1[1]>12 || fecha1[1]<1){
        console.log("fecha mes invalida");
    }
    else{
        const mesFecha1=fecha1[1];
    }
   
    if(fecha2[0]>31 || fecha2[0]<1){
        console.log("fecha2 dia invalida");
    }
    else{
        const diaFecha2=fecha2[0];
    }
    if(fecha2[1]>31 || fecha2[1]<1){
        console.log("fecha2 mes invalida");
    }
    else{
        const mesFecha2=fecha2[1];
    }

    const anioFecha1=fecha1[3];
    const anioFecha2=fecha2[3];

    const fecha = new Date(anioFecha1,mesFecha1,diaFecha1);

    console.log("fecha1: " + num1 + "fecha2: " + num2);
}

console.log(cuantosDias("21/02/2020", "30/09/2025"));


/*
Cómo funciona la validación:


const fecha = new Date(año, mes, dia);
if (fecha.getDate() !== dia || fecha.getMonth() !== mes || fecha.getFullYear() !== año) {
    throw new Error(`Fecha inválida: ${fechaStr}`);
}


Desglose:
fecha.getDate() !== dia: Verifica si el día cambió

Ejemplo: Si ingresas "31/04/2023", getDate() devolverá 1 (no 31)

fecha.getMonth() !== mes: Verifica si el mes cambió

Ejemplo: Si ingresas "31/12/2023", pero el mes se ajustó, no coincidirá

fecha.getFullYear() !== año: Verifica si el año cambió

Ejemplo: Si ingresas "32/12/2023", podría convertirse en "01/01/2024"

Casos que detecta esta validación:

// Ejemplos que lanzarán error:
console.log(diferenciaEnDias("31/04/2023", "01/05/2023")); // Error: 31 de abril no existe
console.log(diferenciaEnDias("29/02/2023", "01/03/2023")); // Error: 2023 no es bisiesto
console.log(diferenciaEnDias("32/01/2023", "01/02/2023")); // Error: 32 de enero no existe
console.log(diferenciaEnDias("00/01/2023", "01/01/2023")); // Error: día 0 no existe
*/