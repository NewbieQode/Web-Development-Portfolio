// Defined a constructor function to create shoe objects //
function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}
// defined 5 instances
let Shoes1 = new Shoes("Nike", "034137", 1, 150);
let Shoes2 = new Shoes("Converse", "036258", 3, 90);
let Shoes3 = new Shoes("Adidas", "033459", 1, 105);
let Shoes4 = new Shoes("UGGs", "037362", 2, 210);
let Shoes5 = new Shoes("Timberlands", "032568", 3, 135);

let sheo = [];
sheo.push(Shoes1, Shoes2, Shoes3, Shoes4, Shoes5);

// Defined a function to find specific sheo by the name property //
function find(arr) {
  for (i = 0; i < arr.length; i++) {
    return arr[i].name;
  }
}
console.log(find(sheo));

// Defined a function to find the sheo with the lowest value //
function lowestValue(arr) {
  arr.sort((firstShoes, secondShoes) =>
    firstShoes.valuePerItem < secondShoes.valuePerItem ? -1 : 1
  );
  console.log(
    `The sheo with the lowest value per item: £${arr[0].valuePerItem}`
  );
}
lowestValue(sheo);

// Defined a function to find the shoe with the highest value //
function highestValue(arr) {
  arr.sort((firstShoes, secondShoes) =>
    firstShoes.valuePerItem > secondShoes.valuePerItem ? -1 : 1
  );
  console.log(
    `The sheo with the highest value per item: £${arr[0].valuePerItem}`
  );
}
highestValue(sheo);

// Defined a function to order all the objects in ascending order based on the valuePerItem property //
function orderValues(a, b) {
  return a.name - b.name;
}
console.log(sheo.sort(orderValues));

// definded functions to edit specific properties for each of the five shoe instances //
function editValue(sheo, sheoValue, newValue) {
  for (let i = 0; i < sheo.length; i++) {
    if (sheo[i].valuePerItem === sheoValue) {
      sheo[i]["valuePerItem"] = newValue;
      return sheo[i];
    }
  }
}
editValue(sheo, 90, 120);

function editQuantity(sheo, sheoQuantity, newQuantity) {
  for (let i = 0; i < sheo.length; i++) {
    if (sheo[i].quantity === sheoQuantity) {
      sheo[i]["quantity"] = newQuantity;
      return sheo[i];
    }
  }
}
editQuantity(sheo, 1, 2);

function editCode(sheo, sheoCode, newCode) {
  for (let i = 0; i < sheo.length; i++) {
    if (sheo[i].productCode === sheoCode) {
      sheo[i]["productCode"] = newCode;
      return sheo[i];
    }
  }
}
editCode(sheo, "033459", "023459");

function editName(sheo, sheoName, newName) {
  for (let i = 0; i < sheo.length; i++) {
    if (sheo[i].name === sheoName) {
      sheo[i]["name"] = newName;
      return sheo[i];
    }
  }
}
editName(sheo, "Nike", "Puma");
// Displayed the updated sheo details in a table using built-in table function //
console.log("\nThe updated table: ");
console.table(sheo);
