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


