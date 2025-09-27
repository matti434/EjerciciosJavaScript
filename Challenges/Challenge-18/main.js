import { Calculadora } from "./calculadora.js";

const calcular = new Calculadora();

const pantalla = document.getElementById("display");
const botonesNumeros = document.querySelectorAll(".number");

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    calcular.ingresarNumero(boton.textContent);
    pantalla.value = calcular.display; //actualiza la pantalla
  });
});

document.getElementById("sumar").addEventListener("click", () => {
  calcular.ingresarOperador("+");
  pantalla.value = calcular.display;
});
document.getElementById("restar").addEventListener("click", () => {
  calcular.ingresarOperador("-");
  pantalla.value = calcular.display;
});
document.getElementById("multiplicar").addEventListener("click", () => {
  calcular.ingresarOperador("×");
  pantalla.value = calcular.display;
});
document.getElementById("division").addEventListener("click", () => {
  calcular.ingresarOperador("/");
  pantalla.value = calcular.display;
});
document.getElementById("igual").addEventListener("click", () => {
  calcular.calcular();
  pantalla.value = calcular.display;
});
document.getElementById("ac").addEventListener('click', () =>{
    calcular.limpiar();
    pantalla.value = calcular.display;
});
