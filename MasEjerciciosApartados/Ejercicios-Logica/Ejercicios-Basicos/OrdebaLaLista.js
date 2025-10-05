function ordenarMatriz(matriz, orden = 'Asc') {
    // Validar que el parámetro de orden sea válido
    if (orden !== 'Asc' && orden !== 'Desc') {
        throw new Error('El parámetro de orden debe ser "Asc" o "Desc"');
    }
    
    // Validar que todos los elementos sean números
    for (let i = 0; i < matriz.length; i++) {
        if (typeof matriz[i] !== 'number') {
            throw new Error('Todos los elementos de la matriz deben ser números');
        }
    }
    
}   