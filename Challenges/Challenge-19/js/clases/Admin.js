
export class Admin{


    #usuario;
    #constrasena;
    constructor(usuario= "matti" ,contrasena= "60442567" ){

         this.#usuario=usuario;
         this.#constrasena=contrasena;
    }


    validarAdministrador(usuarioAp,contrasenaAp){
         return this.#usuario===usuarioAp && this.#constrasena===contrasenaAp;
    }
}