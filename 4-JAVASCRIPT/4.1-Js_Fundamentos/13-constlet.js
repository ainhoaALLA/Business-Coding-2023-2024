var myName = "Ainhoa";

// Ventaja y desventaja es que var es de scope global y se puede reasignar en cualquier momento. Si tenemos el código mal organizado o no controlado, esto es un problema. Las variables que se reasignen es mejor tenerlas en scope local

function changeMyName(newName) {
  myName = newName;
}
// Las funciones como esta de arriba, no deberían reasignar nada global, esto es un antipatrón, deberíamos poner return:
// function changeMyName(newName) {
//     return = newName;
//   }

function sayMyName() {
  console.log(`Mi Nombre es ${myName}`);
}

changeMyName("Alberto");
sayMyName();

// Se soluciona con Constantes, es decir, variables que no pueden reasignarse

//Todo lo que hagamos debe ser Constante, a menos que queramos reasignarlo. Si queremos que se reasigne, usamos Let, que es igual que Var pero intenta ser de scope local.

// Nuevo ejemplo bien hecho:
console.log('--------------------------------------')
const school = 'PMBA'
let yourName = "Ainhoa";

function getNameInUpperCase(yourNewName) {
  return yourNewName.toUpperCase();
}


function sayYourName(name) {
    console.log(`Tu Nombre es ${name}`);
  }

function getStudies(name, school) {
    console.log(`Tu Nombre es ${name} y estudias en ${school}`);
  } 

yourName = getNameInUpperCase('Maria')
sayYourName(yourName);
getStudies(yourName, school)

//Creo una variable, creo una función que me puede devolver un nombre en mayúsculas y asigno el resultado de esa función a esavariable que yo tenía

//Intentar reasignar lo menos posible y utilizando let en lugar de var

console.log('--------------------------------------------------')
// Ejemplo de los problemas con var

var i = 10

for (var i = 0; i < 5; i++) {
}

console.log(i)

//Aquí la i vale 5, en lugar de 10. El bucle en lugar de afectar a nivel local, afecta a nivel global y esto es un problema. El bucle debería tener su propio scope. Para ello, sustituimos var por let

let a = 10 //Aquí let tendrá scope global

// en cambio en el bucle tendrá scope local
for (let a = 0; a < 5; a++) {
}

console.log(a) //ahora la a valdrá 10, el bucle no afectará al scope global