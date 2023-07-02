// El texto va entre comillas, dobles o simples.
"hola, qué tal"
'hola, qué tal'
// string es una cadena de texto y es un tipo de variable
// si en el texto se usan las comillas como parte del MediaStreamAudioSourceNode, entnces tenemos que cambiar de tipo de comillas, como en inglés:
// Esto está mal

// Esto está bien
"Hi, don't do it"

// Si queremos concatenar dos String

"Hola desde"

"pmba"

// Son dos cadenas de texto que no están asignadas y están pululando por el documento, hay que asignarlas, Js no sabe qué hacer con ellas.
// Variable una caja en la que meto información, la almaceno y la puedo usar por el resto de mi aplicación

var greeting = "hola desde"
var school = "pmba"
var greetingFromSchool = greeting + " " + school
// cada vez que usemos text, Js sabe que text es un string y sabe que tiene dentro Hola desde
// Muestra mensaje por consola o por terminal. Para ejecutarlo en la terminal, poner node y nombre del fichero
console.log(greetingFromSchool)

// Variable debe ser lo más descriptiva posible, sbaer lo que hay dentro de la variable a través de su nombre
// Formas de escribir variables:
// FINAL_TEXT (PASCAL_CASE) Todas las palabras en mayúsculas y guiones bajos. Valores que no vayan a cambiar, valores que sean más estáticos en nuestro código, pero no se va a usar mucho
// holaQueTal (camelCase) : Todo en minúscula pero si hay espacios, la primera letra donde estaría el espacio, ponerlo en mayúsculas

Tipo de variables
String: cadena de texto
Number: número
Boolean: True or False
Array: colección de valores
Object: librería de valores 

var ageAsString = "30"
var ageASNumber = 30
var arrayOfValues = [30, "30", false, true, 4]
En programación los indices empiezan por 0, se empieza a contar de 0 y no de 1, así que el valor 30 es la posición 0.
var objectOfValues = {
    age: 30
}
