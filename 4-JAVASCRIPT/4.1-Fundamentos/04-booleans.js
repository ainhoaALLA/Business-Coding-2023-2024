var truevar = true;
console.log(truevar);
// A una variable no le podemos llamar true por ejemplo, porque tru ya existe en el código, es una palabra reservada, por eso le llamamos truevar
var truevar = false;
console.log(truevar);
// Los booleanos son comparaciones convertiodas a una representación en valor de true or false
// Resultados booleanos (El igual)
// 5 = 5 El igual simple asigna un valor a una variable así que no se puede usar como símbolo de comparación
// 5 == 5 compara que el valor sea el mismo sin importar el tipo de variable de la que se trate
console.log("Igual doble sólo numbers: " + (5 == 5));
console.log("Igual doble con string y number: " + ("5" == 5));

// 5 === 5 compara mismo valor y mismo tipo de variable - usar siempre ésta
console.log("Igual triple sólo numbers: " + (5 === 5));
console.log("Igual triple con string y number: " + ("5" === 5));

// Resultados booleanos (El mayor que o menor que)
console.log("Es 2 mayor que 3?: " + (2 > 3));
console.log("Es 3 menor que 2?: " + (3 < 2));
console.log("Es 3 mayor que 2?: " + (3 > 2));

// // Mayor o igual que o menor o igual que
console.log("Es 3 mayor o igual que 3?: " + (3 >= 3));

// Aquí no se puede hacer la comparación triple así que si tenemos dudas de si algún número puede ser un string pues hay que transformarlo a Number

// Otros ejemplos de booleanos con string

var isSameName = "Juan" === "juan";
console.log("Son el mismo nombre? " + isSameName);

// Truco para saber si es el mismo nombre es convertir ambos nombres a uppoer case o lower case

var isSameName = "Juan".toUpperCase() === "juan".toUpperCase();
console.log("Son el mismo nombre?" + isSameName);

// Convertir algo a booleano
//Truthy: Posibles verdaderos, que tienen contenido, valor.
console.log("Es 2 truthy? " + Boolean(2));
console.log("Es PMBA truthy? " + Boolean("PMBA"));
console.log("Es true truthy? " + Boolean(true));

//Falsy: no tiene contenido o valor dentro. Los falsy los vamos a usar mucho
console.log("Es 0 falsy?: " + Boolean(0));
console.log("Es un string vacío falsy? " + Boolean(""));
console.log("Es false falsy? " + Boolean(false));

// Dos valores más: Undefined y Null

var surname;
console.log("Es surname falsy? ", Boolean(surname));

// undefined significa que no hay un valor dentro , es cuando la variable no está declarada con un =

//Null, se le da un valor a la variable que es null, pero seguirá siendo falsy porque el valor no vale nada
var surname = null;
console.log("Es surname falsy? ", Boolean(surname));
