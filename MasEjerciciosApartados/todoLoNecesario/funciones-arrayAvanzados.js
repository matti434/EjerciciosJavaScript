// every() y some()
[1, 2, 3].every(n => n > 0); // true si TODOS cumplen condición
[1, 2, 3].some(n => n > 2);  // true si ALGUNO cumple condición

// flat() y flatMap()
[1, [2, 3]].flat();          // [1, 2, 3] (aplana arrays anidados)
["hola", "adios"].flatMap(p => p.split(""));
// ["h","o","l","a","a","d","i","o","s"]
