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
*/
