/* Calcular descuento según monto de compra.*/


const montoCompra = parseFloat(process.argv[2]);

if( montoCompra >= 100){
    console.log(`El monto de compra es ${montoCompra} con descuento del 50% queda en ${montoCompra*0.5}`);
}
else if(montoCompra < 100 ){
    console.log(` El monto de compra es ${montoCompra} no tiene descuento queda en ${montoCompra}`);
}
else if( montoCompra === 0 || montoCompra < 0){
    console.log("El monto de compra es 0 o menor a 0 no tiene descuento");
}
else if( isNaN(montoCompra)){
    console.log("El monto de compra no es un numero valido");
}