let result = document.getElementById("resultado");

let grados = prompt("Ingrese los grados:");

let conversion = grados*9/5+32;

// aqui usamos el alert para mostrar mediante la pestaña superior en la pagina
alert(`Los grados ingresados son : ${grados} la conversion a Fahrenheit ${conversion}`);

// tambien usamos el innerHTML que se usa para poder escribir los resultados en la pagina "agregamos en el html por asi decirlo"
result.innerHTML = `
Los grados ingresados para la conversion son: ${grados} <br>
La conversion a Fahrenheit ${conversion}`;