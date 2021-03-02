// Set global variables

var charLength;
var numbers = "0123456789";
var numbersArray = numbers.split("");
var lower = "qwertyuiopasdfghjklzxcvbnm";
var lowerArray = lower.split("");
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var upperArray = upper.split("");
var special = " !#$%&'()*+,-./:;<=>?@[]\"^_`{|}~";
var specialArray = special.split("");
var basket = [];

// Create a series of actions for password criteria

var passCriteria = function() {

  // Set the password length between 8 and 128 characters

  charLength = prompt("How many characters would you like your password to have?  Please choose between '8' and '128' characters.", "8");
  
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    return console.log(alert("The password must be between 8 to 128 characters."));
  }

  // Set a series of confirm boxes to choose a custom criteria

  var numbersConfirm = confirm("Would you like to use numbers in your password?");
  var lowerConfirm = confirm("Would you like to use lowercase letters in your password?");
  var upperConfirm = confirm("Would you like to use uppercase letters in your password?");
  var specialConfirm = confirm("Would you like to use special characters in your password?");

  // Add the numbers array to the basket

  if (numbersConfirm) {
    basket = basket.concat(numbersArray);
  }

  // Add lowercase array to the basket

  if (lowerConfirm) {
    basket = basket.concat(lowerArray);
  }
  
  // Add uppercase array to the basket

  if (upperConfirm) {
    basket = basket.concat(upperArray);
  }

  // Add special charectares array to the basket

  if (specialConfirm) {
    basket = basket.concat(specialArray);
  } 
  
  // Input validation to include at least one character type

  if (!lowerConfirm && !upperConfirm && !numbersConfirm && !specialConfirm) {
    alert("You password must at least have 1 type of characters to generate a password!\nPlease re-generate it.");
    return passCriteria();
  }
}

var generateBtn = document.querySelector("#generate");
var passwordButton = document.querySelector("#password");

// Add event listener to generate button

generateBtn.addEventListener("click", passCriteria);
generateBtn.addEventListener("click", writePassword);

// Display the password written to the page

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}