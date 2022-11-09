// passwordOptions contains all necessary string data needed to generate the password


//let passwordOptions = {
   // num: "1234567890",
   // specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
    //lowerCase: "abcdefghijklmnopqrstuvwxyz",
   // upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //};
  
 var generateBtn = document.querySelector("#generate");

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
    //Prompt for options.
    var userNumbers = confirm("Would you like to include numbers?");
    var userSymbols = confirm("Would you like to include symbols?");
    var userLowerCase = confirm("Would you like to include lowercase letters?");
    var userUpperCase = confirm("Would you like to include uppercase letters?");
    
 }








 //Password going to text box
    function writePassword(){
        var password = generatePassword();
        var passwordText = document.querySelector("#text")

        passwordText.value = password;
    }


 //Add listener to button
 generateBtn.addEventListener("click", writePassword);
  

  