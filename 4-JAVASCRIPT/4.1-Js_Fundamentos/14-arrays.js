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

// Eliminar el último elemento al final del array
marks.pop();
console.log("Pop", marks);

//Extraer elementos del array con slice
const fruits = ["kiwi", "manzana", "melón"];
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
