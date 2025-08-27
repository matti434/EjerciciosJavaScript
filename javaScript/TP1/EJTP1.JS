function verificar() {
  const codigo = document.getElementById("codigo").value.trim();
  const resultado = document.getElementById("resultado");

  // Respuesta correcta esperada
  const correcto = 'alert("un mensaje")';

  // Limpiar salida
  resultado.innerText = "";

  if (codigo === correcto) {
    resultado.innerText = "✅ Correcto: tu código muestra el alert solicitado.";
  } else {
    resultado.innerText = "❌ Incorrecto: revisa tu sintaxis.";
  }
}

function verificarHelloWorld() {
  const codigo = document.getElementById("codigoEJ2").value.trim();
  const resultado = document.getElementById("resultadoEJ2");

  // Respuesta correcta esperada
  const correcto = 'document.write("Hello World")';

  // Limpiar salida
  resultado.innerText = "";

  if (codigo === correcto) {
    resultado.innerText = "✅ Correcto: tu código muestra el mensaje solicitado.";
  } else {
    resultado.innerText = "❌ Incorrecto: revisa tu sintaxis.";
  }
}

function verificarSuma(){
  //Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar
  //3 + 5
  const codigo= document.getElementById("codigoEJ3").value.trim();
  const resultado = document.getElementById("resultadoEJ3");

  const correcto = `document.write(3+5);`

  resultado.innerText = "";

  if(codigo === correcto){
    resultado.innerText = "✅ Correcto: tu código muestra el mensaje solicitado.";
  }
  else{
    resultado.innerText= "❌ Incorrecto: revisa tu sintaxis.";
  }
}

function verificarPromptUsuario(){
  /*
  Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y
            escriba un texto que diga
            «Hola nombreUsuario»
            Ejemplo:

            input: Coder
            Output: Hola Coder
  */
   const codigo= document.getElementById("codigoEJ4").value.trim();
   const resultado= document.getElementById("resultadoEJ4");

   const correcto= `let nombre = prompt("Ingrese el nombre de usuario");`

}


