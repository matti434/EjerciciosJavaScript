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
    

    const matrizOrdenada = [...matriz];
    
    
    const n = matrizOrdenada.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            
            let necesitaIntercambio = false;
            
            if (orden === 'Asc') {
                necesitaIntercambio = matrizOrdenada[j] > matrizOrdenada[j + 1];
            } else {
                necesitaIntercambio = matrizOrdenada[j] < matrizOrdenada[j + 1];
            }
            
            
            if (necesitaIntercambio) {
                const temp = matrizOrdenada[j];
                matrizOrdenada[j] = matrizOrdenada[j + 1];
                matrizOrdenada[j + 1] = temp;
            }
        }
    }
    
    return matrizOrdenada;
}

console.log(ordenarMatriz([2, 4, 6, 8, 9], 'Asc'));  // [2, 4, 6, 8, 9]
console.log(ordenarMatriz([2, 4, 6, 8, 9], 'Desc')); // [9, 8, 6, 4, 2]
console.log(ordenarMatriz([5, 2, 8, 1, 9], 'Asc'));  // [1, 2, 5, 8, 9]
console.log(ordenarMatriz([5, 2, 8, 1, 9], 'Desc')); // [9, 8, 5, 2, 1]
console.log(ordenarMatriz([3, 1, 4, 1, 5], 'Asc'));  // [1, 1, 3, 4, 5]

console.log(ordenarMatriz([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]