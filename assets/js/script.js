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

  // Adds some padding to the bottom of the password text field to ensure the 128 character passwords can fit within the container
  var passwordText = document.querySelector("#password");
  passwordText.style.paddingBottom = "110px";

  // Get the value of how many characters the user wants in their password. Validate to make sure it's a number between 8 - 128
  var characterCount = prompt("How many characters would you like your password to be? Please enter a number between 8 to 128.");

    // Validates the users input for character count. If the user enters a valid response the next process will begin
    if (isNaN(characterCount)) {
      alert("Please enter only a number between 8 and 128");
      return;
    } else if (characterCount < 8 || characterCount > 128) {
      alert("Please enter only a number between 8 and 128");
      return;
    } else { // Begin next Process
      var includeLowerCase = confirm("Should the password include lower case letters?");
      var includeUpperCase = confirm("Should the password include upper case letters?");
      var includeNumeric = confirm("Should the password include numeric values?");
      var includeSpecialCharacters = confirm("Should the password include special characters letters?");
    }

    // Where we store acceptable criteria and data
    var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // Setting the upper case letters
    var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // Generating a random number from 0-9
    var numericCharacters = ['1','2','3','4','5','6','7','8','9','0'];
    // Had to put the special characters
    var specialCharacters = ['?',',','<','>',"'",'"',';',':','/','|','[',']','=','_','&','^','!','#','$','%','(',')','*','+','-','.','~','`','@','{','}'];

    // Initializing Total Dataset Array
    var dataArray = [];

      // If user confirms, begin process
      if (includeLowerCase) dataArray = dataArray.concat(lowerCaseLetters);
      if (includeUpperCase) dataArray = dataArray.concat(upperCaseLetters);
      if (includeNumeric) dataArray = dataArray.concat(numericCharacters);
      if (includeSpecialCharacters) dataArray = dataArray.concat(specialCharacters);

      // If user says no to everything
      if(!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialCharacters) {
        alert("You must select at least one of the possible character types to generate a password.");
        return;
      }

      console.log("Total Data Set in Array is " + dataArray);
      var password = [];

      // Run the function in a loop iterating as many times as the user specified in the prompts
      for (var i = 0; i < characterCount; i++) {
        // Grabs the a random number between 1 and the max length of the array
        var dataArrayIndex = dataArray[Math.floor(Math.random() * dataArray.length)];
        password += dataArrayIndex;

        // End Loop for Generating Random Characters
      }

      // Log to the console
      console.log("Generated Password is " + password);

  // End Generate Password Function
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

