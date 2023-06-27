// Calcular la media de una colección de notas

const marks = [10, 4, 6, 9, 4, 6, 1];
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    sum = sum + score;
    // sum += score;
  }
  return sum / scores.length;
}

const average = getAverage(marks);
console.log(`La media de las notas es ${average}`);

// Lo de arriba se escribe como función flecha así:
// const getAverage = (scores) => {
//     let sum = 0;
//     for (let i = 0; i < scores.length; i++) {
//     const score = scores[i];
//     sum = sum + score;
//   }
//   return sum / scores.length;
// }
//

// Filtrar los números que sean pares
const getEvenNumbers = (numbers) => {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const evenNumbers = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Los números pares son:", evenNumbers);
