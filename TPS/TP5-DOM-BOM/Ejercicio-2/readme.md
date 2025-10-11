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

### Por que usar 'SUBMIT' y no 'CLICK'

```
// ❌ Solo captura el CLICK, no el envío real del formulario
boton.addEventListener('click', () => {
    // Pero el formulario igual se envía y recarga la página
    // Puede saltarse validaciones HTML
});

Con 'submit' (correcto):

// ✅ Captura el EVENTO DE ENVÍO del formulario
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Detiene el envío normal
    // Ahora tú controlas todo
});
```

### Que hace preventDefault()?

1. Usuario hace submit
2. Navegador: "¡Ah! Voy a enviar datos al servidor"
3. Recoge los datos del formulario
4. LOS ENVÍA a la URL del `action` (o recarga si no hay action)
5. ✅ Página se RECARGA - pierdes todo tu JavaScript

Con preventDefault():

1. Usuario hace submit  
2. Navegador: "¡Ah! Voy a enviar datos al servidor"
3. Tu JavaScript: "¡Espera! preventDefault()"
4. Navegador: "OK, tú te encargas"
5. ✅ Página NO se recarga - mantienes el control.


#### Como saber que opcion se selecciono en sexo

Opción 1: Usar checked

// ¿Qué devuelve esto?
```
document.getElementById('sexo-m').checked
document.getElementById('sexo-f').checked
```
Opción 2: Usar querySelector con atributos
```
// ¿Puedes seleccionar el radio button que tenga checked="true"?
document.querySelector('input[name="sexo"]:checked')
```

#### Que es novalidate?