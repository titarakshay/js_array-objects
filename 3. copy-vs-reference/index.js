// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x;
var b = y;

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x;
var b = y;
a = 5;
b = "def";

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);

// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };

// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2); false
console.log(arr == arr2); false

//What's the output
console.log([10] === [10]); false

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ? {name: "Alex", age: 25}
console.log(personObj2); // -> ? {name: "John", age: 50}*

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray); true

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a); 10
console.log(b); 5

// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a); {a:1}
console.log(b); {a:1}

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); true // var b = a (it copy  reference)

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = {...person};

// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";
let user = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user2 = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user3 = {
  name: "Arya",
  house: "Stark",
  brothers: ["John", "Bran", "Robb"]
};
// Output of the below code and why?
user.house === user2.house; // output: true ( house key's value is also same)
user.house == user2.house; // output: true   (both are object and house key value is also same)
user.brothers === user2.brothers; // output: true ( brothers array reference is also same)
user.brothers == user2.brothers; // output: true  (both are object and brothers array reference is also same)
user.name == user2.name; // output: true ( name key's value is  same)
user.name === user2.name; // output: true (both are object and name key value is also same)
user.brothers == user3.brothers; // output: false (both are object but brother array refernce are different)
user.brothers === user3.brothers; // output: false (both are object but brother array refernce are different)
user.house === user2.house; // output  true (both are object and value of house key's also same)
user.house === user3.house; // output true (both are object and value of house key's also same)
user.brothers[0] === user2.brothers[0]; // output  true (here we check the array index[0] value is same)
user.brothers[0] === user3.brothers[0]; // output  true (here we check the array index[0] value is same)
