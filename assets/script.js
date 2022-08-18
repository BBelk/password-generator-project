// Assignment Code

var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["\"", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  newInput = parseInt(prompt("How long will your password be? Input between 8 and 128."));
  if(!newInput || newInput < 8 || newInput > 128){
    alert("You must input a number between 8 and 128.");
    return;
  }
  
    var confirmLowercase = confirm("Include lowercase characters?");
    var confirmUppercase = confirm("Include uppercase characters?");
    var confirmNumber = confirm("Include number characters?");
    var confirmSpecial = confirm("Include special characters?");
    
    if(!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial){
      alert("You must confirm at least one type of characters. Try again.");return;
    }
    var allAvailableChars = [];
    if(confirmLowercase){allAvailableChars.push(...lowercaseChars);}
    if(confirmUppercase){allAvailableChars.push(...uppercaseChars);}
    if(confirmNumber){allAvailableChars.push(...numberChars);}
    if(confirmSpecial){allAvailableChars.push(...specialChars);}

    var newPasswordString = "";
    for(var x = 0; x < newInput; x++){
      newPasswordString = "" + newPasswordString + allAvailableChars[Math.floor(Math.random()*allAvailableChars.length)];
    }
    console.log("NEW PASSWORD IS " + newPasswordString);
    return newPasswordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(typeof password === 'undefined'){
    password ="";
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);