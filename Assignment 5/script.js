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
