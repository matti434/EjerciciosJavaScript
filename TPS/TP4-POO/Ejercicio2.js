/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

const cuenta = {

    titular : "alex",
    saldo: 0,

    ingresar: function(){
        let cantidad= parseFloat(prompt("Ingrese la cantidad a añadir a la cuenta:"));

        if(isNaN(cantidad)){
            alert("Por favor, ingresa un número válido");
            return;
        }

        if(cantidad>0){
           this.saldo+=cantidad;
           console.log(`La cantidad ingresada es de : ${cantidad} el saldo total de la cuenta es: ${this.saldo}`);
        } 
        else {
            alert("La cantidad a ingresar debe ser mayor a 0");
        }
    }, 

    extraer: function(){
        let cantidad= parseFloat(prompt("Ingrese la cantidad a extraer de la cuenta:"));

        if(isNaN(cantidad)){
            alert("Por favor, ingresa un número válido");
            return;
        }

        if(cantidad>0){
           this.saldo-=cantidad;
           console.log(`La cantidad extraida es : ${cantidad} el saldo total de la cuenta es: ${this.saldo}`);
        } 
        else {
            alert("La cantidad a ingresar debe ser mayor a 0");
        }
    },
    
    
    informar : function(){
        console.log(`El titular : ${this.titular} tiene en su cuenta ${this.saldo}`);
    },

    menu : function(){
        let opcion;
        do{
           opcion = prompt(
                `Bienvenido ${this.titular}\nSaldo actual: $${this.saldo}\n` +
                "1. Ingresar dinero\n" +
                "2. Extraer dinero\n" +
                "3. Ver información de la cuenta\n" +
                "4. Salir\n\n" +
                "Selecciona una opción:"
            );

            switch(opcion){
                case "1":
                    this.ingresar();
                    break;
                case "2":
                    this.extraer();
                    break;
                case "3":
                    this.informar();
                    break;
                case "4":
                    console.log("Saliendo del programa");
                    break;
                default:
                    console.log("Opcion invalida");
                    break;
            }
        }while(opcion!="4" && opcion !== null);
    }
};

console.log("Cuenta Bancaria");
cuenta.menu();