const pollutedArr = [2, 3, 4, 5, undefined, 10];
const newArr = pollutedArr.filter((x) => Number.isInteger(x)).map((x) => x * 2);
console.log(newArr);

// Extract quotes of Albert Einstein
const quotations = [
  {
    quoteText: "I never think of the future. It comes soon enough.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quoteText: "In the middle of every difficulty lies opportunity.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quoteText:
      "Courage is going from failure to failure without losing enthusiasm.",
    quoteAuthor: "Winston Churchill",
  },
];
const albertQuotes = quotations
  .filter((item) => item.quoteAuthor.includes("Albert Einstein"))
  .map((item) => item.quoteText);
console.log(albertQuotes);
