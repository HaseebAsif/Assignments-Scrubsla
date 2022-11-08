// Assignment 2

const names = ["john", "jack", "kevin"];
const TitleCase = names.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
const namesWithIndex = TitleCase.map((item, index) => {
  console.log(`${index}: ${item}`);
});
console.log(TitleCase);
