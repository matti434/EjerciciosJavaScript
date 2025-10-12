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

    #cargarDatos() {
        this.#usuarios = this.#cargarDesdeStorage('usuarios');
        this.#productos = this.#cargarDesdeStorage('productos');
        this.#categorias = this.#cargarDesdeStorage('categorias');
    }

    #guardarUsuarios(){
        this.#guardarEnStorage('usuarios', this.#usuarios);
    }

    #guardarProductos(){
        this.#guardarEnStorage('producto', this.#productos);
    }

    #guardarCategoria(){
        this.#guardarEnStorage('categoria', this.#categorias);
    }

    #cargarDesdeStorage(clave) {
        const datos = localStorage.getItem(clave);
        return datos ? JSON.parse(datos) : [];
    }
    
    #guardarEnStorage(clave, datos) {
        localStorage.setItem(clave, JSON.stringify(datos));
    }
}