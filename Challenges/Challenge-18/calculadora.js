import { multiplicacion } from "./operacionesB/multiplicacion.js";
import { division } from "./operacionesB/division.js";
import { suma } from "./operacionesB/suma.js";
import { resta } from "./operacionesB/resta.js";

export class Calculadora {
  constructor() {
    this.display = "0";
    this.expresionActual = "";
    this.ultimoEsOperador = false; // es una flag que indica si el ultimo caracter ingresado fue un operador o numero. Evita por ejemplo 3xx2
  }

  ingresarNumero(numero) {
    console.log(
      " Número recibido:",
      numero,
      "Expresión actual:",
      this.expresionActual
    );
    //this.ultimoEsOperador significa que es true osea que el ultimo es fue operador
    if (this.display === "0" || this.ultimoEsOperador) {
      // si el ultimo fue operador empieza nuevo numero;
      this.display = numero; // remplaza lo que hay en el display
    }
    // si en el display no era 0 o operador entonces era numero
    else {
      // el ultimo seria un numero entonces concatena
      this.display += numero;
    }
    this.expresionActual += numero;
    this.ultimoEsOperador = false; // marcamos que ultimoEsOperador ahora es un numero
  }

  ingresarOperador(operador) {
    console.log(
      " Operador recibido:",
      operador,
      "Expresión actual:",
      this.expresionActual
    );

    if (!this.ultimoEsOperador && this.expresionActual !== "") {
      this.expresionActual += operador;
      this.display = operador;
      this.ultimoEsOperador = true;
    }

  }

  calcular() {
    if (this.expresionActual === "") {
      return;
    }

    try {
      const tokens = this.expresionActual.match(/(\d+\.?\d*)|([+\-x/])/g); // estoy pasando los valores de expresionActual a tokens y separando los numeros y operaciones ej 3x2+5 a "3","+","5"
      if (!tokens || tokens.length < 3) {
        this.display = this.expresionActual;
        return;
      }

      console.log("Tokens: " + tokens); // para debug: (depuacion) para encontrar y arreglar errores;
      let i = 0;
      while (i < tokens.length) {
        if (tokens[i] === "x" || tokens[i] === "/") {
          let numeroAnterior = parseFloat(tokens[i - 1]);
          let numeroSiguiente = parseFloat(tokens[i + 1]);

          let resultadoMD;

          if (tokens[i] === "x") {
            resultadoMD = multiplicacion(numeroAnterior, numeroSiguiente);
          } else {
            if (numeroSiguiente === 0) {
              throw new Error("ERROR----NO SE PUEDE DIVIDIR EN 0");
            }
            resultadoMD = division(numeroAnterior, numeroSiguiente);
          }

          // reemplaza los 3 tokens por el resultado
          tokens.splice(i - 1, 3, resultadoMD.toString());

          // reinicia el contador por que el array cambio
          i = 0;
        } else {
          i++;
        }
      }

      let resultadoFinal = parseFloat(tokens[0]);

      for (let i = 1; i < tokens.length; i += 2) {
        if (tokens[i] === "+" || tokens[i] === "-") {
          let OperadorActual = tokens[i];
          let numeroSiguiente = parseFloat(tokens[i + 1]);

          if (OperadorActual === "+") {
            resultadoFinal = suma(resultadoFinal, numeroSiguiente);
          } else {
            resultadoFinal = resta(resultadoFinal, numeroSiguiente);
          }
        }
      }

      this.display = resultadoFinal.toString();
      this.expresionActual = resultadoFinal.toString(); // muestra el ultimo resultado en el display
      this.ultimoEsOperador = false;
      return resultadoFinal;
      // Ahora si el usuario presiona "+", será "8+" en lugar de "+"
    } catch (error) {
      this.display = "error";
      this.expresionActual = "error";
      this.ultimoEsOperador = "error";
      throw error("ERROR PRECIONE OFF Y VUELVA A INTENTARLO");
    }
  }

  getExpresionCompleta() {
    this.expresionActual;
  }

  limpiar() {
    this.display = "0";
    this.expresionActual = "";
    this.ultimoEsOperador = false;
  }
}
