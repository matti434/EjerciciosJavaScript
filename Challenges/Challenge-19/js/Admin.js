import { Gestion } from "./clases/Gestion.js";

class AdminPanel {
  constructor() {
    this.gestion = new Gestion();
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.mostrarUsuarios();
    this.mostrarProductos();
    this.mostrarCategorias();
  }

  // HELPER METHODS
  crearElemento(tag, className = "", textContent = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  }

  crearBoton(className, texto, onClick) {
    const button = this.crearElemento("button", className, texto);
    button.addEventListener("click", onClick);
    return button;
  }

  limpiarContenedor(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (contenedor) {
      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }
    }
    return contenedor;
  }

  mostrarMensaje(mensaje, tipo = "info") {
    alert(`${tipo.toUpperCase()}: ${mensaje}`);
  }

  // ========== MOSTRAR USUARIOS ==========
  mostrarUsuarios() {
    const usuarios = this.gestion.obtenerUsuarios();
    const contenedor = this.limpiarContenedor("tabla-usuarios");

    if (!contenedor) {
      console.error("Contenedor 'tabla-usuarios' no encontrado");
      return;
    }

    const titulo = this.crearElemento(
      "h2",
      "mb-3",
      `👤 Usuarios (${usuarios.length})`
    );
    contenedor.appendChild(titulo);

    if (usuarios.length === 0) {
      const mensaje = this.crearElemento(
        "p",
        "text-muted",
        "No hay usuarios registrados"
      );
      contenedor.appendChild(mensaje);
      return;
    }

    const tabla = this.crearElemento(
      "table",
      "table table-striped table-hover"
    );

    const thead = this.crearElemento("thead");
    const headerRow = this.crearElemento("tr");

    ["ID", "Nombre", "Email", "Rol", "Estado", "Acciones"].forEach((texto) => {
      const th = this.crearElemento("th", "", texto);
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    const tbody = this.crearElemento("tbody");

    usuarios.forEach((usuario) => {
      const fila = this.crearElemento("tr");

      // ID
      const tdId = this.crearElemento("td", "", usuario.id);
      fila.appendChild(tdId);

      // Nombre
      const tdNombre = this.crearElemento("td", "", usuario.nombre);
      fila.appendChild(tdNombre);

      // Email
      const tdEmail = this.crearElemento("td", "", usuario.email);
      fila.appendChild(tdEmail);

      // Rol
      const tdRol = this.crearElemento("td", "", usuario.rol);
      fila.appendChild(tdRol);

      // Estado
      const tdEstado = this.crearElemento("td", "", usuario.estado);
      fila.appendChild(tdEstado);

      // Acciones
      const tdAcciones = this.crearElemento("td");

      const btnEditar = this.crearBoton(
        "btn btn-warning btn-sm me-1",
        "✏️ Editar",
        () => this.editarUsuario(usuario.id)
      );

      const btnEliminar = this.crearBoton(
        "btn btn-danger btn-sm",
        "🗑️ Eliminar",
        () => this.eliminarUsuario(usuario.id)
      );

      tdAcciones.appendChild(btnEditar);
      tdAcciones.appendChild(btnEliminar);
      fila.appendChild(tdAcciones);

      tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
  }

  // ========== MOSTRAR PRODUCTOS ==========
  mostrarProductos() {
    const productos = this.gestion.obtenerProductos();
    const contenedor = this.limpiarContenedor("tabla-productos");

    if (!contenedor) {
      console.error("Contenedor 'tabla-productos' no encontrado");
      return;
    }

    const titulo = this.crearElemento(
      "h2",
      "mb-3",
      `🛒 Productos (${productos.length})`
    );
    contenedor.appendChild(titulo);

    if (productos.length === 0) {
      const mensaje = this.crearElemento(
        "p",
        "text-muted",
        "No hay productos registrados"
      );
      contenedor.appendChild(mensaje);
      return;
    }

    const tabla = this.crearElemento(
      "table",
      "table table-striped table-hover"
    );

    const thead = this.crearElemento("thead");
    const headerRow = this.crearElemento("tr");

    ["ID", "Nombre", "Precio", "Categoría", "Stock", "Acciones"].forEach(
      (texto) => {
        const th = this.crearElemento("th", "", texto);
        headerRow.appendChild(th);
      }
    );

    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    const tbody = this.crearElemento("tbody");

    productos.forEach((producto) => {
      const fila = this.crearElemento("tr");

      // ID
      const tdId = this.crearElemento("td", "", producto.id);
      fila.appendChild(tdId);

      // Nombre
      const tdNombre = this.crearElemento("td", "", producto.nombre);
      fila.appendChild(tdNombre);

      // Precio
      const tdPrecio = this.crearElemento("td", "", `$${producto.precio}`);
      fila.appendChild(tdPrecio);

      // Categoría
      const tdCategoria = this.crearElemento(
        "td",
        "",
        this.obtenerNombreCategoria(producto.categoriaId)
      );
      fila.appendChild(tdCategoria);

      // Stock
      const tdStock = this.crearElemento("td", "", producto.stock);
      fila.appendChild(tdStock);

      // Acciones
      const tdAcciones = this.crearElemento("td");

      const btnEditar = this.crearBoton(
        "btn btn-warning btn-sm me-1",
        "✏️ Editar",
        () => this.editarProducto(producto.id)
      );

      const btnEliminar = this.crearBoton(
        "btn btn-danger btn-sm",
        "🗑️ Eliminar",
        () => this.eliminarProducto(producto.id)
      );

      tdAcciones.appendChild(btnEditar);
      tdAcciones.appendChild(btnEliminar);
      fila.appendChild(tdAcciones);

      tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
  }

  // ========== MOSTRAR CATEGORÍAS ==========
  mostrarCategorias() {
    const categorias = this.gestion.obtenerCategorias();
    const contenedor = this.limpiarContenedor("tabla-categorias");

    if (!contenedor) {
      console.error("Contenedor 'tabla-categorias' no encontrado");
      return;
    }

    const titulo = this.crearElemento(
      "h2",
      "mb-3",
      `🏷️ Categorías (${categorias.length})`
    );
    contenedor.appendChild(titulo);

    if (categorias.length === 0) {
      const mensaje = this.crearElemento(
        "p",
        "text-muted",
        "No hay categorías registradas"
      );
      contenedor.appendChild(mensaje);
      return;
    }

    const tabla = this.crearElemento(
      "table",
      "table table-striped table-hover"
    );

    const thead = this.crearElemento("thead");
    const headerRow = this.crearElemento("tr");

    ["ID", "Nombre", "Descripción", "Acciones"].forEach((texto) => {
      const th = this.crearElemento("th", "", texto);
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    const tbody = this.crearElemento("tbody");

    categorias.forEach((categoria) => {
      const fila = this.crearElemento("tr");

      // ID
      const tdId = this.crearElemento("td", "", categoria.id);
      fila.appendChild(tdId);

      // Nombre
      const tdNombre = this.crearElemento("td", "", categoria.nombre);
      fila.appendChild(tdNombre);

      // Descripción
      const tdDescripcion = this.crearElemento("td", "", categoria.descripcion);
      fila.appendChild(tdDescripcion);

      // Acciones
      const tdAcciones = this.crearElemento("td");

      const btnEditar = this.crearBoton(
        "btn btn-warning btn-sm me-1",
        "✏️ Editar",
        () => this.editarCategoria(categoria.id)
      );

      const btnEliminar = this.crearBoton(
        "btn btn-danger btn-sm",
        "🗑️ Eliminar",
        () => this.eliminarCategoria(categoria.id)
      );

      tdAcciones.appendChild(btnEditar);
      tdAcciones.appendChild(btnEliminar);
      fila.appendChild(tdAcciones);

      tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
  }

  obtenerNombreCategoria(categoriaId) {
    const categorias = this.gestion.obtenerCategorias();
    const categoria = categorias.find((cat) => cat.id == categoriaId);
    return categoria ? categoria.nombre : "Sin categoría";
  }

  // ========== MÉTODOS DE ELIMINACIÓN ==========
  eliminarUsuario(id) {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
      this.gestion.eliminarUsuario(id);
      this.mostrarUsuarios();
      this.mostrarMensaje("Usuario eliminado correctamente", "success");
    }
  }

  eliminarProducto(id) {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      this.gestion.eliminarProducto(id);
      this.mostrarProductos();
      this.mostrarMensaje("Producto eliminado correctamente", "success");
    }
  }

  eliminarCategoria(id) {
    if (confirm("¿Estás seguro de eliminar esta categoría?")) {
      const productosConCategoria = this.gestion
        .obtenerProductos()
        .filter((producto) => producto.categoriaId == id);

      if (productosConCategoria.length > 0) {
        alert(
          `No puedes eliminar esta categoría porque ${productosConCategoria.length} producto(s) la usan.`
        );
        return;
      }

      this.gestion.eliminarCategoria(id);
      this.mostrarCategorias();
      this.mostrarMensaje("Categoría eliminada correctamente", "success");
    }
  }

  // ========== MÉTODOS DE EDICIÓN ==========
  editarUsuario(id) {
    const usuario = this.gestion.obtenerUsuarioPorId(id);
    if (!usuario) {
      this.mostrarMensaje("Usuario no encontrado", "error");
      return;
    }

    const nuevoNombre = prompt("Nuevo nombre:", usuario.nombre);
    const nuevoEmail = prompt("Nuevo email:", usuario.email);

    if (nuevoNombre && nuevoEmail) {
      this.gestion.editarUsuario(id, {
        nombre: nuevoNombre,
        email: nuevoEmail,
      });
      this.mostrarUsuarios();
      this.mostrarMensaje("Usuario actualizado correctamente", "success");
    }
  }

  editarProducto(id) {
    const producto = this.gestion.obtenerProductoPorId(id);
    if (!producto) {
      this.mostrarMensaje("Producto no encontrado", "error");
      return;
    }

    const nuevoNombre = prompt("Nuevo nombre:", producto.nombre);
    const nuevoPrecio = prompt("Nuevo precio:", producto.precio);

    if (nuevoNombre && nuevoPrecio) {
      this.gestion.editarProducto(id, {
        nombre: nuevoNombre,
        precio: parseFloat(nuevoPrecio),
      });
      this.mostrarProductos();
      this.mostrarMensaje("Producto actualizado correctamente", "success");
    }
  }

  editarCategoria(id) {
    const categoria = this.gestion.obtenerCategoriaPorId(id);
    if (!categoria) {
      this.mostrarMensaje("Categoría no encontrada", "error");
      return;
    }

    const nuevoNombre = prompt("Nuevo nombre:", categoria.nombre);
    const nuevaDescripcion = prompt(
      "Nueva descripción:",
      categoria.descripcion
    );

    if (nuevoNombre && nuevaDescripcion) {
      this.gestion.editarCategoria(id, {
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
      });
      this.mostrarCategorias();
      this.mostrarMensaje("Categoría actualizada correctamente", "success");
    }
  }
}

const adminPanel = new AdminPanel();
