import { guardarEnStorage, cargarDesdeStorage } from "../utils/storege";
export class Gestion {
  #usuarios = [];
  #productos = [];
  #categorias = [];

  constructor() {
    this.#cargarDatos();
  }

  agregarUsuario(usuario) {
    this.#usuarios.push(usuario);
    this.#guardarUsuarios();
  }

  obtenerUsuarios() {
    return [...this.#usuarios];
  }

  agregarProductos(producto) {
    this.#productos.push(producto);
    this.#guardarProductos();
  }

  obtenerProductos() {
    return [...this.#productos];
  }

  agregarCategorias(categoria) {
    this.#categorias.push(categoria);
    this.#guardarCategorias();
  }

  obtenerCategorias() {
    return [...this.#categorias];
  }

  #cargarDatos() {
    this.#usuarios = cargarDesdeStorage("usuarios");
    this.#productos = cargarDesdeStorage("productos");
    this.#categorias = cargarDesdeStorage("categorias");
  }

  #guardarUsuarios() {
    guardarEnStorage("usuarios", this.#usuarios);
  }

  #guardarProductos() {
    guardarEnStorage("productos", this.#productos);
  }

  #guardarCategorias() {
    guardarEnStorage("categorias", this.#categorias);
  }
}
