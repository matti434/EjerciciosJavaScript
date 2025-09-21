
const horaHT = document.getElementById("clock");

function formatorHora() {
  const fechaActual = new Date(); //muestra la fecha y hora actual
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  horaHT.textContent=` ${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
}

setInterval(formatorHora,1000);