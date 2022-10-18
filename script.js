///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

//var to contain strings?
var charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSp = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~", "{", "}", "|"];

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  var passlengthParam = window.prompt("Enter a character length from 8 to 24");  
  if (!passlengthParam || passlengthParam < 8 || passlengthParam > 24)  {
    window.alert("Parameter error");
    return;
  }
  
  var choiceUp = window.prompt("Include upper case characters? Input (y/n))");
  if (choiceUp === "y" || choiceUp === "n") {
    
  }else{
    window.alert("Parameter error");
    return;
  }

  var choiceNum = window.prompt("Include numbers? Input (y/n)");
  if (choiceNum === "y" || choiceNum === "n") {

  }else{
    window.alert("Parameter error");
    return;
  }

  var choiceSp = window.prompt("Include special characters? Input (y/n)");
  if (choiceSp === "y" || choiceSp === "n") {

  }else{
    window.alert("Parameter error");
    return;
  }

  if 
  (choiceUp === "n" && choiceNum === "n" && choiceSp === "n") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
    var passGen = Math.floor(Math.random() * charLow.length);
      pass += charLow.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }
  
  if 
  (choiceUp === "y" && choiceNum === "n" && choiceSp === "n") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
      var charLowUp = charLow.concat(charUp)
    var passGen = Math.floor(Math.random() * charLowUp.length);
      pass += charLowUp.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }

  if 
  (choiceUp === "y" && choiceNum === "y" && choiceSp === "n") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
      var charLowUpNum = charLow.concat(charUp, charNum)
    var passGen = Math.floor(Math.random() * charLowUpNum.length);
      pass += charLowUpNum.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }

  if 
  (choiceUp === "y" && choiceNum === "y" && choiceSp === "y") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
      var charLowUpNumSp = charLow.concat(charUp, charNum, charSp)
    var passGen = Math.floor(Math.random() * charLowUpNumSp.length);
      pass += charLowUpNumSp.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }

  if 
  (choiceUp === "n" && choiceNum === "y" && choiceSp === "y") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
      var charLowNumSp = charLow.concat(charNum, charSp)
    var passGen = Math.floor(Math.random() * charLowNumSp.length);
      pass += charLowNumSp.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }

  if 
  (choiceUp === "n" && choiceNum === "n" && choiceSp === "y") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
      var charLowSp = charLow.concat(charSp)
    var passGen = Math.floor(Math.random() * charLowSp.length);
      pass += charLowSp.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }

  if 
  (choiceUp === "n" && choiceNum === "y" && choiceSp === "n") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
      var charLowNum = charLow.concat(charNum)
    var passGen = Math.floor(Math.random() * charLowNum.length);
      pass += charLowNum.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }

  if 
  (choiceUp === "y" && choiceNum === "n" && choiceSp === "y") {
    var pass = "";
    
    for (let i = 0; i < passlengthParam; i++) {
      var charLowUpSp = charLow.concat(charUp, charSp)
    var passGen = Math.floor(Math.random() * charLowUpSp.length);
      pass += charLowUpSp.slice(passGen, passGen +1);
    }
    window.alert(pass)
  }
};