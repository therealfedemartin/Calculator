
//**** CREATE CALCULATION FUNCTIONS *****

function add (a, b) {
    return (a + b);
}

function subtract (a, b) {
    return (a - b);
}

function multiply (a, b) {
    return (a * b);
}

function divide (a, b) {
    return (a / b);
}

//**** CREATE VARIABLES ****

let firstNumber;
let operators;
let secondNumber;

//**** CREATE FUNCTION THAT CALLS CALCULATION FUNCTIONS ****

function operate (numberOne, operator, numberTwo) {
    switch (operator) {
        case clickAdd:
            return add(numberOne, numberTwo);  
        case clickSubtract:
            return subtract(numberOne, numberTwo);
        case clickMultiply:
            return multiply(numberOne, numberTwo);
        case clickDivide:
            return divide(numberOne, numberTwo);
    }
}