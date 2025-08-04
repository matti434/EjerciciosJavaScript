let result = document.getElementById("resultado");

let precio = parseInt(prompt("ingrese el precio"));
let descuento = parseFloat(prompt("ingrese el descuento"));

let total = parseInt(precio*(descuento/100));



// aqui usamos el alert para mostrar mediante la pestaña superior en la pagina
alert(`El precio es : ${precio} el descuento es de : ${descuento} y el total seria de : ${total}`);

// tambien usamos el innerHTML que se usa para poder escribir los resultados en la pagina "agregamos en el html por asi decirlo"
result.innerHTML = `
El precio es: ${precio} <br>
El descuento es de: ${descuento} <br>
El total con descuento es de ${total}`;