
  
 var generateBtn = document.querySelector("#generate");

 function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
 }

 function getRandoItem(list) {
    return list[randomInt(list.length)]
 }

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

    var numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var symbolList =  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
    var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var passwordOptions = []

    for (var i = 0; i < lowerCase.length; i++) {
        upperCase[i] = lowerCase[i].toUpperCase();
    }

    if (userNumbers === true) {
        passwordOptions.push(numList);
    }

    if (userSymbols === true) {
        passwordOptions.push(symbolList);
    }

    if (userLowerCase === true) {
        passwordOptions.push(lowerCase);
    }

    if (userUpperCase === true) {
        passwordOptions.push(upperCase);
    }

    // Message when no options are selected
    if (passwordOptions === 0) {
        alert("Please select at least one option.");
        
    }
    // create empty string to add a random character to each for loop
    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) {
        var randoList = getRandoItem(passwordOptions)
        var randoChar = getRandoItem(randoList)
        generatedPassword += randoChar
    }

    return generatedPassword
 }


 





 //Password going to text box
    function writePassword(){
        var password = generatePassword();
        var passwordText = document.querySelector("#password")

        passwordText.value = password;
    }


 //Add listener to button
 generateBtn.addEventListener("click", writePassword);
  

  