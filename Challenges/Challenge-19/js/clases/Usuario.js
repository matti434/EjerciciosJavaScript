/*Usuarios

ID

Nombre completo

Email

Rol (admin / cliente)

Estado (activo / inactivo)
*/ 

export class Usuario{

    constructor(nombreCompleto,email,rol,estado){
        this.id=Date.now() + Math.random();
        this.nombreCompleto=nombreCompleto;
        this.email=email;
        this.rol=rol;
        this.estado=estado;
    }

}