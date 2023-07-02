const marks = [10, 4, 6, 9, 4, 6, 1];
console.log(marks);

// Para acceder a las posiciones del array, lo hago con corchetes. Las posiciones empiezan en 0

console.log(`La posición es ${marks[3]}`);

//Accedo a la longitud con .length

console.log(`El array marks tiene longitud: ${marks.length}`);

const length = marks.length; // 7
console.log(length);
//Acceder al último elemento de un array
const lastMark = marks[marks.length - 1];
console.log(`La última nota es: ${lastMark}`);

// Podemos mutar elementos en una posición del array
marks[0] = 4;
console.log(`la nota del primer alumno es ${marks[0]}`);

//Añadir elementos al principio del array con unshift

marks.unshift(3); // [3, 4, 4, 6, 9, 4, 6, 1]
console.log("Unshift", marks);

//Eliminar el primer elemento del array
marks.shift(); // [4, 4, 6, 9, 4, 6, 1]
console.log("Shift", marks);

//Añadir un elemento al final del array
marks.push(8);
console.log("Push", marks);

// Eliminar el último elemento al final del array - modifica el array original
marks.pop();
console.log("Pop", marks);

//Extraer elementos del array con slice - no modifica el array original
const fruits = ["kiwi", "manzana", "melón", "manzana"];
const firstFruit = fruits.slice(0, 1);
console.log("El array con la primera fruta es:", firstFruit);

//Copiar arrays enteros, para usarlo para modificarlo sin tocar los valores de referencia
const copyFruits = fruits.slice();
console.log("copy fruits array:", copyFruits);

//Hacer una referencia a un array. Asignar una costante a un array que ya existe, ya no es una copia, se afectan los dos por los cambios

const reassignedFruits = fruits;
reassignedFruits.push('Sandía')

console.log('Reassgined Fruits', reassignedFruits)
console.log('Fruits', fruits)

// splice - modifica el array original - desde la primera posición que le pasemos como parámetro, te retorna tantos elementos del array como le indiques en la segunda posición y además se puede añadir más elementos
fruits.splice(1,0,'pera')
console.log(fruits)

// reverse: el método reverse invierte el array por completo y modifica el array original

// join : el método join creará un string a partir de los elementos del arrey, lo hará mediante el separador que pongamos en los paréntesis -  no modifica el array original. El join retorna el string generado mediante los parámetros indicados


// index of es unmétodo que no modifica el array y me sirve para saber la posición o índice del primer elemento dentro del array. Si no encuentra el elemento, retornará -1. Si lo encuentra, retorna la posición del elemento

console.log(fruits.indexOf("manzana"))

// lastIndexof: los mismo que el anterior pero devuelve el último - esto solo cuando el elemento está repetido en el array
console.log(fruits.lastIndexOf("manzana"))
// includes es un método queno modifca el array orignal y nos sirve saber si un elemento está dentro del array o no - retorna valor booleano
console.log(fruits.includes("pera"))
console.log(fruits.includes("fresa"))