/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apagar()
auto encendido
El auto se apagó

*/

// atributos
const auto = {

    color:"rojo",
    marca:"Toyota",
    modelo:"2024",
    encendido:false,
    
    
    encender: function() {
        if(!this.encendido){
            this.encendido=true;
            console.log("Auto encendido");
        }
        else{
            console.log("El auto ya esta encendido");
        }
    },

    apagado: function(){
        if(this.encendido){
            this.encendido=false;
            console.log("Auto apagado");
        }
        else{
            console.log("El auto ya esta apagado");
        }
    },

    estado: function(){
        return `Auto ${this.marca} ${this.modelo} de color ${this.color} esta ${this.encendido ? "Encendido" : "Apagado"}`;
    }
    
}
