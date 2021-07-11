// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password Main Function
function generatePassword() {

  // Get the value of how many characters the user wants in their password. Validate to make sure it's a number between 8 - 128
  var characterCount = prompt("How many characters would you like your password to be? Please enter a number between 8 to 128.");

    // Validates the users input for character count. If the user enters a valid response the next process will begin
    if (isNaN(characterCount)) {
      alert("Please Enter only a number between 8 and 128");
      return;
    } else if (characterCount < 8 || characterCount > 128) { // Checking that number is between 
      alert("Please Enter only a number between 8 and 128");
      return;
    } else { // Storing user inputs as confirms to check for true or false later
      var includeLowerCase = confirm("Should the password include lower case letters?");
    }

    // If user confirms they want lowercase letters, begin next process
    if (includeLowerCase) {

    }
  
  var includeUpperCase = confirm("Should the password include upper case letters?");
  var includeNumeric = confirm("Should the password include numberic values?");
  var includeSpecialCharacters = confirm("Should the password include upper case letters?");

  // Where we store acceptable criteria and data
  var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
  var upperCaseLetters = lowerCaseLetters.toUpperCase();
  var numericCharacters = Math.floor(Math.random() * 10);
  var specialCharacters = '~ ` ! @ # $ % ^ & * ( ) - _ + = { } [ ] | / : ; "';
  var specialCharacters2 = "' > < , . ?";
  var specialCharacters3 = specialCharacters.concat(specialCharacters2);

  // Run the function in a loop iterating as many times as the user specified in the prompts
  for (var i = 0; i < characterCount; i++) {
    if (includeLowerCase) {
      var lowerCaseArray = lowerCaseLetters.split(' ');
      var upperCaseArray = upperCaseLetters.split(' ');
      // var numericArray = numericCharacters.split(' ');
      var specialCharactersArray = specialCharacters3.split(' ');
      console.log(lowerCaseArray);
      console.log(upperCaseArray);
      // console.log(numericCharacters);
      console.log(specialCharactersArray);
    }
  }

  // End Generate Password Function
  return writePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

