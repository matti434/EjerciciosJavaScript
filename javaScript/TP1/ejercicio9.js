let frase = prompt("ingrese la frase: ");

let vocales = "";

for (let i = 0; i <= frase.length; i++) {
  let letra = frase.charAt(i); // obtenemos la letra en la posicion i

  if ("aeiou".includes(letra)) {
    vocales += letra; // le agregamos a la variable vocales;
    alert(`Las vocales que aparecen el ${vocales}`);
  }
}
