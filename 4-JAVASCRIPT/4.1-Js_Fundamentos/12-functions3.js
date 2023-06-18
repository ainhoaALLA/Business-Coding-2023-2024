var name = "Ainhoa";
console.log("El nombre original es:", name);
function changeName(newName) {
  name = newName;
}
console.log(
  "El nombre sigue siendo:",
  name,
  "porque no se ha invocado la función aún"
);
changeName("Alberto");
console.log("El nuevo nombre es:", name, 'porque ya se ha invocado la función');

console.log("_________________________________________________________");

function sum(a, b) {
  console.log('Función sum de scope global')  
  return a + b;
}
console.log ('El resultado es', sum(7,3))

function substract(a, b) {
  return a - b;
}
console.log ('El resultado es', substract(7,3))

function doOperation(operation, a, b) {
    //Esta variable hace shadowing a la variable sum de scope global solo dentro de la función doOperation
   // var sum = (num1, num2) => num1 + num2
  if (operation === 'sum') {
    return sum(a, b);
  } else if (operation === 'substract') {
    return substract(a, b);
  } else {
    return 'No Operation'
  }
}

console.log('El resultado de la suma es', doOperation('sum', 5, 8))
console.log('El resultado de la resta es', doOperation('substract', 8, 5))
console.log('El resultado de blabla es', doOperation('blabla', 5, 8))

var result = doOperation ('sum', 9, 4)
console.log(`El resultado es ${result}`)

var result = doOperation ('substract', 9, 4)
console.log(`El resultado es ${result}`)