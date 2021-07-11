// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

// Declaring variables to store user data and inputs
  var characterCount = prompt("How many characters would you like your password to be? Please enter a number between 8 to 128.");
  var includeLowerCase = confirm("Should the password include lower case letters?");
  var includeUpperCase = confirm("Should the password include upper case letters?");
  var includeNumeric = confirm("Should the password include numberic values?");
  var includeSpecialCharacters = confirm("Should the password include upper case letters?");

// Where we store acceptable criteria and data
  var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
  var upperCaseLetters = lowerCaseLetters.toUpperCase();
  var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
  var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
  var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

// Run the function in a loop iterating as many times as the user specified in the prompts
  for (var i = 0; i < characterCount; i++) {
    if (includeLowerCase) {
      var lowerCaseArray = lowerCaseLetters.split(' ');
      var upperCaseArray = upperCaseLetters.split(' ');
      console.log(lowerCaseArray);
      console.log(upperCaseArray);
    }
  }


  return writePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

