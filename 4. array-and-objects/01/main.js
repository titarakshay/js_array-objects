var myPenguin={
    name:"Misha",
    Origin: "PenguinIsland",
    Author:	"AnatoleFrance",
    canFly: false
    }

    
// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
    myPenguin.favoriteFoods=["fish","sparts","mullets"];

// 2. Access your penguin's second favorite food and print it to the console using console.log()
    console.log(myPenguin.favoriteFoods[1]);

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
    var firstFavfood=myPenguin.favoriteFoods[0];

// 4. Add another food to the end of the list.

    myPenguin.favoriteFoods.push("chicken");

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()
    myPenguin.favoriteFoods.length;

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
    myPenguin.favoriteFoods.splice(3,3,"pineapple");
// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.
    var val=myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];
    console.log(val);
// 8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)
    for (let keys in myPenguin.favoriteFoods){
    console.log(myPenguin.favoriteFoods[keys]);
    }
    