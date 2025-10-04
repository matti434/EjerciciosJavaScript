//console.log(parentesisBalanceados("({[]})"));

function parentesisBalanceados(parentesis) {
  const pila = [];
  for (let i = 0; i < parentesis.length; i++) {
    let signo = parentesis[i];
    if (signo === "(" || signo === "{" || signo === "[") {
      pila.push(signo);
    }
    if (signo === ")") {
      if (pila.length === 0 || pila[pila.length - 1] !== "(") {
        return false;
      }
      pila.pop();
    }
    if (signo === "}") {
      if (pila.length === 0 || pila[pila.length - 1] !== "{") {
        return false;
      }
      pila.pop();
    }
    if (signo === "]") {
      if (pila.length === 0 || pila[pila.length - 1] !== "[") {
        return false;
      }
      pila.pop();
    }
  }
  return pila.length===0;
}

console.log(parentesisBalanceados("({[]})"));
console.log(parentesisBalanceados("({[]}{"));
