// TASK 1 
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx"

var zakatPercentage = .025;
var userInput = prompt("enter your value");
var result = Number(userInput)*zakatPercentage;
var ZakatResult = ("your zakat value is : Rs ");
alert(ZakatResult + result)

alert ( "Thanks for your input!" );




// TASK 2
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message

let familyMembers = +prompt("How many members are there in your family ? ");
alert ("five metods of paying fitra : 1)Wheat 2)barely flour 3)Dates 4)dried grapes ");
fitrahMethod = +prompt("Choose the fitrah method between 1 to 4 :");
if (fitrahMethod == 1){
    method1 = familyMembers*250 ;
    alert("your fitrah amount is :Rs " + method1 );
} else if (fitrahMethod == 2){
    method2 = familyMembers*450 ;
    alert("your fitrah amount is :Rs " + method2 );

}else if (fitrahMethod == 3){
    method3 = familyMembers*2100 ;
    alert("your fitrah amount is :Rs " + method3 );
}else if (fitrahMethod == 4){
    method4 = familyMembers*2100 ;
    alert("your fitrah amount is :Rs " + method4 );
}

// TASK 3
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

let secretNum = 5;
userNum = +prompt("Guess the secret number between 1 to 10 :");
if (userNum == secretNum){
    alert("Congratulations ! you guessed the Secret number");

} else if(userNum < secretNum){
    alert("Your value is low . Guess again");
} else if(userNum > secretNum){
    alert("Your value is high . Guess again ");
}
// TASK 4
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).
let userName = prompt("enter your name");
let capitalizedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
alert( capitalizedName);

// TASK 5
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

let contactNumbers = [];
let contactNames = [];
for (i = 1 ; i<=3 ; i++) {
  let contactNumber = prompt("Enter a contact number ");
  let contactName = prompt("Enter a contact name:");
  contactNumbers.push(contactNumber);
  contactNames.push(contactName);
}
for (let i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i] + ": " + contactNames[i]);
}
// TASK 6
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

let products =["LED ", "TV ", "Fridge " ,"Washing Machine " , "Dispensor " , "Microwave " , "Oven "];
alert(products);
let userWants = +prompt("Give the position of the product you want :");
 let index = parseInt(userWants) -1 ;
 let removeProduct = products.splice(index ,1)[0];
 console.log("Removed product is :" + removeProduct);
 console.log("product list :" + products);
 console.log("length of the product array is :" + products.length);

//  TASK 7
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.
let nationality = prompt("What is your nationality ?");
let gender = prompt("What is your gender ?");
let age =parseInt(prompt("Enter your age :"));
if (nationality === "Pakistani" || nationality === "Indian"){
    if(gender === "male"&& age >= 18 ){
        console.log("you are eligible to vote ");
    } else if (gender === "female" & age >= 18){
        let married = prompt("Are you married or not ? ");
        if (married ==="yes"){
            console.log("you are eligible to vote");
        } else {
           console.log("You are not eligible to vote ");
        }
        
    } 

} else {
    console.log("you are not eligible to vote");
}


// TASK 8
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)
let WorldCupSquad = ["Babar Azam" , "Shahdab Khan" , "Asif Ali " , "Fakhar Zaman" , "Haider Ali " , "Haris Rauf " , "Iftikhar Ahmed" , "Khushdil Shah " , "MMohammad Hasnain" , "Mohammad Nawaz" , "Mohammad Rizwan" , "Mohammad Wasim jnr" , "Naseem Shah","Shaheen Shah Afridi" , "Shan Masood"];
let team = WorldCupSquad.slice(0,11);
console.log("players that are selected for worldcup squad are : "+ WorldCupSquad);
console.log("players that are selected for tomorrow's match with India are : " + team);