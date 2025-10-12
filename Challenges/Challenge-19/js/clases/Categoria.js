/*🏷️ Categorías

ID

Nombre

Descripción
*/

export class Categoria{

    constructor(nombre,descripcion){
        this.id= Date.now() + Math.random();
        this.nombre=nombre;
        this.descripcion=descripcion;
    }

    
}