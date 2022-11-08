// Assignment 1
const colors = ["red", "green", "blue", "yellow", "pink"];
console.log(colors);

const result = colors.filter((item) => item.length > 4);
console.log(result);

const numbers = [...Array(99).keys()].map((x) => x + 1);
console.log(numbers);
const odds = numbers.filter((number) => {
  return number % 2 !== 0;
});
console.log(odds);

const newNumbers = numbers.map((number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`${number} Wow`);
  } else if (number % 3 === 0) {
    console.log(`${number} Hello`);
  } else if (number % 5 === 0) {
    console.log(`${number} Bye`);
  }
});
