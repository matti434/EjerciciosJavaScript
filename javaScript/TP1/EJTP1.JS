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


