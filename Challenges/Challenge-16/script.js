const contador = document.getElementById("counter");
const btnReiniciar = document.getElementById("reiniciar");
const btnIncrementar = document.getElementById("incrementar");
const btnDisminuir = document.getElementById("disminuir");
const mensaje = document.getElementById("mensaje")
const botonModo  = document.getElementById("toggleModo");


let valor = 0;

btnIncrementar.addEventListener('click',()=>{
   valor++;
   contador.textContent=valor;
   mensaje.textContent="";
});

btnDisminuir.addEventListener('click',() =>{
    if(valor>0){
        valor--;
        contador.textContent=valor;
        mensaje.textContent="";
    }
    else{
      mensaje.textContent ="No se puede disminuir llegado al 0"; 
    }
})

btnReiniciar.addEventListener('click',()=>{
    valor=0;
    contador.textContent=valor;
    mensaje.textContent="";
});


// Evento para cambiar entre modo claro y oscuro al hacer clic en el botón
botonModo.addEventListener('click', () => {
    // Alterna la clase 'dark-mode' en el body (agrega si no está, quita si está)
    document.body.classList.toggle('dark-mode');

    // Si el body tiene la clase 'dark-mode', cambia el texto del botón a 'Modo claro'
    if (document.body.classList.contains('dark-mode')) {
        botonModo.textContent = 'Modo claro';
    } 
    // Si no tiene la clase, cambia el texto del botón a 'Modo oscuro'
    else {
        botonModo.textContent = 'Modo oscuro';
    }
});