
class Admin{


    #usuario;
    #constrasña;
    constructor(usuario= "matti" ,contraseña= "60442567" ){

         this.#usuario=usuario;
         this.#constrasña=usuario;
    }


    validarAdministrador(usuarioAp,contraseñaAp){
         return this.#usuario===usuarioAp && this.#constrasña===contraseñaAp;
    }
}