/*
 **Mensajes secuenciales**

- Después de 1 segundo: `"Preparados..."`.
    
- Después de 2 segundos: `"Listos..."`.
    
- Después de 3 segundos: `"¡Ya!"`.  
    👉 Usa varios `setTimeout` juntos.
*/

setTimeout(()=>{
    console.log("Preparados...");
},1000);

setTimeout(()=>{
    console.log("Listos...");
},2000);


setTimeout(()=>{
    console.log(`"¡Ya!"`);
},3000);