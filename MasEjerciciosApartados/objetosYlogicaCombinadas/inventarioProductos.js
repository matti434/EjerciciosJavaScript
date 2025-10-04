/*
Inventario de productos: Cada producto con  {nombre , precio, stock} - Calcular el total y aplicar un descuento si supera cierto monto.
*/

const productos = [];

do{
    let productoNombre = prompt("Ingrese el nombre del producto:");
    let productoPrecio = prompt("Ingrese el precio del producto:");
    let productoStock = prompt("Ingrese el stock del producto:");

     // primero validamos nombre
     if(productoNombre === null){
        alert("Saliendo del programa...")
        break;
     }
     if(productoNombre.trim()===""){
        alert("No ingrese espacios vacios");
        continue;
     }
     
     //precio
    

     if(isNaN(productoPrecio)){
        alert("Ingrese valores validos (numeros)");
        continue;
     }
     if(productoPrecio === null){
        alert("Saliendo del programa...");
        break;
     }
     if(productoPrecio.trim()===""){
        alert("No ingrese espacios vacios");
        continue;
     }
     if(productoPrecio <=0 ){
        alert("El precio no puede ser menor o igual a 0");
        continue;
     }

     // stock

     if(isNaN(productoStock)){
        alert("Ingrese valores validos (numeros)");
        continue;
     }
     if(productoStock === null){
        alert("Saliendo del programa...");
        break;
     }
     if(productoStock.trim()===""){
        alert("No ingrese espacios vacios");
        continue;
     }
     

    productoPrecio = parseFloat(productoPrecio);
    productoStock = parseInt(productoStock);

    // creo un objeto de datos para agregarlo al array
    const producto = {
      nombre:productoNombre,
      precio:productoPrecio,
      stock:productoStock
    };

    productos.push(producto);

    let confirmar=confirm("Desea seguir agregando?");

    if(!confirmar){
        alert("Saliendo del programa...");
        break;
    }

}while(true)

function calcular(productos){
    let total = 0;
    productos.forEach(producto =>{
        total += producto.precio * producto.stock;
    });

    console.log(`El subtotal es: ${total.toFixed(2)}`)

    if(total>1000){
        total= total*0.9;
        console.log(`El total con descuento es:  ${total}`);
    }

    return total;
}

const resultado = calcular(productos);
console.log(`Total a pagar:  ${resultado}`); 