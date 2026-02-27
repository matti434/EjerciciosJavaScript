/* Calcular descuento según monto de compra.*/


const montoCompra = parseFloat(process.argv[2]);

if( montoCompra >= 100){
    console.log(`El monto de compra es ${montoCompra} con descuento del 50% queda en ${montoCompra*0.5}`);
}
else if(montoCompra <=50 ){
    console.log(` El monto de compra es ${montoCompra} no tiene descuento queda en ${montoCompra}`);
    
}