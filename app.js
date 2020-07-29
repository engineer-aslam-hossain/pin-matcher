// global variable
const matched = document.getElementById("matched");
const notMatched = document.getElementById("notMatched");
let inputPin = document.getElementById("inputedNumber");
let generatePin = document.getElementById("generatedPin");
let submitingBtn = document.getElementById("submitBtn");
let pinGeneratingBtn = document.getElementById("pinGenerateBtn");
let givenTry = document.getElementById("tryLeft");

// pin generated button code

document
  .getElementById("pinGenerateBtn")
  .addEventListener("click", function () {
    let minNumber = 1000;
    let maxNumber = 9999;
    let randomNumber = Math.floor(
      Math.random() * (maxNumber - minNumber) + minNumber
    );
    generatePin.value = randomNumber;
    matched.style.display = "none";
    notMatched.style.display = "none";
    clearInputBox(inputPin);
  });

//   input clear function

function clearInputBox(id) {
  id.value = "";
}

// message enable desable function

function outputMessage(isMatched) {
  if (isMatched == true) {
    matched.style.display = "block";
    notMatched.style.display = "none";
  } else {
    matched.style.display = "none";
    notMatched.style.display = "block";
  }
}

// disabled input & button function

function disabled(id) {
  id.disabled = true;
  id.style.backgroundColor = "#425062";
}

// How many try left function
function tryLeft() {
  let tryNumber = parseInt(givenTry.innerText);
  givenTry.innerText = tryNumber - 1;

  if (givenTry.innerText == 0) {
    disabled(inputPin);
    disabled(generatePin);
    disabled(submitingBtn);
    disabled(pinGeneratingBtn);
  }
}

//Input number showing function and code

const numberBtn = document.querySelectorAll(".button");
numberBtn.forEach(number => {
  number.addEventListener("click", () => {
    inputNumberShow(number);
  });
});
function inputNumberShow(number) {
  if (inputPin.value.length <= 3) {
    inputPin.value = inputPin.value + number.innerText;
  } else {
    alert("You Cannot Enter More Than 4 Pin Number");
  }
  if (inputPin.disabled == true) {
    inputPin.value = "";
  }
}

// submit button code

document.getElementById("submitBtn").addEventListener("click", function () {
  if (inputPin.value === generatePin.value) {
    outputMessage(true);
    document.getElementById("tryLeft").innerText = 3;
  } else {
    outputMessage(false);
    tryLeft();
  }

  clearInputBox(inputPin);
  clearInputBox(generatePin);
});

// cancel button code

document.getElementById("cancel").addEventListener("click", function () {
  inputPin.value = "";
});

// remove last number code

document
  .getElementById("removeLastNumber")
  .addEventListener("click", function () {
    inputPin.value = inputPin.value.substring(0, inputPin.value.length - 1);
  });

// finished
