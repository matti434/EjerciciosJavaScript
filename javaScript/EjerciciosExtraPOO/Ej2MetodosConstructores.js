/*
Clase Rectangulo con propiedades ancho y alto.

Métodos:

area() → devuelve el área.

perimetro() → devuelve el perímetro.
*/

class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }

  perimetro() {
    return this.ancho * 2 + this.alto * 2;
  }
}

const ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
const alto = parseFloat(prompt("Ingrese el alto del rectángulo:"));

const areaPerimetro = new Rectangulo(ancho, alto);
areaPerimetro.area();
areaPerimetro.perimetro();

/*
Clase CuentaBancaria con propiedades titular, saldo.

Métodos:
 
depositar(monto)

retirar(monto) (validar que no se quede en negativo).
*/

class CuentaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Depositado: $${monto}. Saldo total: $${this.saldo}`);
    } else {
      console.log("El monto a depositar debe ser positivo");
    }
  }

  retirar(retiro) {
    if (this.saldo >= 0) {
      this.saldo -= retiro;
      console.log(
        `El monto retirado es ${retiro} el saldo total de la cuenta es: ${this.saldo}`
      );
      return;
    } else {
      console.log(`La cuenta no puede dejarse en negativo`);
    }
  }

  mostrarSaldo() {
    console.log(`Saldo actual de ${this.titular}: $${this.saldo}`);
  }
}
const titular = prompt("Ingrese el nombre del titular:");
const monto = prompt(
  "Ingrese la cantidad de dinero que desea ingresar a la cuenta"
);
const retiro = prompt(
  "Ingrese la cantidad de dinero que desea retirar de cuenta"
);

const tramite = new CuentaBancaria(monto, retiro);
tramite.depositar(monto);
tramite.retirar(retiro);
tramite.mostrarSaldo();
