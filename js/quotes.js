const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them",
    author: "Confucius",
  },
  {
    quote: "Age is no guarantee of maturity",
    author: "Lawana Blackwell",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const text = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${text.quote}"`;
author.innerText = text.author;
