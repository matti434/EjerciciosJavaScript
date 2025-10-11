## 📄 Explicaciones del código

### 1. ¿Cómo exportar? ¿Qué exportamos?

Tengo la clase `Persona`, pero también un array de generaciones. Aquí es importante decidir qué necesita ser usado en `app.js` y qué es interno de `Persona`.

```js
const generaciones = [
  { nombre: "Generación Z", desde: 1994, hasta: 2010, rasgo: "Irreverencia" },
  { nombre: "Milenials", desde: 1981, hasta: 1993, rasgo: "Frustración" },
  { nombre: "Generación X", desde: 1969, hasta: 1980, rasgo: "Obsesión por el éxito" },
  { nombre: "Baby Boom", desde: 1949, hasta: 1968, rasgo: "Ambición" },
  { nombre: "Silent Generation", desde: 1930, hasta: 1948, rasgo: "Austeridad" },
];

export class Persona {
  constructor(nombre, dni, sexo, peso, altura, anio) {
    this.nombre = nombre;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anio = parseInt(anio); // Convertir a número directamente
  }
}


// ❌ Menos eficiente - elementos guardados que podrían cambiar
const inputNombre = document.getElementById('nombre');
const inputDni = document.getElementById('dni');
// ... etc

// ✅ Más limpio - obtienes valores frescos
const obtenerDatos = () => {
  return {
    nombre: document.getElementById('nombre').value,
    dni: document.getElementById('dni').value,
    // ... etc
  };
};
```


