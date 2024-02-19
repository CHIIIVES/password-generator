// Assignment code here
// const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const uppers = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '1234567890'.split('');
const special = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'.split('');
let criteria = [0, false, false, false, false];
console.log(uppers);
console.log(lowers);
console.log(special);

function getCriteria() {
  const length = prompt("Enter password length:");
  return [42, true, true, true, true];
}

function genUpper() {
  return uppers[Math.floor(Math.random()*uppers.length)];
}

function genLower() {
  return lowers[Math.floor(Math.random()*lowers.length)];
}

function genNumber() {
  return numbers[Math.floor(Math.random()*numbers.length)];
}

function genSpecial() {
  return special[Math.floor(Math.random()*special.length)];
}

function generatePassword() {
  criteria = getCriteria();
  let passString = "";
  for (let i = 0; i < criteria[0]; i++)
  {
    passString += genUpper();
    console.log("test");
  }

  return passString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
