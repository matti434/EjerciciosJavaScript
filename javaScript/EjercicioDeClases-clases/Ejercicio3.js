/*
Crea una clase que reciba dos propiedades
Crea una clase que haga uso de herencia
Crea una clase que haga uso de get and set
Modifica la clase con get y set para que use propiedades privadas
Utiliza los get y set y muestra sus valores
Sobrescribe un metodo de una clase que utilice herencias
*/

class UsoGetSet{
    constructor(nombre,apellido,dni){
       this.nombre=nombre;
       this.apellido=apellido;
       this.dni=dni;
    }

    get nombre(){
        return this.nombre;
    }
    set nombre(nuevoDni){
        this.nombre=nombre;
    }
    
}