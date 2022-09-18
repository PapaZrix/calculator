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