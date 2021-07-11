// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(characterCount, includeLowerCase, includeUpperCase, includeNumeric, includeSpecialCharacters) {

  var password = generatePassword(characterCount, includeLowerCase, includeUpperCase, includeNumeric, includeSpecialCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.textContent = password;

}

// Generate Password Main Function
function generatePassword(characterCount, includeLowerCase, includeUpperCase, includeNumeric, includeSpecialCharacters) {

  // Get the value of how many characters the user wants in their password. Validate to make sure it's a number between 8 - 128
  var characterCount = prompt("How many characters would you like your password to be? Please enter a number between 8 to 128.");

    // Validates the users input for character count. If the user enters a valid response the next process will begin
    if (isNaN(characterCount)) {
      alert("Please Enter only a number between 8 and 128");
      return;
    } else if (characterCount < 8 || characterCount > 128) {
      alert("Please Enter only a number between 8 and 128");
      return;
    } else {
      var includeLowerCase = confirm("Should the password include lower case letters?");
      var includeUpperCase = confirm("Should the password include upper case letters?");
      var includeNumeric = confirm("Should the password include numeric values?");
      var includeSpecialCharacters = confirm("Should the password include special characters letters?");
    }

    // Where we store acceptable criteria and data
    var lowerCaseLetters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

    // Setting the upper case letters equal to the lower case letters and then making them capital with javascript
    var upperCaseLetters = lowerCaseLetters.toUpperCase();

    // Generating a random number from 1-9
    var numericCharacters = '0 1 2 3 4 5 6 7 8 9';

    // Had to put the special characters in 2 separate arrays and then concat them together to make one large array
    var specialCharacters = '~ ` ! @ # $ % ^ & * ( ) - _ + = { } [ ] | / : ; "';
    var specialCharacters2 = "' > < , . ?";
    var specialCharacters3 = specialCharacters.concat(specialCharacters2);

    //                                                                                                              

    // Splits the string by grabbing the characters in between empty spaces to make an array
    var lowerCaseArray = lowerCaseLetters.split(' ');
    var upperCaseArray = upperCaseLetters.split(' ');
    var numericalArray = numericCharacters.split(' ');
    var specialCharactersArray = specialCharacters3.split(' ');

    // Initializing Total Dataset Array
    var dataArray = [];

      // If user confirms, begin process
      if (includeLowerCase) dataArray = dataArray.concat(lowerCaseArray);
      if (includeUpperCase) dataArray = dataArray.concat(upperCaseArray);
      if (includeNumeric) dataArray = dataArray.concat(numericalArray);
      if (includeSpecialCharacters) dataArray = dataArray.concat(specialCharactersArray);

      // If user says no to everything
      if(!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialCharacters) {
        alert("You must select at least one of the possible character types to generate a password.");
        return;
      }

      console.log(dataArray);

      // Run the function in a loop iterating as many times as the user specified in the prompts
      for (var i = 0; i < characterCount; i++) {
        var password = [];
        // Grabs the a random number between 1 and the max length of the array
        var dataArrayIndex = Math.floor(Math.random() * dataArray.length);
        // Uses that random number that was generated to grab a random indexed character from the array
        var randomCharacterGenerator = dataArray[dataArrayIndex];
        password.push(String.fromCharCode(dataArrayIndex));
        
        // End Loop for Generating Random Characters
      }

      // Log to the console
      console.log("Random Character is " + randomCharacterGenerator);
      console.log("Generated Password is " + password);

  // End Generate Password Function
  return password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

