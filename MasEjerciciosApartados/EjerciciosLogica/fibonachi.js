function fibonacciSeguro(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Debe ingresar un número entero no negativo');
    }
    
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    
    return b;
}

// Ejemplo de uso
try {
    console.log(fibonacciSeguro(8)); // 21
    console.log(fibonacciSeguro(-1)); // Error
} catch (error) {
    console.error(error.message);
}