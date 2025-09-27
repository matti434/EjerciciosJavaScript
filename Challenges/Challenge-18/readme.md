### pasos

 -HTML:Los botones y pantalla.
 -calculadora: cerebro(logica matematica).
 -main.js: el mensajero(conecta con html con el cerebro) 

BOTON HTML -> main.js ->calculadora.js

Ejemplo con "3+4"

1. Click en "3" → main.js dice: "cerebro, ingresa el número 3"
2. Click en "+" → main.js dice: "cerebro, ingresa el operador +"  
3. Click en "4" → main.js dice: "cerebro, ingresa el número 4"
4. Click en "=" → main.js dice: "cerebro, calcula el resultado"

this.expresionActual = "3+4";  // ← Aquí se acumula todo
this.display = "4";           // ← Lo que se muestra ahora

calculadora.js

 ingresarNumero(numero) {
    console.log(" Número recibido:", numero, "Expresión actual:", this.expresionActual);
    if ((this.display === "0" || this.ultimoEsOperador)) {
      this.display = numero; // remplaza lo que hay en el display
    }
    else {
      this.display += numero;
    }
}
Display: "5" → Usuario presiona "+" → Display: "+" → Usuario presiona "3" → Display: "3" 


main.js escucha los clicks

// Cuando hay click en cualquier botón de número:
"Oye, el usuario clickeó el 3 → enviar '3' a calculadora"

// Cuando hay click en operador:
"Oye, el usuario clickeó + → enviar '+' a calculadora"

### Como mandar el "3" a la calculadora

// Paso 1: Obtener el botón
const boton3 = document.getElementById("3");

// Paso 2: Escuchar cuando se haga clic
boton3.addEventListener("click", function() {
    // Paso 3: Cuando se haga clic, mandar "3" a la calculadora
    calculadora.ingresarNumero("3");
    
    // Paso 4: Actualizar la pantalla
    display.value = calculadora.display;
});

1-verificar los tokens
2-separar todo numeros y operadores
3-encontrar los operadores "x" 0 "/" y resolverlos en el momento
- tomar un numero anterior, operador,numero siguiente
- reemplazar los 3 tokens por el resultado
4-repetir hasta que no haya mas x o /
5.luego resolver + y - de izquierda a derecha
