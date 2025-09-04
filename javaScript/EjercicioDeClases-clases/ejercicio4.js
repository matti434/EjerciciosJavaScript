/*
Crea una clase que reciba dos propiedades
Crea una clase que haga uso de herencia
Crea una clase que haga uso de get and set
Modifica la clase con get y set para que use propiedades privadas
Utiliza los get y set y muestra sus valores
Sobrescribe un metodo de una clase que utilice herencias
*/

class ModificarGetSet{
    #legajo;

    constructor(nombre,apellido,legajo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.#legajo=legajo;
    }

    get legajo(){
        return this.#legajo;
    }

    set legajo(nuevoLegajo){
        return this.#legajo;
    }
}