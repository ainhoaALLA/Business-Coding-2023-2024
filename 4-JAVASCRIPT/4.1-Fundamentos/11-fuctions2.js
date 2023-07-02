//FUNCIÖN
function sum(num1, num2) {
  return num1 + num2;
}
console.log(`La suma me da ${sum(6, 5)}`);

var totalSum1 = sum(3, 2);
var totalSum2 = sum(10, 7);
var totalSum3 = sum(5, 8);

console.log(`Las sumas totales dan: ${totalSum1}, ${totalSum2} y ${totalSum3}`);

function rest(num1, num2) {
  return num1 % num2;
}

var restoDivision = rest(10, 3);
console.log(restoDivision);
console.log(`El resto de la división es: ${restoDivision}`);
console.log("_____________________________________________________");
console.log(`El resto de la división es: ${rest(15, 4)}`);

// FUNCIÓN ANÓNIMA
//No tienen nombre y sólo funciona cuando se le asigna a una variable, si no da error de sintaxis no ponerle un nombre. La función se invoca en este caso invocando a la variable

var substract = function (a, b) {
  return a - b;
};
console.log(`La resta me da: ${substract(7, 3)}`);

//FUNCIÓN FLECHA O ARROW FUNCTION
//Es una manera de hacer funciones anónimas de una forma más simple en cuanto a sintaxis

var multiply = (a, b) => {
  return a * b;
};
console.log(`La multiplicación me da: ${multiply(7, 5)}`);

//RETURN IMPLÍCITO
// Pero si esta función es tan sencilla que sólo va a tener el return, sin nada mñas de código dentro de la función, la sintaxis aún se puede simplificar más

var power = (a, b) => a ** b;
console.log(`La potencia me da: ${power(7, 5)}`);