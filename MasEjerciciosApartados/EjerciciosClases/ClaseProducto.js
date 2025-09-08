/*
Clase Producto

Propiedades: nombre, precio, stock.

Métodos:

vender(cantidad) → descuenta del stock si hay suficiente.

reponer(cantidad) → suma al stock.

mostrarInfo() → devuelve "Producto: [nombre], Precio: $[precio], Stock: [stock]".
*/

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  vender(cantidad) {

    if (cantidad == null) {
      console.log("Cantidad no proporcionada");
      return this.stock;
    }
    // validar que sea numeri
    if (typeof cantidad !== "number" || cantidad <= 0) {
      console.log(" La cantidad debe ser un número mayor a 0");
      return this.stock; // Devolver el stock actual
    }
    if (cantidad > this.stock) {
      console.warn(` Stock insuficiente. Disponible: ${this.stock}, Intentaste vender: ${cantidad}`);
      return this.stock;
    } 
    else {
      this.stock -= cantidad;
       console.log(`Vendido: ${cantidad} unidades. Stock restante: ${this.stock}`);
      return this.stock;
    }
  }

  reponer(cantidad){
    
    console.log("El stock actual es: "+this.stock);

    if(cantidad == null){
      console.log("Cantidad no proporcionada");
      return this.stock;
    }

    if(typeof cantidad !== "number" || isNaN(cantidad) || cantidad <= 0){
      console.log(" La cantidad debe ser un numero mayor a 0");
      return this.stock;
    }

    this.stock += cantidad;
    console.log("La cantidad de stock agregada es: "+cantidad+"  el stock actualizado es:" + this.stock);
    return this.stock;
  }
}
