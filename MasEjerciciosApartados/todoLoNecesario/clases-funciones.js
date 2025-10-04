// JSON
JSON.stringify({a:1});    // Convierte a string JSON -> '{"a":1}'
JSON.parse('{"a":1}');     // Convierte de JSON a objeto

// Date
const ahora = new Date();
ahora.getFullYear();       // Año actual
ahora.getMonth();           // Mes (0-11)
ahora.getDate();             // Día del mes
ahora.toLocaleDateString();  // Fecha en formato local
