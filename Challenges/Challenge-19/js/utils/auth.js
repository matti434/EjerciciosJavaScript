export const verifyAdmin= (usuario,contrasena) => {
    const credentials = {usuario: "admin",contrasena:"admin123"};
    return usuario=== credentials.usuario && contrasena===credentials.contrasena;
}