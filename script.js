const wrapper = document.querySelector(".main");
const calculator = document.querySelector(".calculator")
const display = document.querySelector(".display");
const container = document.querySelector(".container");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".function");
const equals = document.querySelector(".equals");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const clear = document.querySelector(".clear");

previousOperand.textContent = "";
currentOperand.textContent = 0;

let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";

// Basic calculator functions -> first number/operator/second number

digits.forEach((digit) => {
    digit.addEventListener("click", function(e) {
        storedNumber += e.target.innerHTML;
        console.log("Stored number: ", storedNumber);
        currentOperand.textContent = storedNumber;
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", function() {
        firstNumber = storedNumber;
        clickedOperator = operator.textContent;
        previousOperand.textContent = `${storedNumber} ${clickedOperator}`;
        storedNumber = "";
        console.log("First number: ", firstNumber);
        console.log("Operator: ", clickedOperator);
    })
});


































// Math operators
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}