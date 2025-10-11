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
    
    constructor(id,nombre,descripcion,precio,categoria,imagen,stock){
       this.id=id;
       this.nombre=nombre;
       this.descripcion=descripcion;
       this.precio=precio;
       this.categoria=categoria;
       this.imagen=imagen;
       this.stock=stock;
    }

    
}
