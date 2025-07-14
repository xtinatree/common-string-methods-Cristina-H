/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.

let stringActivty1 = "Learning JavaScript is fun!";
console.log(stringActivty1.includes("JavaScript")); //returns: true
console.log(stringActivty1.indexOf("fun"));  //returns: 23



Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.


let stringAct2 = " CODE BOOTCAMP ";
let lowerCaseStringAct2 = stringAct2.toLowerCase().trim();

console.log(lowerCaseStringAct2);  //returns: code bootcamp

let newStringAct2 = lowerCaseStringAct2.replace("bootcamp","JavaScript");

console.log(newStringAct2);       //returns: code JavaScript




Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

let stringAct3 = "Coding is fun and educational";
let arrayAct3 = stringAct3.split(" ");

console.log(arrayAct3);   //returns: [ 'Coding', 'is', 'fun', 'and', 'educational' ]




Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.

let textAct4 = "Bootcamp";

console.log(textAct4.charAt(0));    //returns: B

let partialTextAct4 = textAct4.slice(4,9);
console.log(partialTextAct4);  //returns: camp



Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").

let challengeString = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;

let customerLine = challengeString.split("\n") [0];
let customerName = customerLine.split(": ") [1];
console.log(customerName); //returns: John Doe

let itemsLine = challengeString.split("\n") [1];
console.log(itemsLine);   //did a check on the return:     Order: Apple, Banana, Grape
let fruitsOnly = itemsLine.slice(7);

console.log(fruitsOnly);

let itemsArray = fruitsOnly.split(/[,;]/);
console.log(itemsArray);  //returns: [ 'Apple', ' Banana', ' Grape' ]

let totalLine = challengeString.split("\n") [2];
console.log(totalLine); //returns: Total: $20.50
console.log(totalLine.toUpperCase());   //returns: TOTAL: $20.50
*/




/*
Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.
*/










//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript"); 
let codingPosition = inputString.indexOf("Coding");
let startsWithWelcome = inputString.startsWith("Welcome"); //It starts with a space, not Welcome
let endsWithToday = inputString.endsWith("Today"); // It ends with a space

// 2. Transforming
let lowercaseString = inputString.toLowerCase(); 
let uppercaseString = inputString.toUpperCase(); 
let trimmedString = inputString.trim(); 
let replacedString = inputString.replace("JavaScript","coding"); 

// 3. Breaking Apart
let wordsArray = inputString.split(" "); 

// 4. Retrieving
let firstCharacter = inputString.charAt(0); // Your code here
let extractedBootcamp = inputString.slice(24,32); // Your code here

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
