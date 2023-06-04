var name = "Christian";
var surname = "Castillo";

var fullName = name + " " + surname;

// Usar comilla simple siempre que sea posible

console.log(fullName);

var firstIngredient = "leche";
var secondIngredient = "arroz";
var thirdIngredient = "limón";
var fourthIngredient = "canela";

// Lista de ingredientes: leche, arroz, limón y canela
// El \n es para saltar de línea, porque con los strings con comillas simples o dobles no funciona darle al enter y dejar una líea de espacio, se rompe el código
var recipe =
  'Lista de ingredientes: \n'+
  firstIngredient +
  ", " +
  secondIngredient +
  ", " +
  thirdIngredient +
  " y " +
   fourthIngredient +
   '.';

   console.log(recipe)

//    Concatenar strings de esta forma es complicado conforme vayamos añadiendo contenido. Entonces debemos Interporlar variables dentro de un string:
// Para interprolar una variable dentro de string: primero utilizamos el backtick, que es la tilde invertida y ésta sí que deja dar al Enter para saltar líneas y segundo la variable tiene que ir con ${}

var recipeInterpolated =
`Lista de ingredientes:
- ${firstIngredient}.
- ${secondIngredient}.
- ${thirdIngredient}.
- ${fourthIngredient}.
`
console.log(recipeInterpolated)

// Esto es para separar el contenido e la terminal
console.log('------------------------------------------')


// Función es un conjunto de instrucciones que podemos llamar en cualquier momento y hace una serie de operaciones. Por ejemplo, si queremos que Fiat siempre esté en mayúscula, podemos hacer una función

// Las funciones se llaman poniendo un punto después de la variable, y ahí ya podemos acceder a todas las funciones disponibles, se invoca con los paréntesis, si no se invoca no ocurre nada

// Funciones: toUperCase, toLowerCase, Trim, Slice

var car = 'Fiat'
var myCar = `Mi coche es un ${car.toUpperCase()}`
console.log(myCar)

var dog = 'CARLINO'
var myDog = `Mi perro es un ${dog.toLowerCase()}`
console.log(myDog)

var computerDescription = '     Ordenador muy potente con mucha RAM. '
console.log(computerDescription.trim())


// Slice a partir de qué caracter quiro cortar un string. Se empieza a contar desde 0, si ponemos dos números, el último es el que corta por la derecha y el primero el que corta por la izquierda, pero se puede poner sólo un número.
var school = 'The PMBA'
var schoolName = school.slice(4)
console.log(schoolName)

var school = 'The PMBA'
var schoolName = school.slice(4, 6)
console.log(schoolName)