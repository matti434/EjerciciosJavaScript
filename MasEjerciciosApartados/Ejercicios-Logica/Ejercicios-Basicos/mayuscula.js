/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function palabras(st){
    
    let palabras=[];
    for(let i=0;i<st.length;i++){
       console.log("entramos for palabras");      
       let aux = String(st[i]).split(" ");
       console.log("auxiliar"+aux);
       palabras.push(aux.mayuscula());
    }

    return palabras;
}

function mayuscula(st){
  
    let primera;
    let mayuscula="";
    const palabra=palabras(st);
    for(let i=0; i<palabra.length;i++){
        if(i===0){
            primera=palabra[0];
            mayuscula += palabra[i].toUpperCase();
        }
        else{
            mayuscula += palabra[i];
        }
    }
    return mayuscula;
}

console.log(mayuscula("hola como estas?"));