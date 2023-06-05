//Condicionales if

var age = 35;
var canParticipate = false;

if (age < 30) {
  canParticipate = true;
}

console.log(`Puede participar el usuario?  ${canParticipate}`);

var yearsToRenew = 0;
var driverAge = 32;

if (driverAge >= 18 && driverAge <= 50) {
  yearsToRenew = 10;
}

if (driverAge > 50 && driverAge <= 75) {
  yearsToRenew = 5;
}

if (driverAge > 75) {
  yearsToRenew = 1;
}

console.log(`Se tiene que renovar el carnet cada ${yearsToRenew} años`);

// Condicionales if else

var myName = "Ainhoa";

if (myName === "Christian") {
  console.log("Eres el profe!");
} else {
  console.log("Eres un alumno");
}

//Importancia del orden de los condicionales
// En programación se trabaja por milisegundos, abajo ponemos los segundos en milisegundos, o sea multiplicados por 1000

var time = 11000;
var record = "";

if (time < 8000) {
  record = "World Record";
}

if (time < 10000) {
  record = "Olympic Record";
}

if (time < 12000) {
  record = "Personal Best";
}

console.log(`El record es ${record}`);

//En el ejemplo arriba, siempre me saldrá Personal Best porque la última condición que se evalúa también se cumple, 5 segundos es menor que 12 segundos. Entonces hay que ordenar bien el código y empezar por el más alto:

if (time < 12000) {
  record = "Personal Best";
}

if (time < 10000) {
  record = "Olympic Record";
}
if (time < 8000) {
  record = "World Record";
}
console.log(`Cuando lo ordeno, el record es ${record}`);

// Pero esto de ordenar tampoco es ideal porque podría haber muchos requisitos en la app y mucha gente trabjando con el código, por tanto lo mejor es anidar las condicionales con "if else" (nest), con el orden inicial haríamos lo siguiente:

if (time < 8000) {
  record = "World Record";
} else if (time < 10000) {
  record = "Olympic Record";
} else if (time < 12000) {
  record = "Personal Best";
} else {
  record = "No record";
}

console.log(`Cuando lo nesteo, el record es ${record}`);

// Encadenar condiciones

// OR Operator ||
// AND Operator &&
// cuando se combine AND y OR, poner entre paréntesis los OR que estén relacionados para que se interprete bien

var city = 'Barcelona';
var hasCar = true;

if ((city === 'Barcelona' || city === 'Madrid') && hasCar === false) {
  console.log("Va en el metro");
}

if ((city === 'Barcelona' || city === 'Madrid') && hasCar === true) {
  console.log("Puede ir en metro o en coche");
}
