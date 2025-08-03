function esPositivoNegativoCero() {
  let numero1 = parseInt(document.getElementById(`num1`).value);
  let resultado = document.getElementById(`res1`);
  if (numero1 > 0) {
    resultado.textContent = `El numero ${numero1} es positivo`;
  } else if (numero1 == 0) {
    resultado.textContent = `El numero es cero`;
  } else if (numero1 < 0) {
    resultado.textContent = `El numero es menor a cero`;
  }
}
function edadMayorMenor() {
    let edad =parseInt(document.getElementById(`edad`).value);
    let resultado = document.getElementById(`res2`);
    
    if(edad == 16){
        resultado.textContent = `Su edad es de ${edad} por lo que si puede votar pero no es obligatorio`;
        return;
    }
    else if(edad>=18){
        resultado.textContent = `Su edad es de ${edad} puede votar y es obligatorio`;
        return;
    }
     else if(edad<16){
        resultado.textContent = `Su edad es de ${edad} por lo que no puede votar`;
        return;
    }
}

function compararConstraseña(){
    let contraseña = document.getElementById(`contraseña`).value;
    let contraseñaRepetida = document.getElementById(`contraseñaRepetida`).value;
    let mensaje = document.getElementById(`res3`);

    if(contraseña === "" || contraseñaRepetida === ""){
        mensaje.textContent = `Por favor ingrese las contraseñas`;
        return;
    }
    else if(contraseña === contraseñaRepetida){
        mensaje.textContent = `Las contraseñas si coinciden`;
        return;
    }
    else {
        mensaje.textContent = `Las contraseñas no coinciden`;
        return;
    }
}
