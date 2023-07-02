// Promise es un constructor y new es una palabra clave para instanciar constructores. Esta promesa es asíncrona. Lo que tiene dentro es un call back, que se ejecuta luego. Un call back se escribe con una función flecha
const promise = new Promise((resolve, reject) => {
  console.log("Promesa ejecutándose!");
  //   resolve('Resuelta!');
  reject("La promesa se ha roto");
});
//Cuando la promesa se resuelva, entonces se ejecutará el código dentro del .then
promise.then((value) => {
  console.log("La promesa se ha resuelto con el valor:", value);
});

promise.catch((error) => {
  console.log(error);
});

// Un objeto no se puede interpolar asi que no podemos hacer ${promise}
console.log(promise);

console.log("Este código se ejecuta antes que la Promise");

const getAmountInBank = () => {
  const promise = new Promise((resolve, reject) => {
    // resolve(1000000);
    reject("El servidor no está disponible");
  });
  return promise;
};

//El .then . catch se pueden concatenar y se pueden poner varios then y varios catch. Concatenarlo siempre
getAmountInBank()
  .then((amount) => {
    console.log(`La cantidad que tenemos en el banco es ${amount}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

// fetch(Web del servidor al que queremos llamar)
//   .then((response) => response.json()) //Tiene el return implícito
//   .then((data) => {
//     console.log(data);
//   });
