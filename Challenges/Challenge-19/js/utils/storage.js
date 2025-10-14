export const guardarEnStorage = (clave,datos) => {
     localStorage.setItem(clave,JSON.stringify(datos))
}

export const cargarDesdeStorage = (clave) => {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : [];
}

