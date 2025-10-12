export class Gestion{

   #usuarios=[];
   #productos=[];
   #categorias=[];

   constructor(){
     this.#cargarDatos();
   }

   agregarUsuario(usuario){
    this.#usuarios.push(usuario);
    this.#guardarUsuarios();
   }

   obtenerUsuarios(){
    return[...this.#usuarios];
   }

   agregarProducto(producto){
    this.#productos.push(producto);
    this.#guardarProductos();
   }

   obtenerProducto(){
    return[...this.#productos];
   }

   agregarCategoria(categoria){
    this.#categorias.push(categoria);
    this.#guardarCategoria();
   }

   obtenerCategoria(){
    return[...this.#categorias];
   }

  
}