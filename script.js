// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword () {
  var passwordlength = parseInt(prompt("enter password length")) //funtion created for passwrod generation
  if (passwordlength < 8 || passwordlength > 126 || isNaN(passwordlength)) { //creates conditional statement on whether or not password length is valid
    return "please enter a valid password length"
  }
  var upperCaseLetters = confirm("Would you like to have UPPERCASE LETTERS in your password?")// creates criteria for password ->
  var lowerCaseLetters = confirm("Would you like to have lowercase letters in your password?")
  var numbers = confirm("Would you like to have Numbers in your password?")
  var symbols = confirm("Would you like to have symbols in your password?")
  var characters = []
  if (upperCaseLetters) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //adds UPPERCASE Letters to the genreator
  }
  
  if (lowerCaseLetters) {
    characters += "abcdefghijklmnopqrstuvwxyz" //adds lowercase letters to the generator
  }
  
  if (numbers) {
    characters += "0123456789" //adds numbers to the generator
  }
  
  if (symbols) {
    characters += "!@#$%&?/\=+" // adds symbols to the generator
  }
  if (characters.length === 0) {
    return " Please select a criteria"
  } // creates error messoge if no criteria is selected
  var password = ""
  for ( i = 0; i < passwordlength; i++) { // for loop created to generate the password
    var index = Math.floor(Math.random () * characters.length)
     password += characters[index]
    
  }
  return password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);