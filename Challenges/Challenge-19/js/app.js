import { Admin } from "./Admin.js";
import { Usuario } from "./clases/Usuario.js";
import { Categoria } from "./clases/Categoria.js";
import { Productos } from "./clases/Productos.js";
import { Gestion } from "./clases/Gestion.js";
import { verifyAdmin } from "./utils/auth.js";

const adminIntance = new Admin();
const almacen = new Gestion();

function cargarCategoriasEnSelect() {
  const selectCategoria = document.getElementById("producto-categoria");

  // Limpiar excepto la primera opción
  while (selectCategoria.children.length > 1) {
    selectCategoria.removeChild(selectCategoria.lastChild);
  }

  const categorias = almacen.obtenerCategorias();

  if (categorias.length === 0) {
    const mensaje = document.createElement("option");
    mensaje.textContent = "No existen categorías";
    mensaje.disabled = true;
    selectCategoria.appendChild(mensaje);
    return;
  }

  categorias.forEach((cat) => {
    const opcion = document.createElement("option");
    opcion.value = cat.id;
    opcion.textContent = cat.nombre;
    selectCategoria.appendChild(opcion);
  });
}

/*
 login
*/
const formLogin = document.getElementById("form-login");
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuarioAp = document.getElementById("login-usuario").value;
  const constrasenaAp = document.getElementById("login-password").value;

  if(verifyAdmin(usuarioAp,constrasenaAp)){
     window.location.href="admin.html";
  }{
    alert("Credenciales incorrectas");
  }


  
});

/*
 categoria
*/
const formCategoria = document.getElementById("form-categoria");
formCategoria.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("categoria-nombre").value;
  const descripcion = document.getElementById("categoria-descripcion").value;

  const categoriaIntance = new Categoria(nombre, descripcion);
  almacen.agregarCategorias(categoriaIntance);

  cargarCategoriasEnSelect()
  alert("Categoría agregada con éxito");

  formCategoria.reset();
});

/*
 producto
*/
const formProducto = document.getElementById("form-productos");

document.addEventListener("DOMContentLoaded", () => {
  cargarCategoriasEnSelect();
});

formProducto.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("producto-nombre").value;
  const precio = document.getElementById("producto-precio").value;
  const descripcion = document.getElementById("producto-descripcion").value;
  const categoriaId = document.getElementById("producto-categoria").value;
  const stock = document.getElementById("producto-stock").value;
  const imagen = document.getElementById("producto-imagen").value;

  if (!categoriaId) {
    alert("Por favor seleccione una categoria");
    return;
  }

  const productIntance = new Productos(
    nombre,
    precio,
    descripcion,
    categoriaId,
    stock,
    imagen
  );
  almacen.agregarProductos(productIntance);
  alert("Producto agregada con éxito");
  formProducto.reset();
});


document.addEventListener('DOMContentLoaded', () => {
    cargarCategoriasEnSelect();
});

