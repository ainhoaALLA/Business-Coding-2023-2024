var two = 2;
var twoWithDecimals = 2.5;
var negative = -2;

// Suma
var sum = 3 + 2;
console.log(sum);
console.log("La suma da: " + sum);
console.log(`La suma da: ${sum}`);

//Resta
var substract = 10 - 4;
console.log(substract);
console.log("La resta da: " + substract);
console.log(`La resta da: ${substract}`);

//Multiplicación

var multiply = 6 * 4;
console.log(multiply);
console.log("La multiplicación da: " + multiply);
console.log(`La multiplicación da: ${multiply}`);

//División exacta (resto=0)
var divide = 40 / 4;
console.log(divide);
console.log("La división da: " + divide);
console.log(`La división da: ${divide}`);

//División entera (resto distinto de 0)
var divideWithDecimals = 25 / 4;
console.log(divideWithDecimals);
console.log("La división con decimales da: " + divideWithDecimals);
console.log(`La división con decimales da: ${divideWithDecimals}`);

// Resto
var rest = 25 % 4;
console.log(rest);
console.log("El resto da: " + rest);
console.log(`El resto da: ${rest}`);

//Potencia
var power = 5 ** 2;
console.log(`La potencia da: ${power}`);

// Poner paréntesis para que calcule bien, tal y como queremos, si no, sigue las reglas normales de matemáticas, primero multiplica y divide y luego suma y resta
var complexCalculation = 2 + 2 * 4 + 5 / 5 + 6;
console.log(complexCalculation);

// Un string y un número si se concatenan, sale uno al lado de otro pero no se suman
var numberAsString = "30";
var number = 35;
console.log(numberAsString + number);
console.log(number + numberAsString);

// Hay un truco para solucuonarlo que no se recomienda pero por si lo encntramos y es pone un + delante de la variable que convierte el string en número
console.log(number + +numberAsString);

// Lo que sí se recomienda es la función number

const numberAsNumber = Number(numberAsString);
console.log(number + numberAsNumber);

// Función que transforma string de número decimal en número: parseFloat
// Función que transforma string de número entero en número: parseInt

//NaN (NotaNumber)
var notValidNumber = Number("_");
console.log(notValidNumber)
console.log(`El número no válido es: ${notValidNumber}`)
//Si pasamos por la función Number un string que no es un número, la terminal nos devolverá NaN. Signofica que la hemos liado transformando algo que no es número en número. 
// Si operamos con un NaN, siempre nos dará NaN
var salary = 1000 * notValidNumber
console.log(`El salario es: ${salary}`)

// Para saber si algo es NaN antes de operar, usamos la función Number.isNaN que nos devuelve true or false

console.log(`Es el número NaN? = ${Number.isNaN(notValidNumber)}`)