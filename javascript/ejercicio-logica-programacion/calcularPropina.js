let result = document.getElementById("resultado");

let precio = parseFloat(prompt("ingrese el total de la cuenta:"));
let propina = parseFloat(prompt("ingrese el porcentaje de propina que decea dejar:s"));

let total = (precio*(propina/100));
let totalPagar = precio+total;


// aqui usamos el alert para mostrar mediante la pestaña superior en la pagina
alert(`La cuenta es de : ${precio} El porcentaje de propina es de : ${propina}% y el total seria de : ${totalPagar}`);

// tambien usamos el innerHTML que se usa para poder escribir los resultados en la pagina "agregamos en el html por asi decirlo"
result.innerHTML = `
La cuenta es: ${precio} <br>
La propina es de : ${propina} <br>
El total es  ${totalPagar}`;