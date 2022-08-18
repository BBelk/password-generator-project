// Assignment Code
var confirmLowercase = false;
var confirmUppercase = false;
var confirmNumber = false;
var confirmSpecial = false;

var generateBtn = document.querySelector("#generate");


function generatePassword(){
  console.log("Button Pressed");
  newInput = parseInt(prompt("How long will your password be? Input between 8 and 128."));
  if(!newInput || newInput < 7 || newInput > 128){
    alert("You must input a number between 8 and 128.");
    return;
  }
  
    confirmLowercase = confirm("Include lowercase characters?");
    confirmUppercase = confirm("Include uppercase characters?");
    confirmNumber = confirm("Include number characters?");
    confirmSpecial = confirm("Include special characters?");
    if(!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial){
      alert("You must confirm at least one type of characters. Try again.");return;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(typeof password === 'undefined'){
    password = "Password generation failed, try again.";
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














// // Assignment Code-Default
// var generateBtn = document.querySelector("#generate");

// function generatePassword(){
  
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
