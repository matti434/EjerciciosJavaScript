export const verifyAdmin= () => {
    const usuarioCorrecta = "admin";
    const contrasenaCorrecta = "admin123";

    return ( usuario, contrasena) =>{
       return usuario === usuarioCorrecta && contrasena === contrasenaCorrecta;
    }
}

