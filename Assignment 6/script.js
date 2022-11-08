// Question 2
const division = async (a, b) => {
  var c = (await a) / (await b);
  return c;
};

const multiplication = async (a, b) => {
  var c = (await a) * (await b);
  return c;
};

const subtract = async (a, b) => {
  var c = (await a) - (await b);
  return c;
};

const add = async (a, b) => {
  var c = (await a) + (await b);
  return c;
};

const result = async () => {
  const result = await add(
    2,
    await subtract(await multiplication(3, 7), await division(2, 5))
  );
  console.log(result);
};
result();

// Question 3
class vehicle {
  constructor(color, price, company) {
    this.color = color;
    this.price = price;
    this.company = company;
  }
}

let myVehicle = new vehicle("red", "90k$", "Ford");
document.getElementById("demo").innerHTML =
  myVehicle.color + " " + myVehicle.price + " " + myVehicle.company;

function changecolor(car) {
  car.color = "blue";
}
changecolor(myVehicle);

function changeprice(car) {
  car.price = "4k$";
}
changeprice(myVehicle);

function changecompany(car) {
  car.company = "Tesla";
}
changecompany(myVehicle);

class newVehicle extends vehicle {
  constructor(color, price, company, make) {
    super(color, price, company);
    this.make = make;
  }
}
let myVehicle1 = new newVehicle("red", "100", "Tesla", "2020");
document.getElementById("demo").innerHTML =
  myVehicle1.color +
  " " +
  myVehicle1.price +
  " " +
  myVehicle1.company +
  " " +
  myVehicle1.make;
