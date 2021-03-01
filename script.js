// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declare global variable
var numbers = "0123456789";
var numbersArray = numbers.split("");
var lower = "qwertyuiopasdfghjklzxcvbnm";
var lowerArray = lower.split("");
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var upperArray = upper.split("");
var special = " !#$%&'()*+,-./:;<=>?@[]\"^_`{|}~";
var specialArray = special.split("");
var basket = [];



//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
var generatePassword = function() {
  
  // setting character length
  var charLength = prompt("How many characters would you like your password to have?  Please choose between '8' and '128' characters.", "8");
  charLength = parseInt(charLength);
  console.log('Character length is ' + charLength);
  
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    return console.log(alert("The password must be between 8 to 128 characters."));
  }

  var numbersConfirm = confirm("Would you like to use numbers in your password?");
  var lowerConfirm = confirm("Would you like to use lowercase letters in your password?");
  var upperConfirm = confirm("Would you like to use uppercase letters in your password?");
  var specialConfirm = confirm("Would you like to use special characters in your password?");

  if (numbersConfirm) {
  basket = basket.concat(numbers);
  }

  if (lowerConfirm) {
    basket = basket.concat(lower);
  }
    
  if (upperConfirm) {
    basket = basket.concat(upper);
  }

  if (specialConfirm) {
    basket = basket.concat(special);
  }
}

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}