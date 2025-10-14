import { guardarEnStorage, cargarDesdeStorage } from "../utils/storage.js";
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

  obtenerUsuarioPorId(id) {
    return this.#usuarios.find((usuario) => usuario.id == id);
  }
  obtenerProductoPorId(id) {
    return this.#productos.find((productos) => productos.id == id);
  }
  obtenerCategoriaPorId(id) {
    return this.#categorias.find((categorias) => categorias.id == id);
  }

  eliminarUsuario(id) {
    this.#usuarios = this.#usuarios.filter((usuario) => usuario.id != id);
    this.#guardarUsuarios();
    // Esto mantiene todos los usuarios excepto el que queremos eliminar
  }

  eliminarProducto(id) {
    this.#productos = this.#productos.filter((producto) => producto.id != id);
    this.#guardarProductos();
  }

  eliminarCategoria(id) {
    this.#categorias = this.#categorias.filter(
      (categoria) => categoria.id != id
    );
    this.#guardarCategorias();
  }

  // edicion

  editarUsuario(id, nuevosDatos) {
    const usuarioIndex = this.#usuarios.findIndex(
      (usuario) => usuario.id == id
    );
    if (usuarioIndex !== -1) {
      this.#usuarios[usuarioIndex] = {
        ...this.#usuarios[usuarioIndex],
        ...nuevosDatos,
      };
      this.#guardarUsuarios();
    }
  }

  editarProducto(id, nuevosDatos) {
    const productoIndex = this.#productos.findIndex(
      (producto) => producto.id == id
    );
    if (productoIndex !== -1) {
      this.#productos[productoIndex] = {
        ...this.#productos[productoIndex],
        ...nuevosDatos,
      };
      this.#guardarProductos();
    }
  }

  editarCategoria(id, nuevosDatos) {
    const categoriaIndex = this.#categorias.findIndex(
      (categoria) => categoria.id == id
    );
    if (categoriaIndex !== -1) {
      this.#categorias[categoriaIndex] = {
        ...this.#categorias[categoriaIndex],
        ...nuevosDatos,
      };
      this.#guardarCategorias();
    }
  }
}
