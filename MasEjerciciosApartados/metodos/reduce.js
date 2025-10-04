const precios = [100, 200, 300, 400];

const total = precios.reduce((acumulador,precioActual)=>{
    return acumulador += precioActual;
})

console.log("total: "+ total);