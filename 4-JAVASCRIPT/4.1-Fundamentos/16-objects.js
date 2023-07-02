const person = {
  name: "Ainhoa",
  surname: "Fernández",
};

// En un array se vería así:
//['Ainhoa', 'Fernández']
// El nombre en la posición 0 y el apellido en la posición 1, pero es difícil para relacionarte con otros programadores decir el nombre es la posición 0 y el apellido es la posición 1

//Con los objetos podemos acceder a la propiedad con un nombre espcífico
//person['name']
//En los arrays lo hacíamos con las posiciones.
//person [0]

const personNameCorchete = person["name"];
console.log(`El nombre es ${personNameCorchete}`);

// Un objeto es una librería de valores con pares de key y value. Aquí el key es name y el value es Ainhoa
//También se puede acceder a los objetos con puntos, además de los corchetes
const personNamePunto = person.name;
console.log(`El nombre es ${personNamePunto}`);

console.log(`El nombre es: ${person.name} ${person.surname}`);

//Cómo se añaden propiedades a un objeto? Propiedad es un conjunto de key y value
person["age"] = 30;
console.log(`La persona tiene ${person.age} años`);

//Con delete eliminamos propiedades
person["city"] = "Madrid";
delete person.city;
// Si no sabemos si existe o no existe la propiedad, la recomendación es acceder corchetes:
// delete person['city']
console.log(`La persona vive en ${person.city}`);

//Reescribir una propiedad que ya existe
person["city"] = "Madrid";
console.log(`Ahora La persona vive en ${person.city}`);

person["city"] = "Cádiz";
console.log(`Ahora La persona vive en ${person.city}`);

//Claves dinámicas, dependen de una variable
function getKey(object, key) {
  return object[key];
}

const personName = getKey(person, "name");
console.log(`La clave dinámica name vale: ${personName}`);
const personSurname = getKey(person, "surname");
console.log(`La clave dinámica surname vale: ${personSurname}`);

