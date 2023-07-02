// Bucle for: en el paréntesis se añadedn tres cosas separadas por punto y coma siempre: 1º variable y valor inicial, 2º valor que queremos alcanzar como tope (el másximo), 3º una variable que sea un acumulador, para crecer con el bucle
// i = i + 1  es lo mismo que i++ y lo mismo que i += 1

for (var i = 0; i < 5; i++) {
  console.log(`El valor de i es: ${i}`);
}

// for (valor inicial; comparación; operación tras cada loop) {
//     contenido
// }

for (var j = 10; j >= 0; j--) {
  console.log(`El valor de j es: ${j}`);
}

for (var x = 10; x >= 0; x -= 3) {
  console.log(`El valor de x es: ${x}`);
}

// Ahora vamos a depender de una variable. Vamos a contar el número de veces que una letra se repita dentro de un texto

var timesRepeated = 0;
var sentence = "La programación me gusta";
//las posiciones empiezan por 0 en programación, en los strings tamién. Con corchetes accedemos a las posiciones
console.log(sentence[3]);
// Para hacer un bucle necesitamos saber cuál es la posición máxima para decirle al bucle que pare ahí. Esto se puede saber con .length - la length empieza con 1, mientras que la posición empieza por 0, así que habría que restarle 1, o simlemente no ponerle igual, sino siempre menor
console.log(sentence.length);

for (var i = 0; i < sentence.length; i++) {
  if (sentence[i] === "a") {
    timesRepeated += 1;
  }
}
console.log(`La letra "a" se ha repetido ${timesRepeated} veces.`)
