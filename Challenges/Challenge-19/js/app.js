

const Admin = new Admin();

form-login.addEventListener('submit' ,(c) =>{
    c.preventDefault();

    const usuarioAp= document.getElementById("login-usuario");
    const constraseñaAp= document.getElementById("login-password");

    if(validarAdministrador(usuarioAp,constraseñaAp)){
        window.location.href="admin.html";
    }
    else{
        alert("Credenciales incorrectas");
    }
})