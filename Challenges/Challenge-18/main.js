import { Calculadora } from "./calculadora.js";

const calcular = new Calculadora();

const pantalla = document.getElementById("display");
const botonesNumeros = document.querySelectorAll(".number");
//const operaciones = document.getElementById("operacion");
const operaciones = document.querySelector("#operacion");


botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    calcular.ingresarNumero(boton.textContent);
    pantalla.value = calcular.display; //actualiza la pantalla
    operaciones.textContent = calcular.expresionActual;
  });
});

document.getElementById("sumar").addEventListener("click", () => {
  calcular.ingresarOperador("+");
  pantalla.value = calcular.display;
  operaciones.textContent = calcular.expresionActual;
});
document.getElementById("restar").addEventListener("click", () => {
  calcular.ingresarOperador("-");
  pantalla.value = calcular.display;
  operaciones.textContent = calcular.expresionActual;
});
document.getElementById("multiplicar").addEventListener("click", () => {
  calcular.ingresarOperador("x");
  pantalla.value = calcular.display;
  operaciones.textContent = calcular.expresionActual;
});
document.getElementById("division").addEventListener("click", () => {
  calcular.ingresarOperador("/");
  pantalla.value = calcular.display;
  operaciones.textContent = calcular.expresionActual;
});
document.getElementById("igual").addEventListener("click", () => {
  calcular.calcular();
  pantalla.value = calcular.display;
  operaciones.textContent = calcular.expresionActual;
});
document.getElementById("ac").addEventListener("click", () => {
  calcular.limpiar();
  pantalla.value = calcular.display;
  operaciones.textContent = calcular.expresionActual;
});
