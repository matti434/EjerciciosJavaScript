// sirve para veriguar si todos los elementos de ese array cumple una condicion
// every - cada

const edades = [18, 21, 25, 30];

const todosMayores = edades.every((edades) => edades>=18);

console.log(todosMayores);

// true si todo los elementos cumplen la condicion
// false si al menos un elemento no cumple