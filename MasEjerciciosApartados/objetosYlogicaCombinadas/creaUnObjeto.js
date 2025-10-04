/*
Crea un objeto coche con marca, modelo, año y un método detalles() que devuelva un string con esa información.
*/

const coche = {
    marca: "BMW",
    modelo: "Vampire",
    año: "2023",

    
    detalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}
