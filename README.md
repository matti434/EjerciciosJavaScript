![Blogger](https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white)
![Dev.to blog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# **JavaScript y Markdown** 

### 📚 Ruta de aprendizaje rápida en JavaScript y uso de Markdown

---

Bienvenido/a a este espacio donde iré compartiendo mis **proyectos y ejercicios** desarrollados mientras aprendo **JavaScript** y mejoro mis habilidades en **Markdown**.

⚡ **Objetivo:**  
- Practicar conceptos clave de JavaScript.  
- Presentar el código y resultados de forma clara en este README.  
- Dejar registro de mi progreso para futuras mejoras.  

💡 **Nota:**  
Estos ejercicios fueron realizados como parte de un aprendizaje rápido, por lo que el enfoque principal fue **entender la lógica** y no tanto el diseño. En el futuro, iré actualizando y mejorando la presentación, el código y las explicaciones.

---

## 📂 Proyectos y Ejercicios

Aquí encontrarás las carpetas con los trabajos organizados por temas:

- **Challenge 12** → Ejercicios específicos de un reto _Práctica de Condicionales y Bucles_.  
- **Ejercicios Rolling** → Actividades prácticas de Rolling Code.  
- **Programas** → Programas realizados.  
- **TP1** → Primer trabajo práctico _Practica de variables y estructuras condicionales (if):_.  

---

✏️ *Última actualización:* Agosto 2025  


## Javascript
# 🚀 Fundamentos de JavaScript

Guía rápida desde cero hasta condicionales y bucles.  
*Perfecto para principiantes!*  

---

## 📌 **1. Variables y Constantes**
```javascript
// Declaración con 'let' (modificable)
let nombre = "Luis";
nombre = "Carlos"; // ✅ Se puede cambiar

// Declaración con 'const' (constante)
const PI = 3.1416;
PI = 3; // ❌ Error: no se puede reasignar

 
 2. Tipos de Datos Básicos


// String
let saludo = "Hola Mundo";

// Number
let edad = 25;

// Boolean
let esProgramador = true;

// Array (lista)
let colores = ["rojo", "verde", "azul"];

// Object (objeto)
let usuario = { 
  nombre: "Ana", 
  edad: 30 
};

 3. Operadores

let suma = 10 + 5;   // 15
let resta = 20 - 3;  // 17
let modulo = 10 % 3; // 1 (residuo)

Comparación

5 == "5";   // true (solo valor)
5 === "5";  // false (valor y tipo)
10 > 5;     // true

4. Condicionales

let edad = 18;

--if / else--

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

let dia = "Lunes";

--switch--

switch (dia) {
  case "Lunes":
    console.log("¡Inicio de semana!");
    break;
  default:
    console.log("Otro día");
}

5. Bucles

for (let i = 0; i < 5; i++) {
  console.log("Iteración: " + i);
}
// Resultado: 0, 1, 2, 3, 4

--while--

let contador = 0;

while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}
// Resultado: 0, 1, 2

--for...of (para arrays)--
let frutas = ["🍎", "🍌", "🍊"];

for (let fruta of frutas) {
  console.log(fruta);
}
// Resultado: 🍎, 🍌, 🍊
```

## Markdown

# 📘 Guía de Markdown

En este documento aprenderás lo básico para escribir en **Markdown** y aplicarlo en tus proyectos, especialmente en GitHub.

---

## 1️⃣ Estilos de texto

### *Cursiva*

Usa un guion bajo `_` o un asterisco `*` para poner el texto en cursiva.

_este texto está en cursiva_

**este texto está en negrita**

~~este texto está tachado~~

#### Lista ordenada y desordenada

- Naranja
  - Naranja 2
- Manzana
  - Manzana 2
- Etc.

1. Manzana
2. Naranja
3. Etc.

> Esto es una cita en Markdown

<!--link-->
### Enlaces
[Texto del enlace](URL)

[faztweb.com](https://www.faztweb.com)

[github.com](https://github.com/matti434 "my Github")

<!--citas-->

> this is a quote

---

---

<!--Para codigo-->
### Para codigo leve

`console.log('hello world')`
---
---

### Usa triple comilla invertida y especifica el lenguaje para resaltado de sintaxis.

```javascript
function menuInteractivo() {
  alert("1-si quiere sumar // 2-si quiere restar // 3-si quiere salir");
  let opciones = parseInt(prompt("Ingrese la opcion"));

  while (opciones !== 3) {
    if (opciones == 1) {
      let numero = parseInt(prompt("ingrese el primer numero:"));
      let numero2 = parseInt(prompt("ingrese el segundo numero:"));
      let suma = numero + numero2;
      alert(`La suma da ${suma}`);
    } else if (opciones == 2) {
      let numero = parseInt(prompt("ingrese el primer numero:"));
      let numero2 = parseInt(prompt("ingrese el segundo numero:"));
      let resta = numero - numero2;
      alert(`La resta da ${resta}`);
    } else {
      alert(`La opcion ingresada es incorrecta vuelva a intentarlo`);
    }
    opciones = parseInt(prompt("Ingrese la opcion"));
  }
}
```

```python
print("hello world)
```

```html
<h1>helloworld</h1>
```

 <!--tables-->

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Cell 2   | Cell 3   |
| Row 2    | Cell 5   | Cell 6   |
| Row 3    | Cell 8   | Cell 9   |




En un README de GitHub, Markdown puro no tiene opciones para cambiar el tamaño o posición de una imagen, pero podés usar HTML directamente, porque GitHub permite mezclar HTML con Markdown.



