// Función básica de validación de email con expresión regular
function validarEmailBasico(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función avanzada de validación de email
function validarEmailAvanzado(email) {
    if (typeof email !== 'string') {
        throw new Error("El email debe ser una cadena de texto");
    }
    
    if (email.trim() === "") {
        throw new Error("El email no puede estar vacío");
    }
    
    // Expresión regular más completa
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return regex.test(email);
}

// Función que valia el dominio del email
function validarDominioEmail(email, dominiosPermitidos = []) {
    if (!validarEmailAvanzado(email)) {
        return false;
    }
    
    // Si no se especifican dominios, cualquier dominio válido es aceptado
    if (dominiosPermitidos.length === 0) {
        return true;
    }
    
    // Extraer el dominio del email
    const dominio = email.split('@')[1].toLowerCase();
    
    // Verificar si el dominio está en la lista de permitidos
    return dominiosPermitidos.some(dom => dom.toLowerCase() === dominio);
}

// Función para verificar si un email es desechable (usando API pública)
async function esEmailDesechable(email) {
    try {
        const respuesta = await fetch(`https://open.kickbox.com/v1/disposable/${encodeURIComponent(email)}`);
        const datos = await respuesta.json();
        return datos.disposable === true;
    } catch (error) {
        console.error("Error al verificar email desechable:", error);
        return false;
    }
}

// Función completa de validación con todas las comprobaciones
async function validarEmailCompleto(email, opciones = {}) {
    const {
        verificarDesechable = false,
        dominiosPermitidos = [],
        longitudMinima = 5,
        longitudMaxima = 254
    } = opciones;
    
    // Validaciones básicas
    if (typeof email !== 'string') {
        return { valido: false, error: "El email debe ser una cadena de texto" };
    }
    
    const emailTrim = email.trim();
    
    if (emailTrim === "") {
        return { valido: false, error: "El email no puede estar vacío" };
    }
    
    if (emailTrim.length < longitudMinima) {
        return { valido: false, error: `El email es demasiado corto (mínimo ${longitudMinima} caracteres)` };
    }
    
    if (emailTrim.length > longitudMaxima) {
        return { valido: false, error: `El email es demasiado largo (máximo ${longitudMaxima} caracteres)` };
    }
    
    // Validación de formato
    if (!validarEmailAvanzado(emailTrim)) {
        return { valido: false, error: "El formato del email no es válido" };
    }
    
    // Validación de dominio específico
    if (dominiosPermitidos.length > 0 && !validarDominioEmail(emailTrim, dominiosPermitidos)) {
        return { valido: false, error: "El dominio del email no está permitido" };
    }
    
    // Verificación de email desechable (opcional)
    if (verificarDesechable) {
        const esDesechable = await esEmailDesechable(emailTrim);
        if (esDesechable) {
            return { valido: false, error: "No se permiten emails desechables" };
        }
    }
    
    return { valido: true, error: null, email: emailTrim };
}

// Ejemplos de uso
console.log("=== Validación Básica ===");
console.log("usuario@ejemplo.com:", validarEmailBasico("usuario@ejemplo.com")); // true
console.log("usuario@com:", validarEmailBasico("usuario@com")); // false
console.log("usuario@.com:", validarEmailBasico("usuario@.com")); // false
console.log("@ejemplo.com:", validarEmailBasico("@ejemplo.com")); // false

console.log("\n=== Validación de Dominio ===");
console.log("usuario@gmail.com con dominios [gmail.com, hotmail.com]:", 
    validarDominioEmail("usuario@gmail.com", ["gmail.com", "hotmail.com"])); // true
console.log("usuario@yahoo.com con dominios [gmail.com, hotmail.com]:", 
    validarDominioEmail("usuario@yahoo.com", ["gmail.com", "hotmail.com"])); // false

console.log("\n=== Validación Completa (ejemplo) ===");
// Uso con async/await
async function ejemploValidacionCompleta() {
    const resultado1 = await validarEmailCompleto("  usuario@gmail.com  ", {
        verificarDesechable: true,
        dominiosPermitidos: ["gmail.com", "hotmail.com"]
    });
    console.log("usuario@gmail.com:", resultado1);
    
    const resultado2 = await validarEmailCompleto("usuario@desechable.com", {
        verificarDesechable: true
    });
    console.log("usuario@desechable.com:", resultado2);
}

// Ejecutar el ejemplo
ejemploValidacionCompleta().catch(console.error);

// Función adicional: Extraer nombre de usuario y dominio
function extraerPartesEmail(email) {
    if (!validarEmailBasico(email)) {
        return null;
    }
    
    const [usuario, dominio] = email.split('@');
    return { usuario, dominio };
}

console.log("\n=== Extraer Partes del Email ===");
console.log("usuario@ejemplo.com:", extraerPartesEmail("usuario@ejemplo.com"));