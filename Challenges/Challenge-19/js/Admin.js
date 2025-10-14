import { Gestion } from "./clases/Gestion.js";

class adminPanel {
  constructor() {
    this.gestion = new Gestion();
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.mostrarUsuario();
    this.mostrarProducto();
    this.mostrarCategoria();
  }

  mostrarUsuario(){
    const usuario = this.gestion.obtenerUsuarios();
    const contenedor
  }
  
}
