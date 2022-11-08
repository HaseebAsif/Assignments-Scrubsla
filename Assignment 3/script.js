// Assignment 3
const thirtyNumbers = [...Array(30).keys()].map((x) => x + 1);
const sum = thirtyNumbers.reduce((sum, a) => sum + a, 0);
const evenNumberSum = thirtyNumbers.reduce(
  (a, b) =>
    b % 2 === 0
      ? { odd: a.odd, even: a.even + b }
      : { even: a.even, odd: a.odd + b },
  { even: 0, odd: 0 }
);
const evenNumber = thirtyNumbers.filter((number) => number % 2 == 0);
console.log(evenNumber);

console.log(evenNumberSum);
const newArray = thirtyNumbers.reduce((a, b) => {
  if (b % 3 === 0 && b % 5 === 0) {
    console.log(`${b} Wow`);
  } else if (b % 3 === 0) {
    console.log(`${b} Hello`);
  } else if (b % 5 === 0) {
    console.log(`${b} Bye`);
  }
});

console.log(newArray);

const thirtyNumbersReverse = [...Array(30).keys()].reverse().map((x) => x + 1);
console.log(thirtyNumbersReverse);
const thirtyNumbersReverseReduce = thirtyNumbers.reduce(
  (a, b) => [b, ...a],
  []
);
console.log(thirtyNumbersReverseReduce);
