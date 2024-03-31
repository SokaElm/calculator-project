const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) {
    return "On ne peut pas diviser par 0";
  }
  return a / b;
};

let operand;
let displayValue;
let firstDisplayValue = 0;
let secundDisplayValue;
let operatorJustClicked = false;

const operate = function (firstDisplayValue, secundDisplayValue, operand) {
  switch (operand) {
    case "+":
      return add(firstDisplayValue, secundDisplayValue);
      break;
    case "-":
      return subtract(firstDisplayValue, secundDisplayValue);
      break;
    case "x":
      return multiply(firstDisplayValue, secundDisplayValue);
      break;
    case "%":
      return divide(firstDisplayValue, secundDisplayValue);
      break;
  }
};

const display = document.querySelector(".display");

const digits = document.querySelectorAll(".digit");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#erase");

const operands = document.querySelectorAll(".operand");
let result;

digits.forEach((button) => {
  button.addEventListener("click", () => {
    if (operatorJustClicked === false) {
      display.textContent = display.textContent + button.textContent;
    } else {
      display.textContent = button.textContent;
      operatorJustClicked = false;
    }
  });
});

operands.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstDisplayValue === 0) {
      firstDisplayValue = Number(display.textContent);
      operatorJustClicked = true;
      operand = button.textContent;
    } else {
      secundDisplayValue = Number(display.textContent);
      result = operate(firstDisplayValue, secundDisplayValue, operand);
      display.textContent = Math.round(result * 1000000) / 1000000;
      firstDisplayValue = result;
      operatorJustClicked = true;
      operand = button.textContent;
    }
  });
});

equal.addEventListener("click", () => {
  if (
    (secundDisplayValue === undefined && firstDisplayValue === 0) ||
    operatorJustClicked === true
  ) {
    result == Math.round(result * 1000000) / 1000000;
  } else {
    secundDisplayValue = Number(display.textContent);
    result = operate(firstDisplayValue, secundDisplayValue, operand);
    display.textContent = Math.round(result * 1000000) / 1000000;
    operatorJustClicked = true;
    firstDisplayValue = 0;
  }
});

clear.addEventListener("click", () => {
  display.textContent = "";
  firstDisplayValue = 0;
  secundDisplayValue = undefined;
  operatorJustClicked = false;
});

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
  if (display.textContent.includes(".")) {
    button.disabled = true;
  }
  display.textContent = display.textContent + ".";
});

const undo = document.querySelector("#undo");
undo.addEventListener("click", () => {
  if ((operatorJustClicked = true)) {
    display.textContent = display.textContent.slice(0, -1);
    operatorJustClicked = false;
  }
});
