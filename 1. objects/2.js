// Using the different way of accessing and assigning a value to the object using `.` or `[]`

// 1. Define a variable named `user` and assign a blank object to it.
var object={

}
var user=object;

// 2. Add a key of `user name` and a value of `Black Panther` to that object.
var object={
    username:"black panther"
}

// 3. Using `console.log` log the value of `user name` key from the user object.
var object={
    username:"akshay"
}
console.log(object.username);
// 4. Add a key of the value of variable `batch` in the object with the value of 10.
var batch = "myBatch";
var object={
    batch:10
}

// 5. Using the alert function alert the value of the key added above.
alert(object.batch);
// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.
var object={
    42:"the answer to the meaning of life"
}
// 7. Using the function console.log log the value of the key `42`.
console.log(object[42]);
// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.
var city = prompt("Enter the city name you visited las time.");
var object={
    true:city
}
// 9. Uisng console.log log the value of the key defined above.
console.log(object.true);

// 10. Can you define a key of `let or var` in any object? Reason.
 No , we cannot define or declare primitive value in non-primitive value, key does not contain any spaces .
