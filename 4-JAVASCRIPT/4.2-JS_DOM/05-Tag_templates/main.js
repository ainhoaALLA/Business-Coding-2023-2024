const QUOTES = [
  {
    quote: "No hay que ir para atrás ni para darse impulso",
    author: "Lao Tsé",
    year: "456 A.C.",
  },
  {
    quote:
      "La vida exige a todo individuo una contribución y depende del individuo descubrir en qué consiste",
    author: "Viktor Franki",
    year: "1975",
  },
  {
    quote: "Debes hacer las cosas que crees que no puedes hacer",
    author: "Eleanor Roosevelt",
    year: "1933.",
  },
];

const quoteList = document.querySelector("#quotes-list");

const getQuoteTemplate = (quote, author, year) => {
  return `<div class="quote-block">
    <blockquote>${quote}</blockquote>
    <p>${author} - ${year}</p>
 </div>`;
};

const setUpQuoteList = () => {
  for (let i = 0; i < QUOTES.length; i++) {
    const quoteElement = QUOTES[i];
    quoteList.innerHTML += getQuoteTemplate(
      quoteElement.quote,
      quoteElement.author,
      quoteElement.year
    );
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const newQuote = {
    author: formElements.author.value,
    quote: formElements.quote.value,
    year: formElements.year.value,
  };
  quoteList.innerHTML += getQuoteTemplate(
    newQuote.quote,
    newQuote.author,
    newQuote.year
  );
  event.target.reset();
};

const form = document.querySelector("#quote-form");
form.addEventListener("submit", handleFormSubmit);

setUpQuoteList();
