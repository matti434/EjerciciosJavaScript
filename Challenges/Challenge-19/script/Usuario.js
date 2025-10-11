/*Usuarios

ID

Nombre completo

Email

Rol (admin / cliente)

Estado (activo / inactivo)
*/ 

export class Usuario{

    constructor(id,nombreCompleto,email,rol,estado){
        this.id=id;
        this.nombreCompleto=nombreCompleto;
        this.email=email;
        this.rol=rol;
        this.estado=estado;
    }

}