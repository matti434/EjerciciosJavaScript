import { Persona } from "./script.js";

const obtenerDatos = () =>{
    
    return {
        nombre: document.getElementById('nombre').value,
        dni: document.getElementById('dni').value,
        sexo: document.querySelector('input[name="sexo"]:checked') ? document.querySelector('input[name="sexo"]:checked') : null,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value,
        anio: document.getElementById('anio').value
    }
}
const formulario = document.getElementById("formulario-datos-personales");

formulario.addEventListener("submit", (c) =>{
    c.preventDefault();
    
    const datos = obtenerDatos();
    const persona = new Persona(
        datos.nombre,
        datos.dni,
        datos.sexo,
        datos.peso,
        datos.altura,
        datos.anio
    );
      
    console.log("Persona creada")
    console.log("Generacion",persona.mostrarGeneracion());
    console.log(persona.mostrarGeneracion());
    console.log(persona.esMayorDeEdad());
})