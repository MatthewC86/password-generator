// passwordOptions contains all necessary string data needed to generate the password


let passwordOptions = {
    num: "1234567890",
    specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };
  
 var generateBtn  =document.querySelector("#generate");

 function generatePassword() {

    var userInput = window.prompt("How many characters would you like?")

    var passwordLength = parseInt(userInput)
    //Check to ensure a number is being entered.
    if (isNaN(passwordLength)) {
        alert("That's not a number!")
    //User returned for NaN.
    return null;
    }

    //Next, we write a statement to ensure is at least 8 and no more than 128

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Must be between 8 and 128 characters")
        return null;
    }

 }
  

  