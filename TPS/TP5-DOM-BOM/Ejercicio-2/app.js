import { Persona } from "./script";

const obtenerDatos = () =>{
    return {
        nombre: document.getElementById('nombre').value,
        dni: document.getElementById('dni').value,
        sexo: querySelector('input[name="sexo"]:checked'),
        altura: document.getElementById('altura').value,
        anio: document.getElementById('anio').value
    }
}
const formulario = document.getElementById("formulario-datos-personales");

formulario.AddEventListener("submit", (c) =>{
    c.preventDefault();
    
    const datos = obtenerDatos();
    const persona = new Persona(
        datos.nombre,
        datos.dni,
        datos.se
    );
      

    
})