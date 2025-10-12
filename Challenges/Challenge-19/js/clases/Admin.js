
export class Admin{


    #usuario;
    #constraseña;
    constructor(usuario= "matti" ,contraseña= "60442567" ){

         this.#usuario=usuario;
         this.#constraseña=contraseña;
    }


    validarAdministrador(usuarioAp,contraseñaAp){
         return this.#usuario===usuarioAp && this.#constraseña===contraseñaAp;
    }
}