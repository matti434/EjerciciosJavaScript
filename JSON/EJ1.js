const data = '{"nombre":"Matías","edad":24,"lenguajes":["Java","JS","Python"]}';
const obj = JSON.parse(data);

console.log(obj.nombre);      // Matías
console.log(obj.lenguajes[1]); // JS

