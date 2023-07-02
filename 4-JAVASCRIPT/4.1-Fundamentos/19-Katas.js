function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

const greetUser = greet("Ainhoa");
console.log(greetUser);

function multiply(a, b) {
  return a * b;
}
const result = multiply(5, 6);
console.log(result);

//You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const numbers = [-1, -2, 5, -7, 3, -6, 1];
function sumPositiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number > 0) {
      sum = sum + number;
    }
  }
  return sum;
}

const sum = sumPositiveNumbers(numbers);
console.log(`La suma de los números positivos del array es: ${sum}`);

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num > 0) {
    convertedNum = -num;
  } else {
    convertedNum = num;
  }
  return convertedNum
}
const negativeNum = makeNegative(3)
console.log(`El número convertido es ${negativeNum}`)