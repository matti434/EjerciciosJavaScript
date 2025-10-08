// Script que simula el lanzamiento de dos dados 50 veces y cuenta las apariciones de cada suma

const conteoSumas = new Array(11).fill(0); 

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
  // math.floor redondea hacia abajo no olvidarme
}


for (let i = 0; i < 50; i++) {

  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  

  const suma = dado1 + dado2;
  

  conteoSumas[suma - 2]++;
}


console.log("Resultados después de 50 lanzamientos:");
console.log("----------------------------------");
for (let s = 2; s <= 12; s++) {
  console.log(`Suma ${s}: ${conteoSumas[s - 2]} apariciones`);
}

console.log("\nRepresentación gráfica:");
console.log("---------------------");
for (let s = 2; s <= 12; s++) {
  const barras = '■'.repeat(conteoSumas[s - 2]);
  console.log(`${s.toString().padStart(2)}: ${barras} ${conteoSumas[s - 2]}`);
}