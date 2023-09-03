const TECHNOLOGIES = [
  "Javascript",
  "HTML",
  "CSS",
  "React",
  "Vite",
  "Typescript",
];

const setUpTechnoligiesList = () => {
  const listElement = document.createElement("ul");
  listElement.className = "technologies";

  for (let i = 0; i < TECHNOLOGIES.length; i++) {
    const Technology = TECHNOLOGIES[i];
    const liElement = document.createElement("li");

    const buttonElement = document.createElement("button");
    buttonElement.innerText = "Eliminar";
    buttonElement.className = "delete-button";

    liElement.innerText = Technology;
    liElement.append(buttonElement);
    listElement.append(liElement);
  }

  document.body.append(listElement);
};

const handleDelete = (event) => {
  const liElement = event.target.parentElement;
  liElement.remove();
};

const addDeleteButtonListeners = () => {
  const deleteButtons = document.querySelectorAll(".delete-button");
  for (let i = 0; i < deleteButtons.length; i++) {
    const deleteButton = deleteButtons[i];
    deleteButton.addEventListener("click", handleDelete);
  }
};

setUpTechnoligiesList();
addDeleteButtonListeners();
