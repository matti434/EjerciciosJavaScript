//4. Elimina una de las 3 primeras propiedades

const objeto = {
    propiedad1 : "propiedad 1",
    propiedad2 : "propiedad 2",
    propiedad3 : "propiedad 3"
}

delete objeto.propiedad1;

console.log(objeto);