class Hija extends Padre{

    constructor(nombre,dni,legajo){
        super(nombre,dni);
        this.legajo=legajo;
    }

    mostrarDato(){
        console.log(`El nombre: ${this.nombre} el dni: ${this.dni} el legajo es: ${this.legajo}`);
    }
}