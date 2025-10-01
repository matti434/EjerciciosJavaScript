/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function mayuscula(string){
  
    let primera;
    const mayuscula=[];
    const palabra=String(string);
    for(let i=0; i<=palabra.length;i++){
        if(palabra[0]){
            primera=palabra[0];
            mayuscula += palabra[0].toUpperCase();
        }
        mayuscula += palabra[i];
    }

    return mayuscula;
}

console.log(mayuscula("hola"));