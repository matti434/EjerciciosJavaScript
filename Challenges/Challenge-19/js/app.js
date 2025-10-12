import { Admin } from "./clases/Admin.js"; 

const adminIntance = new Admin();

const formLogin = document.getElementById("form-login");

formLogin.addEventListener('submit' ,(e) =>{
    e.preventDefault();

    const usuarioAp= document.getElementById("login-usuario").value;
    const constraseñaAp= document.getElementById("login-password").value;

    if(adminIntance.validarAdministrador(usuarioAp,constraseñaAp)){
        window.location.href="admin.html";
    }
    else{
        alert("Credenciales incorrectas");
    }
})

