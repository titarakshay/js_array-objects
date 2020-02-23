
var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

    //1.Create a new variable named penguins and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)
    var penguins =[gunter,ramon,fred];
 
    //2. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)
 
    console.log(penguins[0]);
 
    //3.Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
    
    let secondPenguin=penguins[1];
 

// 4 Print to the console the name of the last penguin in the list.
 
    console.log(penguins[penguins.length-1].name);
 
//5. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!
    
    penguins.push(myPenguin);

 
//   6. Print the length of the penguins array to the console.
    penguins.length;

 
//7. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).

    penguins[0].gunter.canFly=true;

//8.Call the sayHello method of the first penguin in your penguins array!

    penguins[0].sayHello();
 
//9.Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
    for (let key in penguins){
        console.log(penguins[key].name);
        }

// 10.Write a for loop to call the sayHello method of every penguin in the array!
for (let key in penguins){
  console.log(penguins[key].sayHello());
  }

//11.Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2
 for (let i=0;i<penguins.length;i++){
  penguins[i].numberOfFeet=2;
}

//12.Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)
 for (let i=0;i<penguins.length;i++){
  if(penguins[i].canFly==true){
    console.log(`${penguins[i].name} can fly!`)
  }
  }