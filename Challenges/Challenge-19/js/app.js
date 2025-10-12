import { Admin } from "./clases/Admin.js";
import { Usuario } from "./clases/Usuario.js";
import { Categoria } from "./clases/Categoria.js";
import { Productos } from "./clases/Productos.js";
import { Gestion } from "./clases/gestion.js";

const adminIntance = new Admin();
const cofre = new Gestion();
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

const categoriaIntance = new Categoria();

const formCategoria= document.getElementById("form-categoria");

formCategoria.addEventListener("submit" ,(e) =>{
    e.preventDefault();

    categoriaIntance.nombre=document.getElementById("categoria-nombre");
    categoriaIntance.descripcion=document.getElementById("categoria-descripcion");

    cofre
})


