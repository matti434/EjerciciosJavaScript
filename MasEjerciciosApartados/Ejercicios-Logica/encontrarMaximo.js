/*const arrays = [
    2,4,6,3,6,9,3,12,87,345,21,36,7,344,7,313,5,2312
]

const resultado = Math.max(...arrays);

console.log(resultado);
*/

const arrays = [2,4,6,3,6,9,3,12,87,345,21,36,7,344,7,313,5,2312];
const resultado = Math.max.apply(null, arrays);
console.log(resultado); // 2312