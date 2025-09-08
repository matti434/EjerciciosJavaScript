// ingreso palabra
// recorro con un for de atras a adelante
// comparo con la palabra origin

let palabra = "anilina";

if (!isNaN(palabra) || palabra.trim() === "") {
    alert("No ingrese valores numericos y vacios");
    return;
}

if( palabra=== undefined || palabra === null){
    alert("No se ingreso ninguna palabra");
    return;
};

// compara el tipo de dato
if(typeof palabra !=="string"){
    alert("El valor ingresado no es una palabra");
    return;
}

let palabraAlrevez="";
for(let i = palabra.length - 1; i>=0;i--){
    palabraAlrevez += palabra[i];
}
if(palabraAlrevez===palabra){
    console.log("La palabra: "+ palabra +" es palindroma");
}
else{
    console.log("La palabra: "+ palabra +" no es palindroma");
}
console.log(palabraAlrevez);