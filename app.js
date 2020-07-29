// pin generated button code

document
  .getElementById("pinGenerateBtn")
  .addEventListener("click", function () {
    let minNumber = 1000;
    let maxNumber = 9999;
    let randomNumber = Math.floor(
      Math.random() * (maxNumber - minNumber) + minNumber
    );

    document.getElementById("notMatched").style.display = "none";
    document.getElementById("matched").style.display = "none";
    clearInput("inputedNumber");
    document.getElementById("generatedPin").value = randomNumber;
  });

//   input clear function

function clearInput(id) {
  document.getElementById(id).value = "";
}

// message enable desable function

const matched = document.getElementById("matched");
const notMatched = document.getElementById("notMatched");
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
  document.getElementById(id).disabled = true;
  document.getElementById(id).style.backgroundColor = "#425062";
}

// How many try left function
function tryLeft() {
  let givenTry = document.getElementById("tryLeft").innerText;
  let tryNumber = parseInt(givenTry);
  document.getElementById("tryLeft").innerText = tryNumber - 1;

  if (document.getElementById("tryLeft").innerText == 0) {
    disabled("submitBtn");
    disabled("inputedNumber");
    disabled("generatedPin");
    disabled("pinGenerateBtn");
  }
}

//Inputed number showing value

function inputNumberShow(id) {
  document.getElementById(id).addEventListener("click", function (event) {
    let number = document.getElementById(id).innerText;
    let existingNumber = document.getElementById("inputedNumber").value;
    if (existingNumber.length <= 3) {
      document.getElementById("inputedNumber").value = existingNumber + number;
    } else {
      alert("You Cannot Enter More Than 4 Pin Number");
    }
    if (document.getElementById("inputedNumber").disabled == true) {
      document.getElementById("inputedNumber").value = "";
    }
  });
}
//
inputNumberShow("zero");
inputNumberShow("one");
inputNumberShow("two");
inputNumberShow("three");
inputNumberShow("four");
inputNumberShow("five");
inputNumberShow("six");
inputNumberShow("seven");
inputNumberShow("eight");
inputNumberShow("nine");

// submit button code

document.getElementById("submitBtn").addEventListener("click", function () {
  let inputPin = document.getElementById("inputedNumber").value;
  let generatePin = document.getElementById("generatedPin").value;
  if (inputPin === generatePin) {
    outputMessage(true);
    document.getElementById("tryLeft").innerText = 3;
  } else {
    outputMessage(false);
    tryLeft();
  }

  clearInput("inputedNumber");
  clearInput("generatedPin");
});

// cancel button code

document.getElementById("cancel").addEventListener("click", function () {
  document.getElementById("inputedNumber").value = "";
});

// remove last number code

document
  .getElementById("removeLastNumber")
  .addEventListener("click", function () {
    let inputNumbers = document.getElementById("inputedNumber").value;
    document.getElementById("inputedNumber").value = inputNumbers.substring(
      0,
      inputNumbers.length - 1
    );
  });

// finished
