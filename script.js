// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the Password

// Array variables to hold all Characters used for password
var lowercaseArray = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
var uppercaseArray = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
var numericArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var specialArray = [ ' ', '!', '"', '#', '$', '%', '$', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', `]`, '^', '_', '`', '{', '}', '|', '~' ];

function generatePassword() {
  // Promts to obtain criteria for password
  var passlength = window.prompt('Enter desired length of password(min 8, max 128)', '8');
  var lowercase = window.confirm('Include lowercase?');
  var uppercase = window.confirm('Include uppercase?');
  var numeric = window.confirm('Include numbers?');
  var special = window.confirm('Include special characters?');
  var password = '';

  // Creates an array to hold the character arrays for selected criteria
  var chocies = [];
  if (lowercase) {
    chocies.push(lowercaseArray)
  }
  if (uppercase) {
    chocies.push(uppercaseArray)
  }
  if (numeric) {
    chocies.push(numericArray)
  }
  if (special) {
    chocies.push(specialArray)
  }

  // Loops thru the password length and randomly selects an characterArray and random Character for each iteration
  for(let i = 0; i < passlength; i++){
    var randomIndex = Math.floor(Math.random() * chocies.length);
    var randomCharacter = Math.floor(Math.random() * chocies[randomIndex].length);
    password += chocies[randomIndex][randomCharacter];
  }

  return password;
}
