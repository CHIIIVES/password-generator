// Assignment code here

//set arrays for eligible characters to add to password
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '1234567890'.split('');
const special = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'.split('');

function getCriteria() {
  let criteria = [0, false, false, false, false];

  let length = 0;

  do {
    length = Number(parseInt(prompt("Enter password length (8-128):")))
  } while (!(length >= 8 && length <= 128));
  
  criteria[0] = length;
  while (!criteria.includes(true)) {
    alert("Please include at least one criteria for your password");
    criteria[1] = confirm("Include uppercase letters?");
    criteria[2] = confirm("Include lowercase letters?");
    criteria[3] = confirm("Include numbers?");
    criteria[4] = confirm("Include special characters?");
  }


  return criteria;
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
  const criteria = getCriteria();
  let passString = "";

  // add a character to passString based on length stored in criteria[0]
  for (let i = 0; i < criteria[0]; i++){
    let executed = false;

    // assign generators to functArray
    const functArray = [genUpper(), genLower(), genNumber(), genSpecial()];

    // pick index from functarray
    let randomIndex = Math.floor(Math.random() * 4);

    // execute at least once if the criteria is true
    do {
      randomIndex = Math.floor(Math.random() * 4);
      if (criteria[randomIndex + 1]) {
        passString += functArray[randomIndex];
        executed = true;
      }
    } while(!executed)
  }
  console.log(passString.length);
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
