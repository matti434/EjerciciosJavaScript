/*
¿ES UN ANAGRAMA?
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(string1, string2) {
  const letra = [];
  const letra2 = [];

  if (string1.length.toLowerCase() !== string2.length.toLowerCase()) {
    console.log(
      "La cantidad de letras es distinta entre las palabra. Por lo que no es palindromo"
    );
    return;
  }
  for (let i = 0; i < string1.length; i++) {
    // tengo que guardar cada letra
    letra = string1[i].toLowerCase();
    for (let j = 0; j < string1.length; j++) {
      letra2 = string1[j].toLowerCase();
    }
    
  }
}

const string1 = "amor";
const string2 = "roma";
