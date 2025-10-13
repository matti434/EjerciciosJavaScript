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

   agregarProductos(producto){
    this.#productos.push(producto);
    this.#guardarProductos();
   }

   obtenerProductos(){
    return[...this.#productos];
   }

   agregarCategorias(categoria){
    this.#categorias.push(categoria);
    this.#guardarCategorias();
   }

   obtenerCategorias(){
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
        this.#guardarEnStorage('productos', this.#productos);
    }

    #guardarCategorias(){
        this.#guardarEnStorage('categorias', this.#categorias);
    }

    #cargarDesdeStorage(clave) {
        const datos = localStorage.getItem(clave);
        return datos ? JSON.parse(datos) : [];
    }
    
    #guardarEnStorage(clave, datos) {
        localStorage.setItem(clave, JSON.stringify(datos));
    }
}