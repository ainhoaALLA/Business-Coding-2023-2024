console.log("Hola soy el Javascript");

// Queremos seleccionar el h1
// Selección por tag, etiqueta.
//Primero asignamos a una constante y se selecciona comoi si fuera un CSS co querySelector, es una función que recibe una representación de selector, que es igual que en CSS.
// Queryselector elige el primer selector h1, si hubiera más, sólo selecciona el primero
const title = document.querySelector("h1");
console.log(title);
//Cambiando el texto interno
title.innerText = "Aprendemos selectores con JS";

//Ahora que hay dos h2, cómo selecionamos los dos o el segundo? Aquí coge el primero

const secondTitle = document.querySelector("h2");
console.log("seconTitle:", secondTitle);

//Podemos hacerlo con el siguiente selector de CSS
const secondHeader = document.querySelector("h2:last-of-type");
console.log("secondHeader:", secondHeader);

//Otra opción que tenemos es ponerle al elemento que queremos elegir una id en el HTML. Para buscarlo por id

const studyTitle = document.getElementById("study");
console.log("studyTitle:", studyTitle);

//Se puede hacer lo mismo con querySelector y el hashtag como en CSS

const studyHeader = document.querySelector("#study");
console.log("studyHeader:", studyHeader);

//Seleccionar un elemento por su clase. Con la función get no se necesita poner el selector de CSS.
//Recoge un array de elementos, un HTML collection, con funciones parecidas a un array pero no es un array como tal
const techies = document.getElementsByClassName("technology");
console.log("techies:", techies);

//Esto de arriba también se puede hacer con querySelectorAll y el selector de clase de CSS, funciona igual
const technologies = document.querySelectorAll(".technology");
console.log("technologies:", technologies);

//Vamos a añadir 1. 2. y 3. delante de cada li con Javascript. Para eso tenemos que recorrer el HTML collection con un bucle for

for (let i = 0; i < technologies.length; i++) {
  const technology = technologies[i];
  const prevText = technology.innerText;
  technology.innerText = `${i + 1} - ${prevText}`;
}

//Ahora vamos a añadir la URL

const THEPOWER_URL = "https://www.thepowermba.com/en/";
//Se usa el selector de CSS
const titleLink = document.querySelector("h2.title-link > a");
console.log("Title link", titleLink);
titleLink.href = THEPOWER_URL;
