// var, let , const statements

// statement creates (declares) a variable with the name "message"

let message;

// the assignment operator is =

message = "Hello"; //"Hello" (String) is stored in the variable "message"

// access the variable

let message = "Hello"; // statement + variable + operator + Value
console.log(message); // shows the variable in the output console

// const are statements which cant be changed (unchanging) variables

const myBirthday = '18.04.1982' // "18.04.1982" cant be changed otherwise an error is thrown


// Summary: We can declare variables to store data by using the var, let, or const keywords.
let //is a modern variable declaration
var //is aa old variable declaration
const //is like let but the variable can't be changed


// Task 1
//1. Declare  two variables: admin and name.
//2. Assign the value "John" to name.
//3. Copy the value from name to admin.
//3. Show the value of admin using alert (must output “John”).

let admin, name;
name ="John";
admin = name;

console.log(admin)

// In HTML file this code would look like this:
<!DOCTYPE html>
<script>
"use strict";

let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert( admin ); // "John"
</script>

// Task 2 
// 1. Create a variable with the name of our planet. How would you name such a variable?
// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?

let ourPlanet, currentVisitor;

ourPlanet = "Bob" // Like the new earthlike planet "Bob" from the movie "TITAN AE"

currentVisitor = "John";

// note: variable names( short, catchy, 3 words max)

