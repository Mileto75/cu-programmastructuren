"use strict";

window.addEventListener("load", initialize);

//Global variables
let divAssignment;
let divComparison;
let divArithmetic;
let divBooleans;
let divIfElse;
let divSwitchResult;
let divWhileResult;
let divDoWhileResult;
let divForResult;
let divForInResult;
let divBreakResult;
let divContinueResult;

let inpSwitch;
let inpWhile;
let inpDoWhile;
let inpFor;

function initialize() {

  //Get DOM elements & add eventlisteners if necessary
  const btnAssignmentOperators = document.querySelector("#assignment-operators");
  btnAssignmentOperators.addEventListener("click", displayAssignment);
  divAssignment = document.querySelector("#assignment-operators-result");
  
  const btnComparisonOperators = document.querySelector("#comparison-operators");
  btnComparisonOperators.addEventListener("click", displayComparison);
  divComparison = document.querySelector("#comparison-operators-result");

  const btnArithmeticOperators = document.querySelector("#arithmetic-operators");
  btnArithmeticOperators.addEventListener("click", displayArithmetic);
  divArithmetic = document.querySelector("#arithmetic-operators-result");

  const btnBooleanOperators = document.querySelector("#boolean-operators");
  btnBooleanOperators.addEventListener("click", displayBooleans);
  divBooleans = document.querySelector("#boolean-operators-result");

  const btnIfElseStatements = document.querySelector("#if-else-statements");
  btnIfElseStatements.addEventListener("click", displayIfElse);
  divIfElse = document.querySelector("#if-else-statements-result");

  const btnSwitch = document.querySelector("#switch-button");
  btnSwitch.addEventListener("click", displaySwitch);
  divSwitchResult = document.querySelector("#switch-result");
  inpSwitch = document.querySelector("#switch-input");

  const btnWhile = document.querySelector("#while-button");
  btnWhile.addEventListener("click", displayWhile);
  divWhileResult = document.querySelector("#while-result");
  inpWhile = document.querySelector("#while-input");

  const btnDoWhile = document.querySelector("#do-while-button");
  btnDoWhile.addEventListener("click", displayDoWhile);
  divDoWhileResult = document.querySelector("#do-while-result");
  inpDoWhile = document.querySelector("#do-while-input");

  const btnFor = document.querySelector("#for-button");
  btnFor.addEventListener("click", displayFor);
  divForResult = document.querySelector("#for-result");
  inpFor = document.querySelector("#for-input");

  const btnForIn = document.querySelector("#for-in-button");
  btnForIn.addEventListener("click", displayForIn);
  divForInResult = document.querySelector("#for-in-result");
  
  const btnBreak = document.querySelector("#break-button");
  btnBreak.addEventListener("click", displayBreak);
  divBreakResult = document.querySelector("#break-result");

  const bntContinue = document.querySelector("#continue-button");
  bntContinue.addEventListener("click", displayContinue);
  divContinueResult = document.querySelector("#continue-result");

}


function displayAssignment() {

  let numberLeft = 6;
  let numberRight = 10;
  const sum = numberLeft + numberRight;

  let message = `Bij waarde numberLeft = ${numberLeft} en waarde numberRight = ${numberRight} wordt de som ${sum}`;

  numberLeft += 3;
  numberRight *= numberLeft;
  message += `De nieuwe waarde van numberLeft is ${numberLeft} en de nieuwe waarde van numberRight is ${numberRight}<br />`;  

  divAssignment.innerHTML = message;

  const fruit = "appel";
  divAssignment.innerHTML += `${typeof(fruit)} <br/>`;
  const bool = true;
  divAssignment.innerHTML += `${typeof(bool)} <br/>`;
  const number = 7.6;
  divAssignment.innerHTML += `${typeof(number)} <br/>`;

}

function displayComparison() {

  const numberLeft = 6;
  const numberRight = 10;
  const sum = "6";

  divComparison.innerHTML =
  `numberLeft (${numberLeft}) == numberRight (${numberRight}) => ${numberLeft == numberRight} <br/>
   numberLeft (${numberLeft}) == sum ("${sum}") => ${numberLeft == sum} <br/>
   numberLeft (${numberLeft}) === sum ("${sum}") => ${numberLeft === sum} <br/>
   numberLeft (${numberLeft}) !== sum (${numberRight}) => ${numberLeft !== numberRight} <br/>
   numberLeft (${numberLeft}) < sum (${numberRight}) => ${numberLeft < numberRight} <br/>
   numberLeft (${numberLeft}) > (${numberRight}) => ${numberLeft > numberRight}`;
}

