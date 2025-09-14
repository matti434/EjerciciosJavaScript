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


botonModo.addEventListener('click',() =>{
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        botonModo.textContent = 'Modo claro';
    }
    else{
        botonModo.textContent = 'Modo oscuro';
    }
});