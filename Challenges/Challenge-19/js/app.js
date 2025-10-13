import { Admin } from "./clases/Admin.js";
import { Usuario } from "./clases/Usuario.js";
import { Categoria } from "./clases/Categoria.js";
import { Productos } from "./clases/Productos.js";
import { Gestion } from "./clases/Gestion.js";

const adminIntance = new Admin();
const almacen = new Gestion();


const formLogin = document.getElementById("form-login");
formLogin.addEventListener('submit' ,(e) =>{
    e.preventDefault();

    const usuarioAp= document.getElementById("login-usuario").value;
    const constrasenaAp= document.getElementById("login-password").value;

    if(adminIntance.validarAdministrador(usuarioAp,constrasenaAp)){
        window.location.href="admin.html";
    }
    else{
        alert("Credenciales incorrectas");
    }
})


const formCategoria= document.getElementById("form-categoria");
formCategoria.addEventListener("submit" ,(e) =>{
    e.preventDefault();
    
    const nombre = document.getElementById("categoria-nombre").value;
    const descripcion = document.getElementById("categoria-descripcion").value;
    
    const categoriaIntance = new Categoria(nombre,descripcion);
    almacen.agregarCategorias(categoriaIntance);
    alert("Categoría agregada con éxito");

    formCategoria.reset();
});

const formProduct= document.getElementById("form-productos");
formProduct.addEventListener("submit" ,(e) =>{
    e.preventDefault();
    
    const nombre = document.getElementById("producto-nombre").value;
    const precio = document.getElementById("producto-precio").value;
    const descripcion = document.getElementById("producto-descripcion").value;
    
    const productIntance = new Categoria(nombre,precio,descripcion);
    almacen.agregarProductos(productIntance);
    alert("Producto agregada con éxito");

    formCategoria.reset();
});

const formProducto= document.getElementById("form-productos");
formProducto.addEventListener("submit" ,(e) =>{
    e.preventDefault();
    
    const nombre = document.getElementById("producto-nombre").value;
    const precio = document.getElementById("producto-precio").value;
    const descripcion = document.getElementById("producto-descripcion").value;

    cargarCategoriaEnSelect(){
        const selectCategoria = document.getElementById("producto-categoria");

          while(selectCategoria.children.length){
            selectCategoria.removeChild(selectCategoria.lastChild);
          }

          const categoria= almacen.obtenerCategorias();

          if(categoria.length === 0){
            const mensaje = document.createElement('opcion');
            mensaje.textContent= "No existen categorias";
            mensaje.disabled=true;
            selectCategoria.appendChild(mensaje);
            return;
          }

          categoria.forEach(cat => {
            const opcion = document.createElement('opcion');
            opcion.value=cat.id;
            opcion.textContent=cat.nombre;
            selectCategoria.appendChild(opcion);
          })
    
    const categoria = 
    const stock = document.getElementById("producto-stock").value;
    const productIntance = new Categoria(nombre,precio,descripcion);
    almacen.agregarProductos(productIntance);
    alert("Producto agregada con éxito");

    formCategoria.reset();
});




