// for (var i = 0; i < 5; i++) {
//     console.log(`El valor de i es: ${i}`);
//   }
 
var count = 0  
while (count <= 10) {
    console.log(`la cuenta va por el ${count}`)
    //Para no crear un bucle infinito aquí hay que poner cuándo para
    count++
    // count +=1
    // count = count + 1
}

console.log('_______________________________')

var negativeCount = 10
while (negativeCount >= 0) {
    console.log(`La cuenta atrás va por el ${negativeCount}`)
    negativeCount--
}
  
console.log('_______________________________')

var x = 10
while (x >= 0) {
    console.log(`El valor de x es ${x}`)
    x -= 3
    
}


console.log('_______________________________')

  
var timesRepeated = 0;
var sentence = "La programación me gusta";
var i = 0

while (i < sentence.length) {
    if (sentence[i] === "a") {
        timesRepeated += 1;
    }
    i++
   
}
console.log(`La letra "a" se ha repetido ${timesRepeated} veces.`)
  
