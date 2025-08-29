/*
1. Bucle del 1 al 20
Crea un bucle que imprima los números del 1 al 20.

let maximo=20;

for(let i=1; i<=maximo;i++){
    console.log(i);
}
----------------
FIN EJERCICIO 1
----------------
*/
/*
2. Tabla de multiplicar del 5
Escribe un bucle que imprima la tabla de multiplicar del 5.

for(let i=1; i<=10;i++){
    multiplicacion= i*5;
    console.log(`${i} x 5 = ${multiplicacion}`)
}
----------------
FIN EJERCICIO 2
----------------
*/
/*
3. Filtrar números mayores a 10
Dado un array de números, usar un bucle para crear un nuevo array con solo los números mayores a 10.

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let numeros  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let mayores = [];

for(let i=0; i<=numeros.length;i++){
    if(numeros[i]>10){
        mayores.push(numeros[i]);
    }
}

console.log(mayores);

----------------
FIN EJERCICIO 3
----------------
*/
/*
4. Estación del año
Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno).

let mes = "Abril";
let estacion;

switch (mes.toLowerCase()){
  case "Diciembre":
  case "Enero":
  case "Febrero":
    estacion = "Invierno";
    break;
  case "Marzo":
  case "Abril":
  case "Mayo":
    estacion = "Primavera";
    break;
  case "Junio":
  case "Julio":
  case "Agosto":
    estacion = "Verano";
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    estacion = "Otoño";
    break;
  default:
    estacion = "Mes no válido";
}

console.log(`Para el mes de ${mes}, la estación es: ${estacion}`);


----------------
FIN EJERCICIO 4
----------------
*/

/*
5. Switch de idiomas
Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas).
let saludo;
let continuar=true;

do{
   let idioma = prompt("Ingrese el idioma 1 ingles-2 aleman-3 fraces -4 italiano -5 hawaiano -6 ndau -7 nepali y escriba `salir` para terminar el programa");
   switch(idioma.toLowerCase()){
    case "ingles":
        saludo = "!Hello";
        break;
    case "aleman":
        saludo = "!Hello";
        break;
    case "frances":
        saludo = "Bonjour";
        break;
    case "italiano":
        saludo = "ciao";
        break;
    case "hawaiano":
        saludo = "Aloha";
        break;
    case "ndau":
        saludo = "mwakadini";
        break;
    case "nepali":
        saludo = "नमस्कार";
        break;
    case "salir":
        continuar=false;
        break;
    default:
        console.log("No ingreso el idioma correcto");
   }
}while(continuar);

----------------
FIN EJERCICIO 5
----------------
*/

/*
Array de animales

Crear un array con 5 animales.

Añadir 2 más (uno al inicio y otro al final).

Eliminar el que está en la tercera posición.

Mostrar la cantidad total de animales.

let animales = ["leon", "tigre", "elefante", "jirafa", "puma"];
console.log(animales);

animales.unshift("cebra");
console.log(animales);

animales.push("hipopotamo");
console.log(animales);

animales.splice(2 , 1);
console.log(animales);

let total=animales.length;
console.log(`El total de animales es: ${total}`);

----------------
FIN EJERCICIO 6
----------------
*/

/*
7. Cálculo de IMC
Diseñar un algoritmo que calcule el IMC con peso (kg) y altura (m). 
Mostrar el resultado con su categoría:

Menos de 18.5 → Peso bajo
Entre 18.5 y 24.99 → Peso normal
25 o más → Sobrepeso


let kg = parseFloat(prompt("Ingrese el peso: "));
let m= parseFloat(prompt("Ingrese la altura: "));

let IMC = kg / (m * m);

let categoria;
switch (true) { 
  case (IMC < 18.5):
    categoria = "Peso bajo";
    break;
  case (IMC >= 18.5 && IMC <= 24.99):
    categoria = "Peso normal";
    break;
  case (IMC>=25):
    categoria = "Sobrepeso";
  default:
    console.log("El IMC ingresado no esta en las opciones")
}

console.log("Tu IMC es: " + IMC.toFixed(2));
console.log("Categoría: " + categoria);

----------------
FIN EJERCICIO 7
----------------
*/

/*
8. Signo Zodiacal (Optativo)
Diseñar un algoritmo que obtenga el mes y día de nacimiento y muestre el signo zodiacal.

*/
let signos = [
  "Capricornio", 
  // 0
  "Acuario",     
  // 1
  "Piscis",      
  // 2
  "Aries",       
  // 3
  "Tauro",       
  // 4
  "Géminis",     
  // 5
  "Cáncer",      
  // 6
  "Leo",         
  // 7
  "Virgo",      
   // 8
  "Libra",       
  // 9
  "Escorpio",    
  // 10
  "Sagitario"    
  // 11
 
];


let inicioSignos = [
  { mes: 1, dia: 20 },  
  // Acuario
  { mes: 2, dia: 19 },  
  // Piscis
  { mes: 3, dia: 21 },  
  // Aries
  { mes: 4, dia: 20 },  
  // Tauro
  { mes: 5, dia: 21 },  
  // Géminis
  { mes: 6, dia: 21 },  
  // Cáncer
  { mes: 7, dia: 23 },  
  // Leo
  { mes: 8, dia: 23 },  
  // Virgo
  { mes: 9, dia: 23 },  
  // Libra
  { mes: 10, dia: 23 }, 
  // Escorpio
  { mes: 11, dia: 22 }, 
  // Sagitario
  { mes: 12, dia: 22 }  
  // Capricornio
];


let dia = parseInt(prompt("Ingrese el dia del (1-31):"));
let mes = parseInt(prompt("Ingrese el mes (1-12)"));

if(isNaN(mes) || isNaN(dia) || mes< 1 || mes>12 || dia<1 || dia>31){
    alert("La fecha es invalida");
}
  else{
    let signo="signo";

    for(let i=0; i<inicioSignos.length;i++){
        if(
            (mes === inicioSignos[i].mes && dia>= inicioSignos[i].dia) ||
            (mes === inicioSignos[(i+1) % 12].mes && dia< inicioSignos[(i+1)%12].dia)
        ){
            signo= signos[(i+1) % 12];
            break;
        }
    }
    alert("Su signo es: "+ signo  );
  }
 