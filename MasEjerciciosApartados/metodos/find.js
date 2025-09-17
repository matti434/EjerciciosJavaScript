const personas = [
    {nombre: "Juan", edad: 25},
    {nombre: "Ana", edad: 30},
    {nombre: "Carlos", edad: 20}
];

const mayor = personas.find(persona => persona.edad > 28);

console.log(mayor);