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

// Assignment 2

const names = ["john", "jack", "kevin"];
const TitleCase = names.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
const namesWithIndex = TitleCase.map((item, index) => {
  console.log(`${index}: ${item}`);
});
console.log(TitleCase);

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

// Assignment 4
const employees = [
  {
    id: 1,
    employee_name: "Tiger Nixon",
    employee_salary: 320800,
    employee_age: 61,
  },
  {
    id: 2,
    employee_name: "Garrett Winters",
    employee_salary: 170750,
    employee_age: 63,
  },
  {
    id: 3,
    employee_name: "Ashton Cox",
    employee_salary: 86000,
    employee_age: 66,
  },
  {
    id: 4,
    employee_name: "Cedric Kelly",
    employee_salary: 433060,
    employee_age: 22,
  },
  {
    id: 5,
    employee_name: "Airi Satou",
    employee_salary: 162700,
    employee_age: 33,
  },
  {
    id: 6,
    employee_name: "Brielle Williamson",
    employee_salary: 372000,
    employee_age: 61,
  },
  {
    id: 7,
    employee_name: "Herrod Chandler",
    employee_salary: 137500,
    employee_age: 59,
  },
  {
    id: 8,
    employee_name: "Rhona Davidson",
    employee_salary: 327900,
    employee_age: 55,
  },
  {
    id: 9,
    employee_name: "Colleen Hurst",
    employee_salary: 205500,
    employee_age: 39,
  },
  {
    id: 10,
    employee_name: "Sonya Frost",
    employee_salary: 103600,
    employee_age: 23,
  },
  {
    id: 11,
    employee_name: "Jena Gaines",
    employee_salary: 90560,
    employee_age: 30,
  },
  {
    id: 12,
    employee_name: "Quinn Flynn",
    employee_salary: 342000,
    employee_age: 22,
  },
  {
    id: 13,
    employee_name: "Charde Marshall",
    employee_salary: 470600,
    employee_age: 36,
  },
  {
    id: 14,
    employee_name: "Haley Kennedy",
    employee_salary: 313500,
    employee_age: 43,
  },
  {
    id: 15,
    employee_name: "Tatyana Fitzpatrick",
    employee_salary: 385750,
    employee_age: 19,
  },
  {
    id: 16,
    employee_name: "Michael Silva",
    employee_salary: 198500,
    employee_age: 66,
  },
  {
    id: 17,
    employee_name: "Paul Byrd",
    employee_salary: 725000,
    employee_age: 64,
  },
  {
    id: 18,
    employee_name: "Gloria Little",
    employee_salary: 237500,
    employee_age: 59,
  },
  {
    id: 19,
    employee_name: "Bradley Greer",
    employee_salary: 132000,
    employee_age: 41,
  },
  {
    id: 20,
    employee_name: "Dai Rios",
    employee_salary: 217500,
    employee_age: 35,
  },
  {
    id: 21,
    employee_name: "Jenette Caldwell",
    employee_salary: 345000,
    employee_age: 30,
  },
  {
    id: 22,
    employee_name: "Yuri Berry",
    employee_salary: 675000,
    employee_age: 40,
  },
  {
    id: 23,
    employee_name: "Caesar Vance",
    employee_salary: 106450,
    employee_age: 21,
  },
  {
    id: 24,
    employee_name: "Doris Wilder",
    employee_salary: 85600,
    employee_age: 23,
  },
];
console.log(employees);

// Question No 1 => Average
const average =
  employees.reduce(function (sum, value) {
    return sum + value.employee_age;
  }, 0) / employees.length;
console.log(average);

// Question No 2 =>  Highest Salary
const highestSalary = employees.reduce(
  (a, b) => (a.employee_salary > b.employee_salary ? a : b),
  employees[0]
);
console.log(highestSalary.employee_name);

// Question No 3 =>  highest to lowest age
const ageSort = employees.sort(
  (a, b) => parseFloat(a.employee_age) - parseFloat(b.employee_age)
);

console.log(ageSort);

// Question No 4 =>  more Then 300k income
const moreThen300k = employees.filter((number) => {
  return number.employee_salary > 300000;
});

console.log(moreThen300k);
// Question No 5 =>  Highest and Lowest Salary
const HighestAndLowestSalary = employees.reduce(
  (a, b) => {
    let Highest, Lowest;
    if (a.Highest > b.employee_salary) {
      Highest = a.Highest;
    } else {
      Highest = b.employee_salary;
    }
    if (a.Lowest !== 0 && a.Lowest < b.employee_salary) {
      Lowest = a.Lowest;
    } else {
      Lowest = b.employee_salary;
    }
    return { Highest, Lowest };
  },
  { Highest: 0, Lowest: 0 }
);
console.log(HighestAndLowestSalary);

// Question No 6 =>  Highest Salary in Employees older then 50

const EmployeesOlderThen50 = employees.filter((number) => {
  return number.employee_age > 50;
});
const highestSalaryOlderThen50 = EmployeesOlderThen50.reduce(
  (a, b) => (a.employee_salary > b.employee_salary ? a : b),
  employees
);
console.log(highestSalaryOlderThen50.employee_salary);

// Question No 7 =>  Two New Fields for First Name and Last Name

const twoColumns = employees.map((obj) => ({
  ...obj,
  employee_firstName: `${obj.employee_name.split(" ").slice(0, -1).join(" ")}`,
  employee_secondName: `${obj.employee_name.split(" ").slice(-1).join(" ")}`,
}));

console.log(twoColumns);

// Assignment 5

let enterEventCount = 0;
let leaveEventCount = 0;
const mouseTarget = document.getElementById("mouseTarget");
const unorderedList = document.getElementById("unorderedList");

mouseTarget.addEventListener("mouseenter", (e) => {
  enterEventCount++;
  addListItem(`Mouse Entered ${enterEventCount}.`);
});

mouseTarget.addEventListener("mouseleave", (e) => {
  leaveEventCount++;
  addListItem(`Mouse Left ${leaveEventCount}.`);
});

function addListItem(text) {
  // Create a new text node using the supplied text
  const newTextNode = document.createTextNode(text);

  // Create a new li element
  const newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}

function add() {
  const value1 = parseInt(document.getElementById("input1").value);
  const value2 = parseInt(document.getElementById("input2").value);

  const addition = value1 + value2;
  document.getElementById("sum").innerHTML = addition;
}

let intCount = 0;
function increment() {
  intCount++;
  document.getElementById(
    "increment"
  ).innerHTML = `Button Clicked ${intCount} times`;
}
var input = document.getElementById("todo");
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

function item() {
  let myValue;
  myValue = document.getElementById("todo").value;
  console.log(myValue);
  const newTextNode = document.createTextNode(myValue);

  // Create a new li element
  const newListItem = document.createElement("li");

  var delButt = document.createElement("button");
  delButt.appendChild(document.createTextNode("Delete"));

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);
  newListItem.appendChild(delButt);

  // Add the newly created list item to list
  itemList.appendChild(newListItem);

  // Register action on newly added elements
  delButt.addEventListener("click", deleteListElement);
  document.getElementById("todo").value = "";
}

function deleteListElement() {
  this.parentElement.remove(); // remove parent, since button is child
}