function displayArithmetic() {

  let numberLeft = 5;
  let numberRight = 10;

  divArithmetic.innerHTML = 
  `numberLeft (${numberLeft}) + numberRight (${numberRight}) => ${numberLeft + numberRight} <br/>
  numberLeft (${numberLeft}) - numberRight (${numberRight}) => ${numberLeft - numberRight} <br/>
  numberLeft (${numberLeft}) * numberRight (${numberRight}) => ${numberLeft * numberRight} <br/>
  numberLeft (${numberLeft}) / numberRight (${numberRight}) => ${numberLeft / numberRight} <br/>
  numberLeft (${numberLeft}) % numberRight (${numberRight}) => ${numberLeft % numberRight} <br/>
  numberLeft (${numberLeft}) ++  => ${numberLeft++} <br/>
  --numberRight (${numberRight})  => ${--numberRight} `;

}

function displayBooleans() {

  const numberLeft = 8;
  const numberRight = 10;

  divBooleans.innerHTML = 
  `(numberLeft (${numberLeft}) < 10) && (numberRight (${numberRight}) > 40) => ${(numberLeft < 10) && (numberRight > 40)} <br/>
  (numberLeft (${numberLeft}) < 10) || (numberRight (${numberRight}) > 40) => ${(numberLeft < 10) || (numberRight > 40)}`;

}

function displayIfElse() {

  const minimumStudentsPerGroup = 25;
  const maximumStudentsPerGroup = 40;
  let numberOfStudents = 21;
  let hasLecturer = false;
  let coursePrice = 12.5;
  let message = "";

  //if with only 1 statement => no { } necessary
  if (coursePrice < 15) 
    message = `De cursus met prijs &euro; ${coursePrice} is niet zo duur.`;

  //if with multiple statements
  if (numberOfStudents <= minimumStudentsPerGroup) {
    message += `<br />  Een te kleine klas met ${numberOfStudents} studenten, we moeten wat meer reclame maken!`;
    message += `<br /> Ter info: een klas dient minimaal ${minimumStudentsPerGroup} inschrijven te hebben.`;
  }

  //if with else clause
  if ((hasLecturer) && (numberOfStudents > 0)) {
    message = "<br /> Nog geen studenten ingeschreven, geen paniek!";
  }
  else {
    message += `<br /> Let op: Er is nog geen lector voor het vak!`;
  }

  //Short notation of if ... else
  (numberOfStudents < maximumStudentsPerGroup) ? message += "<br />Er zijn plaatsen over" : message += "<br />Er zijn geen plaatsen over.";

  //even shorter!
  //message += (numberOfStudents < maximumStudentsPerGroup) ? "<br />Er zijn plaatsen over" : "<br />Er zijn geen plaatsen over."

  divIfElse.innerHTML = message;

}

function displaySwitch() {
  
  const name = inpSwitch.value;
  let nameCorrect = false;
  let message = "";

  switch (name) {
    case "Jan":
      nameCorrect = true;
      break;
    case "Piet":
      nameCorrect = true;
      break;
    case "Tjores":
      nameCorrect = true;
      break;
    case "Corneel":
      nameCorrect = true;
      break;
    default:
      nameCorrect = false;
      break;
  }

  nameCorrect ? message = "is een scheepvaarder" : message = "is geen scheepvaarder";

  message = `${name} ${message}`;
  divSwitchResult.textContent = message;

  inpSwitch.value = "";

}

function displayWhile() {

  const maximumValue = parseInt(inpWhile.value);
  let currentValue = 1;
  let message = "";

  while (currentValue <= maximumValue) {
    message += `De currentValue is nu ${currentValue} <br/>`;
    currentValue++;
  }
  
  divWhileResult.innerHTML = message;
  inpWhile.value = "";

}

function displayDoWhile() {

  const maximumValue = 10;
  let currentValue = parseInt(inpDoWhile.value);
  let message = "";

  do {
    message += `De waarde is nu ${currentValue} <br/>`;
    currentValue++;
  }
  while (currentValue <= maximumValue)

  divDoWhileResult.innerHTML = message;
  inpDoWhile.value = "";

}

function displayFor() {

  const minimumValue = 3;
  let currentValue = parseInt(inpFor.value);
  let message = "";

  for (let i = currentValue; i > minimumValue; i--) {
    message += `De luswaarde is nu ${i} <br/>`;
  }

  divForResult.innerHTML = message;
  inpDoWhile.value = "";

}

function displayForIn() {

    // We maken een object 
    const person = { firstName: "Piet", lastName: "Pienter", age: 35, isFictional: true };
    let message = "";

    for (let key in person) {
      message += `${key.toString()} => ${person[key]} <br/>`; 
    }

    divForInResult.innerHTML = message;
}

function displayBreak() {

  let message = "";

  for (let i = 1; i < 11; i = i + 2) {
    
    if (i === 7) break;

    message += `De waarde is nu ${i} <br/>`;
  }

  divBreakResult.innerHTML = message;

}

function displayContinue() {

  let currentValue = 0;
  let message = "";

  while (currentValue < 8) {

    currentValue++;

    if ((currentValue === 3) || (currentValue === 6)) continue;
    message += `De huidige waarde is nu ${currentValue} <br/>`;    
    
  }

  divContinueResult.innerHTML = message;

}