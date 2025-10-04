const arrays = [
  2, 4, 6, 3, 6, 9, 3, 12, 87, 345, 21, 36, 7, 344, 7, 313, 5, 2312, 2, 5, 9,
];
const duplicados = [];
const visto = {};
/*
for(let i=0; i<arrays.length;i++){
    
   //si fuera j=0 se compraria siempre el mismno con i
   for(let j=i+1;j<arrays.length;j++){
    
    if(arrays[i] === arrays[j]){
        duplicados.push(arrays[i]);
        break;
    }
   }

}

console.log("Los numeros son: "+ arrays);
console.log("Los numeros duplicados son: "+ duplicados);
*/

function encontrarDuplicados(arrays) {
  const duplicados = [];
  const visto = {};
  for (let i = 0; i < arrays.length; i++) {
    const elementos = arrays[i];

    //si el elemento es true entra
    if (visto[elementos]) {
      console.log(`Elemento: ${elementos} es duplicado`);
      duplicados.push(elementos);
    }
    // si el elemento es nuevo entra
    else {
      console.log(`Elemento: ${elementos} es unico`);
      visto[elementos] = true;
    }

    //console.log("Vistos:", visto);
    console.log("duplicados " + duplicados);
  }

  return duplicados;
}

console.log(encontrarDuplicados(arrays));