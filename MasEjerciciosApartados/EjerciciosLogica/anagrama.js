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
  const contador = {};
  if (string1.length !== string2.length) {
    console.log(
      "La cantidad de letras es distinta entre las palabra. Por lo que no es palindromo"
    );
    return;
  }
  for (let i = 0; i < string1.length; i++) {
    const letra = string1[i];

    // tengo que guardar cada letra
    if (contador[letra] === undefined) {
      contador[letra] = 1;
    } else {
      contador[letra] = +1;
    }
    for (let j = 0; j < string1.length; j++) {
      const letra = string1[j];
      if (contador[letra] === undefined) {
        contador[letra] = 1;
      } else {
        contador[letra] = +1;
      }
    }
  }

  for (let letra in contador) {
    if (conteo1[letra] !== conteo2[letra]) {
      return false;
    }
  }
  return true;
}

const string1 = "amor";
const string2 = "roma";
