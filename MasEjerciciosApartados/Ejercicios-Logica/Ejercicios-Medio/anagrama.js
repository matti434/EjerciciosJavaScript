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

function contarLetras(palabra) {
  const contador = {};
  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i].toLowerCase();
    // tengo que guardar cada letra
    if (contador[letra] === undefined) {
      contador[letra] = 1;
    } else {
      contador[letra] += 1;
    }
  }
  return contador
  /*
  for (let j = 0; j < string2.length; j++) {
    const letra = string2[j].toLowerCase();
    if (contador2[letra] === undefined) {
      contador2[letra] = 1;
    } else {
      contador2[letra] += 1;
    }
    if(j === string2.length){
      return contador2
    }
  }*/
}
function anagrama(string1, string2) {
  if (string1.length !== string2.length) {
    console.log(
      "La cantidad de letras es distinta entre las palabra. Por lo que no es palindromo"
    );
    return false;
  }

  const conteo1 = contarLetras(string1);
  const conteo2 = contarLetras(string2);

  for (let letra in conteo1) {
    if (conteo1[letra] !== conteo2[letra]) {
      return false; // si alguna no coincide;
    }
  }
  return true;
}

console.log(anagrama("amor", "roma"));
