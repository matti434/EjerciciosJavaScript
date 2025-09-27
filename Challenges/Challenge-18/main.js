import { calculadora, calculadora } from "./calculadora.js";


function main(){
    const calculadora= new calculadora;
    const pantalla = document.getElementById("display");

    pantalla.textContent=calculadora()
}