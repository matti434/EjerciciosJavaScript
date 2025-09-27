import { Calculadora } from "./calculadora.js";

const calcular = new Calculadora();

const pantalla = document.getElementById("display");
const botonesNumeros = document.querySelectorAll(".number");

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    Calculadora.ingresarNumero(boton.textContent);
    pantalla.value = Calculadora.display; //actualiza la pantalla
  });
});

document.getElementById("sumar").addEventListener("click", () => {
  Calculadora.ingresarOperador("+");
  pantalla.value = Calculadora.display;
});
document.getElementById("restar").addEventListener("click", () => {
  Calculadora.ingresarOperador("-");
  pantalla.value = Calculadora.display;
});
document.getElementById("multiplicar").addEventListener("click", () => {
  Calculadora.ingresarOperador("×");
  pantalla.value = Calculadora.display;
});
document.getElementById("dividir").addEventListener("click", () => {
  Calculadora.ingresarOperador("/");
  pantalla.value = Calculadora.display;
});
document.getElementById("igual").addEventListener("click", () => {
  Calculadora.calcular();
  pantalla.value = Calculadora.display;
});
