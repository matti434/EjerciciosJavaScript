/*
Clase CuentaBancaria

Propiedades: titular, saldo.

Métodos:

depositar(cantidad) → suma al saldo.

retirar(cantidad) → resta del saldo (si hay fondos).

Prueba depositando y retirando dinero.
*/

class CuentaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad; // this.saldo = this.saldo + cantidad
      console.log(` Depositado: $${cantidad}. Nuevo saldo: $${this.saldo}`);
    } else {
      console.log(" La cantidad a depositar debe ser positiva");
    }
    return this.saldo;
  }

  retirar(cantidad) {
    if (cantidad > 0) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad; // this.saldo = this.saldo - cantidad
        console.log(` Retirado: $${cantidad}. Nuevo saldo: $${this.saldo}`);
      } else {
        console.log(" Fondos insuficientes");
      }
    } else {
      console.log(" La cantidad a retirar debe ser positiva");
    }
    return this.saldo;
  }

 
  mostrarSaldo() {
    console.log(`${this.titular}: Saldo actual: $${this.saldo}`);
  }
}


const persona1 = new CuentaBancaria("Matias", 2000000);
const persona2 = new CuentaBancaria("Flor", 1000000);

persona1.mostrarSaldo();

persona1.depositar(500000);
persona1.retirar(1000000);
persona1.retirar(2000000);

persona2.mostrarSaldo();
persona2.depositar(-100);
persona2.retirar(1500);
