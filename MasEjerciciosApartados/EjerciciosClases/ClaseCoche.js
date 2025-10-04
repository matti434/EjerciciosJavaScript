/*
Clase Coche

Crea una clase Coche con propiedades marca, modelo, año.

Agrega un método detalles() que devuelva:
"Coche: marca modelo (año)".

Crea al menos dos instancias.
*/


class Coche{

    constructor(marca,modelo,año){
        this._marca=marca;
        this._modelo=modelo;
        this._año=año;
    }

    detalles(){
        console.log(`Coche: ${this._marca} modelo: ${this._modelo} del año: ${this._año}`);
    }
}

const auto1 = new Coche("Toyota", "Corolla", 2024);
const auto2 = new Coche("Ford", "Mustang", 2023);

auto1.detalles();
auto2.detalles();