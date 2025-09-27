export class calculadora {
  constructor() {
    this.display = "0";
    this.expresionActual = "";
    this.ultimoEsOperador = false; // es una flag que indica si el ultimo caracter ingresado fue un operador o numero. Evita por ejemplo 3xx2
  }

  ingresarNumero(numero) {
    //this.ultimoEsOperador significa que es true osea que el ultimo es fue operador
    if ((this.display = "0" || this.ultimoEsOperador)) {
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
    if (!this.ultimoEsOperador && !this.ultimoEsOperador == "") {
      this.expresionActual += operador;
      this.display = operador;
      this.ultimoEsOperador = true;
    }
  }

  calculadora() {
    if (this.expresionActual === "") {
      return;
    }

    try {
      const tokens = this.expresionActual.match(/(\d+\.?\d*)|([+\-×/])/g);// estoy pasando los valores de expresionActual a tokens y separando los numeros y operaciones ej 3x2+5 a "3","+","5"

      if(!tokens==='0'|| tokens.length<3){
        this.display= this.expresionActual;
        return;
      }
      tokens.split(",");
      for (let i = 0; i < tokens.length; i++) {}
    } catch {}
  }
}
