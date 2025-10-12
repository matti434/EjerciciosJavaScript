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
    
    constructor(nombre,descripcion,precio,categoria,imagen,stock){
       this.id=Date.now() + Math.random();
       this.nombre=nombre;
       this.descripcion=descripcion;
       this.precio=precio;
       this.categoria=categoria;
       this.imagen=imagen;
       this.stock=stock;
    }

    
}
