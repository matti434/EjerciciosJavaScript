/*Sobrescribe un metodo de una clase que utilice herencias*/


class Hija extends Padre {

      constructor(nombre,dni,legajo){
        super(nombre,dni);
        this.legajo=legajo;
    }

    MostrarDatosHija(){
        this.mostrarDato;
        console.log(`El legajo es: ${this.legajo}`);
    }
}