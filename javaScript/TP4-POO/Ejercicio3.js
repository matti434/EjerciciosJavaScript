/*
Rectángulos
Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

*/

class rectangulos {

    constructor(alto,ancho){
        //this hace referencia a la instancia actual del objeto
        this.alto=alto;
        this.ancho=ancho;
    }
    
    modifiarAlto(){
        let nuevoAlto=prompt("Ingrese el alto:");
        if(isNaN(nuevoAlto)){
           alert("Ingrese un valor valido");
           return;
        }
        if(nuevoAlto.trim() === ""){
            alert("Ingrese un valor valido");
            return;
        }        
        else{
            this.alto=nuevoAlto;
        }

    }



}