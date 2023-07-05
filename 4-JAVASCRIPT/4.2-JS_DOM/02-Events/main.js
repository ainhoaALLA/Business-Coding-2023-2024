let inputValue = "";

const onButtonClicked = () => {
  alert(`El input tiene como valor: ${inputValue}`);
};

//Para guardar el input en una variable:

// const onInputChanged = (input) => {
//     inputValue = input.value;
const onInputChanged = (event) => {
  inputValue = event.target.value;
  const inputTextH3 = document.querySelector("#input-text");
  inputTextH3.innerText = inputValue;
};

// Para poner aquí los event listeners en lugar de en HTML, hacemos:
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", onButtonClicked);

const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener("input", onInputChanged);
