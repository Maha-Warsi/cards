// // 2nd april 2023
// // Question no:1. Write a JavaScript program that accepts two numbers in two prompts and
// // displays the larger one in the console.

// let num1 = +prompt("Enter 1st number : ");
// let num2 = +prompt("Enter 2nd number : ");
// if (num1>num2) {
//     console.log(num1);
// } else {
//     console.log(num2);
// }
// // 3rd april 2023
// // Question no:2 . Write a JavaScript conditional statement to find the sign of a number. Display
// // an alert box with the specified sign.


// let num = +prompt("Enter a number : ");
// if (num>0) {
//     console.log("The sign is plus");
// } else {
//     console.log("The sign is negative ");
// }
// // 4th april 2023
// // Question no:3 Write a JavaScript program that accepts five numbers in five prompts and
// // displays the larger one in the console.


// let Num1 = +prompt("Enter 1st number : ");
// let Num2 = +prompt("Enter 2nd number : ");
// let Num3 = +prompt("Enter 3rd number : ");
// let Num4 = +prompt("Enter 4th number : ");
// let Num5 = +prompt("Enter 5th number : ");
// if (Num1>Num2 && Num1>Num3 && Num1>Num4 && Num1>Num5) {
//     console.log(Num1);
// } else if (Num2>Num1 && Num2>Num3 && Num2>Num4 && Num2>Num5){
//     console.log(Num2);
// } else if (Num3>Num1 && Num3>Num2 && Num3>Num4 && Num3>Num5){
//     console.log(Num3);
// }  else if (Num4>Num1 && Num4>Num3 && Num4>Num4 && Num4>Num5){
//     console.log(Num4);
// }  else{
//     console.log(Num5);
// }
// // 4 april 2023
// // Question no : 4 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// // will check if the current number is odd or even, and display a message to the
// // screen.


// for (let i = 0 ; i <=15 ; i++) {
//     if ( i % 2 === 0) {
//         console.log( i + " is even ");
//     } else{
//         console.log(i + " is odd");
//     }

// }
// // 5th april 2024
// // Question no : 5 Write a JavaScript program which computes the average marks of the
// // following students Then, this average is used to determine the corresponding
// // grade
// let number = +prompt("Enter your nuumbers out of 100 : ");
// if (number <60 ){
//     console.log("your grade is F");
// } else if (number >=60 && number <70 ){
//     console.log("your grade is D");
// }  else if (number >=70 && number <80 ){
//     console.log("your grade is C");
// }  else if (number >=80 && number <90 ){
//     console.log("your grade is B");
// } else {
//     console.log("your grade is A");
// }
// // 6th april 2023
// // Question no : 6 Write a JavaScript program which iterates the integers from 1 to 100. But for
// // multiples of three print "Fizz" instead of the number and for the multiples of five
// // print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"
// for (let x = 1 ; x <=100 ; x++){
//     if ( x % 3 === 0 && x % 5 === 0) {
//         console.log( "FizzBUzz");
//     } else if (  x % 5 === 0){
//         console.log("Buzz");
//     } else if(x % 3 === 0 ) {
//         console.log("Fizz")
//     } else{
//         console.log(x)
//     }

// }

// 7 april 2023
// Question no : 7 . Write a JavaScript program to construct the following pattern, using a nested
// for loop.

// let a,b,chr;
// for(a=1; a <=6; a++)
// {
// for (b=1; b < a; b++)
// {
// chr=chr+("*");
// }
// console.log(chr);
// chr='';
// }
// 10 april  2023

// ALERT
 var message = "Thanks, ";
 var userName = "Susan";
 var banger = "!";
 var customMess = message + userName + banger;
 alert(customMess);

//  prompt
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console,console.log(tooManyCats);

// if statement
// Q1
 var x = prompt("say Vetican")
 var correctAnswer = "Vatican";
 if (x === correctAnswer) {
 score++;
 userIQ = "genius";
 alert("Correct!");
 }
//  Q2
 if (yourTicketNumber !== 487208) {
     alert("Better luck next time.");
     }


// Q3
var correctAnswer = "Vatican";
 if (x === correctAnswer) {

 alert("Correct!");
 }
 else if (x === "Rome") {
 alert("Incorrect but close");
 }
 else {
alert("Incorrect");
}

// Q4
 if (weight > 300 && time < 6 && age > 17 && gender === "male") {
     alert("Come to our tryout!");
     }
     else {
     alert("Come to our cookout!");
     }

    //  Q5
     if (c === d) {
         if (x === y) {
         g = h;
         }
         else if (a === b) {
         g = h;
         }
         else {
         e = f;
         }
         }
         else {
         e = f;
         }
        

        //  ARRAY
 var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

 alert("Welcome to " + cities[3]);

//  FOR LOOP


 if (cityToCheck === cleanestCities[0]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[1]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[2]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[3]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[4]) {
     alert("It's one of the cleanest cities");
     }
    
     else {
     alert("It's not on the list");
     }
    
