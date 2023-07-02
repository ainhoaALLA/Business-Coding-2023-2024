const nombres = ["Alicia", "Ainhoa", "Carlos", "Jose María"]

nombres[2] = "Alejandro"
console.log(nombres)


const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const numerosReverse = []
for (let i = numeros.length - 1; i >=0; i--) {
    numerosReverse[numeros.length - 1 - i] = numeros[i]
}
console.log(numerosReverse);


