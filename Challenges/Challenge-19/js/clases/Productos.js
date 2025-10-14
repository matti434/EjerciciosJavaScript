/*🛒 Productos
ID
Nombre
Descripción
Precio
Categoría
Imagen (URL o base64)
Stock
*/

export class Productos{
    
    constructor(nombre,descripcion,precio,categoriaId,imagen,stock){
       this.id=Date.now() + Math.random();
       this.nombre=nombre;
       this.precio=precio;
       this.descripcion=descripcion;
       this.categoriaId=categoriaId;
       this.imagen=imagen;
       this.stock=stock;
    }

    
}
