//5. Agrega una funcion e invocala

const objeto = {
    propiedad1 : "propiedad 1",
    propiedad2 : "propiedad 2",
    propiedad3 : "propiedad 3",

    prop4 : function invocar(){
        console.log("funcion invocada");
    }
}

console.log(objeto.invocar());